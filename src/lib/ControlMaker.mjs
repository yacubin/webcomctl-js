import { representClassNames } from './CSSHelper.mjs';
import { loadSvgAsCssUrlAsync, loadSvgAsHtmlAsync } from './SVG.mjs';

export class CSSClassName {
  _name;

  constructor(params) {
    if (params instanceof CSSClassName)
      this._name = params.name;
    else
      this._name = params;
  }

  get name() {
    return this._name;
  }

  toString() {
    return representClassNames(this._name);
  }
};

export class CSSVarName {
  _name;

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  toString() {
    return "--" + representClassNames(this._name);
  }
};

export class CSSVariable {
  _name;
  _value;

  constructor(name, value) {
    if (typeof name === 'string')
      name = new CSSVarName(name);
    this._name = name;
    this._value = value;
  }

  get name() {
    return this._name;
  }

  get value() {
    return this._value;
  }

  asVar() {
    return `var(${this._name})`;
  }

  get valueCount() {
    return Array.isArray(this._value) ? this._value.length : 1;
  }

  toString(n) {
    let value = this._value;
    if (Array.isArray(this._value) && typeof n === 'number')
      value = this._value[n];
    return `${this._name}:${value}`;
  }
};

export class CSSBlock {

};

export default class ControlMaker {
  _name;
  _currentUrl;
  _cssClassNames = {};
  _cssVarNames = {};
  _cssList = {};
  _htmlList = {};

  constructor(name, currentUrl) {
    this._name = name;
    this._currentUrl = currentUrl;
  }

  get name() {
    return this._name;
  }

  async loadSvgAsCssUrl(filepath) {
    if (!this._currentUrl)
      throw new Error(`Uknown reletive path for ${this._name}`);
    return await loadSvgAsCssUrlAsync(this._currentUrl, filepath);
  }

  async loadSvgAsHtmlAsync(filepath) {
    if (!this._currentUrl)
      throw new Error(`Uknown reletive path for ${this._name}`);
    return await loadSvgAsHtmlAsync(this._currentUrl, filepath);
  }

  newClassName(classname) {
    if (this._cssClassNames.hasOwnProperty(classname))
      throw `CSS class '${classname}' exist in ${this._name}`;
    const obj = new CSSClassName(`${this._name}-${classname}`);
    this._cssClassNames[classname] = obj;
    return obj.toString();
  }

  newClassNameMap(params) {
    const result = {};
    for (const iter of params) {
      result[iter] = this.newClassName(iter);
    }
    return Object.freeze(Object.seal(result));
  }

  newVarName(varname) {
    if (this._cssVarNames.hasOwnProperty(varname))
      throw `CSS var '${varname}' exist in ${this._name}`;
    const obj = new CSSVarName(`${this._name}-${varname}`);
    this._cssVarNames[varname] = obj;
    return obj.toString();
  }

  newCSSVariable(name, value) {
    if (this._cssClassNames.hasOwnProperty(name))
      throw `CSS class '${name}' exist in ${this._name}`;
    const obj = new CSSVariable(`${this._name}-${name}`, value);
    this._cssClassNames[name] = obj;
    return obj;
  }

  newCSSVariableMap(params) {
    const result = Object.create({}, {
      toString: {
        writable: false,
        enumerable: false,
        configurable: false,
        value: function(n) {
          n = n || 0;
          let str = '';
          for (const val of Object.values(this)) {
            if (n < val.valueCount)
              str += val.toString(n) + ';';
          }
          return str;
        },
      }
    });
    for (const [key,val] of Object.entries(params)) {
      result[key] = this.newCSSVariable(key, val);
    }
    return Object.freeze(Object.seal(result));
  }

  newAnimationName(animename) {
    return representClassNames(`${this._name}-${animename}`);
  }

  newHTML(name, html) {
    if (this._htmlList.hasOwnProperty(name))
      throw `HTML '${name}' exist in ${this._name}`;
    this._htmlList[name] = html;
    return html;
  }

  newCSS(name, css) {
    if (this._cssList.hasOwnProperty(name))
      throw `HTML '${name}' exist in ${this._name}`;
    this._cssList[name] = Array.isArray(css) ? css.join("\n") : css;
    return css;
  }

  get cssClassNames() {
    return this._cssClassNames;
  }

  get cssVarNames() {
    return this._cssVarNames;
  }

  get htmlList() {
    return this._htmlList;
  }

  get cssList() {
    return this._cssList;
  }

  buildComponent() {
    const component = {};
    for (const [key, val] of Object.entries(this._cssClassNames)) {
      component[key] = val.toString();
    }
    for (const [key, val] of Object.entries(this._htmlList)) {
      component[key] = val.toString();
    }
    for (const [key, val] of Object.entries(this._cssList)) {
      component[key] = val.toString();
    }
    return component;
  }
};
