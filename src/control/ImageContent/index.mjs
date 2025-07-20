import { BaseControl, Util, NQDOM } from 'webnetq-js';
import { CONTENT_CLASS, BUTT_LEFT_CLASS, BUTT_RIGHT_CLASS, IMAGE_POSITION, IMAGE_NUMBERS, LEFT_CLICK, RIGHT_CLICK } from 'uictmplt-loader!./template.mjs';

const IMAGECHANGED_EVENT = 'imageChanged';

export class ImageContent extends BaseControl {
  _imageElm;
  _posElm;
  _numsElm;
  _images = [];
  _currentIndex = -1;

  _init() {
    this._imageElm = NQDOM.getElementByClassName(this.element, CONTENT_CLASS);
    this._posElm = NQDOM.getElementByClassName(this.element, IMAGE_POSITION);
    this._numsElm = NQDOM.getElementByClassName(this.element, IMAGE_NUMBERS);

    const leftElm = NQDOM.getElementByClassName(this.element, LEFT_CLICK);
    leftElm && leftElm.addEventListener("click", event => this.onLeftClick(event));
    const rightElm = NQDOM.getElementByClassName(this.element, RIGHT_CLICK);
    rightElm && rightElm.addEventListener("click", event => this.onRightClick(event));

    this.registerEvent(IMAGECHANGED_EVENT);
  }

  setContent(params) {
    this.clearImages();
    this.addImage(params);
  }

  addImage(params) {
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

  loadImageByIndex(index) {
    this._imageElm && (this._imageElm.src = this._images[index].url);
    this._currentIndex = index;
    this.dispatchEvent(IMAGECHANGED_EVENT, {index});
  }

  updateButtons() {
    this._element.classList.toggle(BUTT_LEFT_CLASS, this._currentIndex !== 0);
    this._element.classList.toggle(BUTT_RIGHT_CLASS, this._currentIndex !== (this._images.length - 1));
    this._posElm && (this._posElm.textContent = this._currentIndex + 1);
    this._numsElm && (this._numsElm.textContent = this._images.length);
  }

  clearImages() {
    for (const iter of this._images) {
      if (iter.hasRef)
        Util.revokeObjectURL(iter.url);
    }
    this._images = [];
    this._currentIndex = -1;
  }

  onLeftClick(event) {
    if (this._currentIndex > 0) {
      this.loadImageByIndex(this._currentIndex - 1);
      this.updateButtons();
    }
  }

  onRightClick(event) {
    if (this._currentIndex < (this._images.length - 1)) {
      this.loadImageByIndex(this._currentIndex + 1);
      this.updateButtons();
    }
  }
};
