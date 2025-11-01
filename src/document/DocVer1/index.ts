// @ts-ignore
import { ROOT_CLASS, PORT_CLASS } from "uictmplt-loader!./template.ts";
import { DARKMODE_ATTR_NAME, DARKMODE_DEFAULT_VALUE } from "@/lib/DarkMode";

export class DocVer1 {
  public static createDocument(document: HTMLDocument): HTMLDocument {
    const doc = document.implementation.createHTMLDocument();
    doc.documentElement.setAttribute(DARKMODE_ATTR_NAME, DARKMODE_DEFAULT_VALUE);
    doc.body.classList.add(ROOT_CLASS, PORT_CLASS);
    return doc;
  }
};
