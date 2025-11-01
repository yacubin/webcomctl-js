
const ROOT_CLASS = "BitMakeLeft-RootClass";

/*
<div class="${ROOT_CLASS}">
  <ul>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
  </ul>
</div>
*/

export class BitMakeLeft {
  protected _rootClass: string;
  private _element!: HTMLElement;

  constructor() {
    this._rootClass = this.genVarName();
  }

  private genVarName(): string {
    return "";
  }

  public setElement(element: HTMLElement) {
    this._element = element;
  }

  public initRule(sheet: CSSStyleSheet): void {
    sheet.insertRule(`.${this._rootClass} { height: 100%; width: 100%; max-width: 300px; min-width: 240px; padding: 40px 15px 30px 15px; overflow: hidden; }`, sheet.cssRules.length);
    sheet.insertRule(`.${this._rootClass} ul { list-style-type: none; width: 100%; height: 100%; padding: 0 10px; overflow: auto; }`, sheet.cssRules.length);
    sheet.insertRule(`.${this._rootClass} ul li { padding: 7px 20px; border-radius: 10px; text-overflow: ellipsis; word-break: normal; white-space: nowrap; overflow: hidden; cursor: pointer;}`, sheet.cssRules.length);
    sheet.insertRule(`.${this._rootClass} ul li:hover { background-color: #50505026; }`, sheet.cssRules.length);
    sheet.insertRule(`.${this._rootClass} * { box-sizing: border-box; }`, sheet.cssRules.length);
  }

  public initElement(element: HTMLElement): void {
    const document = element.ownerDocument;
    element.classList.add(this._rootClass);

    const ul = document.createElement("ul");

    const li1 = document.createElement("li");
    li1.textContent = "Introduction";
    ul.appendChild(li1);

    const li2 = document.createElement("li");
    li2.textContent = "Introduction";
    ul.appendChild(li2);
    
    element.appendChild(ul);
  }

  public appendChild(child: HTMLElement) {
  }
};
