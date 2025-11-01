import { BaseControl, Util, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML, CONTENT_CLASS, BUTT_LEFT_CLASS, BUTT_RIGHT_CLASS, IMAGE_POSITION, IMAGE_NUMBERS, LEFT_CLICK, RIGHT_CLICK } from "uictmplt-loader!./template.ts";

const IMAGECHANGED_EVENT = "imageChanged";

interface ImageInfo {
  url: string;
  hasRef: boolean;
};

export class ImageContent extends BaseControl {
  private _imageElm?: HTMLImageElement;
  private _posElm?: HTMLElement;
  private _numsElm?: HTMLElement;
  private _images: ImageInfo[] = [];
  private _currentIndex = -1;

  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }

  protected _init() {
    this._imageElm = NQDOM.getElementByClassName(this.element, CONTENT_CLASS) as HTMLImageElement;
    this._posElm = NQDOM.getElementByClassName(this.element, IMAGE_POSITION) as HTMLElement;
    this._numsElm = NQDOM.getElementByClassName(this.element, IMAGE_NUMBERS) as HTMLElement;

    const leftElm = NQDOM.getElementByClassName(this.element, LEFT_CLICK);
    leftElm && leftElm.addEventListener("click", event => this.onLeftClick(event));
    const rightElm = NQDOM.getElementByClassName(this.element, RIGHT_CLICK);
    rightElm && rightElm.addEventListener("click", event => this.onRightClick(event));

    this.registerEvent(IMAGECHANGED_EVENT);
  }

  public setContent(params: string) {
    this.clearImages();
    this.addImage(params);
  }

  public addImage(params: string) {
    const item = {
      url: params,
      hasRef: false,
    };

    if (typeof item.url !== 'string') {
      item.url = Util.createObjectURL(item.url);
      item.hasRef = true;
    }

    this._images.push(item);

    if (this._currentIndex === -1) {
      this.loadImageByIndex(0);
    }

    this.updateButtons();
  }

  public loadImageByIndex(index: number) {
    this._imageElm && (this._imageElm.src = this._images[index].url);
    this._currentIndex = index;
    this.dispatchEvent(IMAGECHANGED_EVENT, {index});
  }

  public updateButtons() {
    this.element.classList.toggle(BUTT_LEFT_CLASS, this._currentIndex !== 0);
    this.element.classList.toggle(BUTT_RIGHT_CLASS, this._currentIndex !== (this._images.length - 1));
    this._posElm && (this._posElm.textContent = (this._currentIndex + 1).toString());
    this._numsElm && (this._numsElm.textContent = this._images.length.toString());
  }

  public clearImages() {
    for (const iter of this._images) {
      if (iter.hasRef)
        Util.revokeObjectURL(iter.url);
    }
    this._images = [];
    this._currentIndex = -1;
  }

  private onLeftClick(event: MouseEvent) {
    if (this._currentIndex > 0) {
      this.loadImageByIndex(this._currentIndex - 1);
      this.updateButtons();
    }
  }

  private onRightClick(event: MouseEvent) {
    if (this._currentIndex < (this._images.length - 1)) {
      this.loadImageByIndex(this._currentIndex + 1);
      this.updateButtons();
    }
  }
};
