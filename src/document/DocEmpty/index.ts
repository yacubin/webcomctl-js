// @ts-ignore
import { PORT_CLASS } from "uictmplt-loader!./template.ts";

export class DocEmpty {
  public static createDocument(document: HTMLDocument): HTMLDocument {
    const doc = document.implementation.createHTMLDocument();
    doc.body.classList.add(PORT_CLASS);
    return doc;
  }
};
