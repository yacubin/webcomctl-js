import { representClassNames } from "@/lib/CSSHelper";

export class CSSClassName {
  private _name: string;

  public constructor(params: CSSClassName | string) {
    if (params instanceof CSSClassName)
      this._name = params.name;
    else
      this._name = params;
  }

  public get name() {
    return this._name;
  }

  public toString() {
    return representClassNames(this._name);
  }
};

export class CSSVarName {
  private _name: string;

  public constructor(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public toString() {
    return "--" + representClassNames(this._name);
  }
};

type CSSVariableValue = [ string, string ] | [ string ] | string;

export class CSSVariable {
  private _name: CSSVarName;
  private _value: CSSVariableValue;

  public constructor(name: CSSVarName | string, value: CSSVariableValue) {
    if (typeof name === 'string')
      name = new CSSVarName(name);
    this._name = name;
    this._value = value;
  }

  public get name() {
    return this._name;
  }

  public get value() {
    return this._value;
  }

  public asVar() {
    return `var(${this._name})`;
  }

  public get valueCount() {
    return Array.isArray(this._value) ? this._value.length : 1;
  }

  public toString(n?: number) {
    let value = this._value;
    if (Array.isArray(this._value) && typeof n === 'number')
      value = this._value[n];
    return `${this._name}:${value}`;
  }
};

export class CSSBlock {

};

export default class ControlMaker {
  private _name: string;
  private _cssClassNames: { [name: string]: CSSClassName | CSSVariable };
  private _cssVarNames: { [name: string]: CSSVarName };
  private _cssList: { [name: string]: string };
  private _htmlList: { [name: string]: string };

  public constructor(name: string) {
    this._name = name;
    this._cssClassNames = {};
    this._cssVarNames = {};
    this._cssList = {};
    this._htmlList = {};
  }

  public get name() {
    return this._name;
  }

  public newClassName(classname: string) {
    if (this._cssClassNames.hasOwnProperty(classname))
      throw `CSS class '${classname}' exist in ${this._name}`;
    const obj = new CSSClassName(`${this._name}-${classname}`);
    this._cssClassNames[classname] = obj;
    return obj.toString();
  }

  public newClassNameMap<K extends string>(params: K[]): { [P in K]: string } {
    const result: any = {};
    for (const iter of params) {
      result[iter] = this.newClassName(iter);
    }
    return Object.freeze(Object.seal(result));
  }

  public newVarName(varname: string) {
    if (this._cssVarNames.hasOwnProperty(varname))
      throw `CSS var '${varname}' exist in ${this._name}`;
    const obj = new CSSVarName(`${this._name}-${varname}`);
    this._cssVarNames[varname] = obj;
    return obj.toString();
  }

  public newCSSVariable(name: string, value: string) {
    if (this._cssClassNames.hasOwnProperty(name))
      throw `CSS class '${name}' exist in ${this._name}`;
    const obj = new CSSVariable(`${this._name}-${name}`, value);
    this._cssClassNames[name] = obj;
    return obj;
  }

  public newCSSVariableMap<T extends { [name: string]: CSSVariableValue  }>(params: T): { [K in keyof T]: CSSVariable } & { toString(n?: 0 | 1): string } {
    const result = Object.create({}, {
      toString: {
        writable: false,
        enumerable: false,
        configurable: false,
        value: function(n?: number) {
          n = n || 0;
          let str = '';
          for (const val of Object.values(this)) {
            if (n < (val as any).valueCount)
              str += (val as any).toString(n) + ';';
          }
          return str;
        },
      }
    });
    for (const [key, val] of Object.entries(params)) {
      result[key] = this.newCSSVariable(key, val as any);
    }
    return Object.freeze(Object.seal(result));
  }

  public newAnimationName(animename: string) {
    return representClassNames(`${this._name}-${animename}`);
  }

  public newHTML(name: string, html: string) {
    if (this._htmlList.hasOwnProperty(name))
      throw `HTML '${name}' exist in ${this._name}`;
    this._htmlList[name] = html;
    return html;
  }

  public newCSS(name: string, css: string[] | string) {
    if (this._cssList.hasOwnProperty(name))
      throw `HTML '${name}' exist in ${this._name}`;
    this._cssList[name] = Array.isArray(css) ? css.join("\n") : css;
    return css;
  }

  public get cssClassNames() {
    return this._cssClassNames;
  }

  public get cssVarNames() {
    return this._cssVarNames;
  }

  public get htmlList() {
    return this._htmlList;
  }

  public get cssList() {
    return this._cssList;
  }

  public buildComponent() {
    const component = {} as any;
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
