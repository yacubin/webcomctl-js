import { BaseControl } from 'webnetq-js';
import { dbc_state_expand, dbc_state_click } from 'uictmplt-loader!./template.mjs';

const EXPAND_TYPE = "dbc_state_expand";
const CLICK_TYPE = "dbc_state_click";

export default class DBCTreeControl extends BaseControl {
_init() {
  const elements = document.getElementsByClassName(CLICK_TYPE);
  Array.from(elements).forEach(el => {
    el.addEventListener("click", () => {
      el.classList.remove(EXPAND_TYPE);
      el.classList.add(EXPAND_TYPE);
    });
  });
    }
};
