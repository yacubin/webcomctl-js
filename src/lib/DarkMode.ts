import { Setting } from "webnetq-js";

export const DARKMODE_ATTR_NAME = "data-" + Setting.DATA_KEY;
export const DARKMODE_LIGHT_VALUE = Setting.LIGHT_VAL;
export const DARKMODE_DARK_VALUE = Setting.DARK_VAL;
export const DARKMODE_DEFAULT_VALUE = DARKMODE_LIGHT_VALUE;
export const DARKMODE_SELECTOR_VALUE = `[${DARKMODE_ATTR_NAME}="${DARKMODE_DARK_VALUE}"]`;
