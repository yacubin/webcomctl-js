import { BaseControl } from 'webnetq-js';
import { dbc_state_expand, dbc_state_click } from 'uictmplt-loader!./template.mjs';

const EXPAND_TYPE = "dbc_state_expand";
const CLICK_TYPE = "dbc_state_click";

export default class DBCTreeControl extends BaseControl {
    _init() {
        document.getElementByClassName(CLICK_TYPE).addEventListener("click", (event) => {
            CLICK_TYPE.classList.remove(EXPAND_TYPE) && CLICK_TYPE.classList.add(EXPAND_TYPE);
        })
    }
};
