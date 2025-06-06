import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
const mk = new ControlMaker("Registration", import.meta.url);
import { TOOLBAR_FONT_SANS } from '../../lib/WickedTheme.mjs';

const IMG = await mk.loadSvgAsCssUrl('./attention.svg');

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "ENTER_REG",
  "ADD_DEV",
]);

  const form_sign = 'gray';
  const form_warning = '#d93025';
  const form_label_col = 'black';
  const form_label_bg = 'white';
  const form_label_col_hov = '#1a73e8';
  const form_labe_off_col = 'grey';
  const form_but_reg_bg_hov = '#36a420';
  const form_pas_txt_foc_car = '#1b74e4';
  const form_pas_txt_foc_col = '#1b74e4';
  const form_pas_txt_foc_bs = '#e7f3ff';
  const form_txt_col = 'gray';
  const form_txt_col_hov = 'black';
  const form_add_label_foc_col = '#1a73e8';
  const form_add_inp_col = '#D9D9D9';
  const form_add_but_col = 'white';
  const form_add_but_bg_hov = '#0264e2c7';
  const form_add_but2_bg_hov = '#f4f4f4';
  const form_add_but2_bg = 'white';

const vars = mk.newCSSVariableMap({
  walx_add_color: ['#1877f2', '#1760bf'],
  walx_add_color_hov: ['#0264e2', '#0264e2'],
  input_window_bor: ['#D9D9D9', '#4a4c4e'],
  input_window_bg: ['white', '#17171a'],
  input_autofill: ['white', '#17171a'],
  input_autofill_foc: ['white', '#17171a'],
  input_col: ['black', 'gray'],
  form_bs: ['#d1d0d0', '#4a4c4e'],
  form_labe_off_bg: ['white', '#17171a'],
  form_labe_on_bg: ['white', '#17171a'],
  form_labe_on_col: ['#1a73e8', '#2265bc'],
  form_but_col: ['white', '#17171a'],
  form_delimiter: ['#dadde1', '#4a4c4e'],
  form_but_reg_bg: ['#42b72a', '#328f1f'],
  form_add_pas_txt_foc_car: ['#1b74e4', '#2265bc'],
  form_add_pas_txt_foc_bor: ['#1b74e4', '#2265bc'],
  form_pt_hov_foc_car: ['#1b74e4', '#2265bc'],
  form_pt_hov_foc_bor: ['#1b74e4', '#2265bc'],
  form_pt_hov_foc_bs: ['#e7f3ff', '#2a2c2e'],
  form_txt_col_hov: ['black', '#a6a6a6'],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <form>
    <span>
      <input id="fld-email" placeholder="" type="text" name="pole1" data-hide-value=""/>
      <label for="fld-email">email</label>
    </span>
    <span>
      <input id="fld-password" placeholder="" type="password" name="pole2" data-hide-value=""/>
      <label for="fld-password">password</label>
    </span>
    <u id="attention-message" style="display: none">
      <h1></h1>
      <div>Wrong password or email!</div>
    </u>
    <div>
      <input id="btn-login" type="button" value="Log in" name="pole3"/>
      <div>Forgot your password?</div>
    </div>
    <s>
      <span></span>
    </s>
    <div>
      <input type="button" value="Registration" name="pole4"/>
    </div>
  </form>

  <form>
    <span>
      <input id="email2" placeholder="" type="text" name="pole1" data-hide-value=""/>
      <label for="email2">email address</label>
    </span>
    <span>
      <input id="password2" placeholder="" type="password" name="pole2" data-hide-value=""/>
      <label for="password2">new password</label>
    </span>
    <span>
      <input id="password3" placeholder="" type="password" name="pole2" data-hide-value=""/>
      <label for="password3">repeat password</label>
    </span>
    <u>
      <h1></h1>
      <div>
        Wrong password or email !
      </div>
    </u>
    <s>
      <span></span>
    </s>
    <div>
      <input type="button" value="Registration" name="pole4" data-hide-value=""/>
    </div>
  </form>
</div>
`);

mk.newCSS('CSS', `
:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${clss.ROOT_CLASS} input:-webkit-autofill 
{
  box-shadow: inset 0 0 0 50px ${vars.input_autofill.asVar()};
}

.${clss.ROOT_CLASS} > form input[type="password"]:-webkit-autofill:focus, 
.${clss.ROOT_CLASS} > form input[type="text"]:-webkit-autofill:focus 
{
  box-shadow: inset 0 0 0 50px ${vars.input_autofill_foc.asVar()};
}

.${clss.ROOT_CLASS} input[type=number]::-webkit-inner-spin-button, 
.${clss.ROOT_CLASS} input[type=number]::-webkit-outer-spin-button 
{ 
  appearance: none; 
}

.${clss.ROOT_CLASS}
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family:${TOOLBAR_FONT_SANS};
}

.${clss.ROOT_CLASS} form
{
  display: grid;
  grid-auto-rows: auto;
  padding: 30px 20px 10px 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 1px ${vars.form_bs.asVar()};
  cursor: default;
}

.${clss.ROOT_CLASS} > form + form,
.${clss.ROOT_CLASS}.${clss.ENTER_REG} > form
{
  display: none;
}

.${clss.ROOT_CLASS}.${clss.ENTER_REG} > form + form
{
  display: grid;
}

.${clss.ROOT_CLASS} form > s
{
  display: block;
  align-self: center;
  width: 100%;
  margin: 15px 0px 25px 0px;
}

.${clss.ROOT_CLASS} form u
{
  display: flex;
  align-items: center;
  width: max-content;
  height: 0px;
  position: relative;
  bottom: 15px;
  left: 10px;
  font-size: 12px;
  color: ${form_warning};
}

.${clss.ROOT_CLASS} form u > h1
{
  width: 14px;
  height: 14px;
  margin-right: 7px;
  background-image: ${IMG};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.${clss.ROOT_CLASS} form > span
{
  display: block;
  align-self: center;
  width: 100%;
  margin-bottom: 10px;
}

.${clss.ROOT_CLASS} form > div
{
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
}

.${clss.ROOT_CLASS} form input + label
{
  display: inline-block;
  text-align: left;
  width: auto;
  font-size: 13px;
  position: relative;
  bottom: 50px;
  left: 5px;
  color: ${form_label_col};
  background-color: ${form_label_bg};
  user-select: none;
}

.${clss.ROOT_CLASS} form input:focus + label,
.${clss.ROOT_CLASS} form input + label:focus
{
  color: ${form_label_col_hov};
}

.${clss.ROOT_CLASS} form input[data-hide-value=""] + label
{
  display: inline-block;
  text-align: left;
  width: calc(100% - 20px);
  position: relative;
  bottom: 29px;
  left: 10px;
  background-color: ${vars.form_labe_off_bg.asVar()};
  visibility: visible;
  color: ${form_labe_off_col};
  cursor: text;
}

.${clss.ROOT_CLASS} form input[data-hide-value=""]:focus + label
{
  display: inline-block;
  text-align: left;
  width: auto;
  font-size: 13px;
  position: relative;
  bottom: 50px;
  left: 5px;
  background-color: ${vars.form_labe_on_bg.asVar()};
  visibility: visible;
  animation-name: label;
  animation-duration: 0.25s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}

@keyframes label
{
  0%
  {
    font-size: 16px;
    bottom: 40px;
  }
  100%
  {
    font-size: 13px;
    left: 5px;
    bottom: 50px;
    color:  ${vars.form_labe_on_col.asVar()};
  }
}

.${clss.ROOT_CLASS} form input[type="password"],
.${clss.ROOT_CLASS} form input[type="text"]
{
  display: block;
  height: 40px;
  border-radius: 2px;
  border: 1px solid ${vars.input_window_bor.asVar()};
  padding: 0px 10px;
  width: 330px;
  background: ${vars.input_window_bg.asVar()};
  color: ${vars.input_col.asVar()}
}

.${clss.ROOT_CLASS} input:-internal-autofill-selected 
{
  color: ${vars.input_col.asVar()} !important;
}

.${clss.ROOT_CLASS} form input[type="button"]
{
  height: 45px;
  border-radius: 5px;
  border-style: none;
  color: ${vars.form_but_col.asVar()};
  padding: 0px 17px;
  font-size: 20px;
  cursor: pointer;
}

.${clss.ROOT_CLASS} form input[name="pole3"]
{
  background-color: ${vars.walx_add_color.asVar()};
  margin-top: 10px;
  width: inherit;
}

.${clss.ROOT_CLASS} form input[name="pole3"]:hover
{
  background-color: ${vars.walx_add_color_hov.asVar()};
}

.${clss.ROOT_CLASS} form > s > span,
.${clss.ROOT_CLASS} form > div > span
{
  display: block;
  border-bottom: 1px solid ${vars.form_delimiter.asVar()};
}

.${clss.ROOT_CLASS} form input[name="pole4"]
{
  background-color: ${vars.form_but_reg_bg.asVar()};
  width: auto;
}

.${clss.ROOT_CLASS} form input[name="pole4"]:hover
{
  background-color: ${form_but_reg_bg_hov};
}
  
.${clss.ROOT_CLASS} form input[type="password"]:focus,
.${clss.ROOT_CLASS} form input[type="text"]:focus 
{
  caret-color: ${form_pas_txt_foc_car};
  border-color: ${form_pas_txt_foc_col};
  box-shadow: 0 0 0 2px ${form_pas_txt_foc_bs};
}

.${clss.ROOT_CLASS} form input[type="text"]:focus-visible,
.${clss.ROOT_CLASS} form input[type="password"]:focus-visible 
{
  border-radius: 3px;
  outline: none;
  outline-offset: 0px;
}

.${clss.ROOT_CLASS} form input[type="button"]:active
{
  border-style: none;
}

.${clss.ROOT_CLASS} form div > div
{
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: ${form_txt_col};
}

.${clss.ROOT_CLASS} form div > div:hover
{
  color: ${vars.form_txt_col_hov.asVar()};
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} > div
{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input:focus + label,
.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input + label:focus
{
  color: ${form_add_label_foc_col};
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="password"],
.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="number"]
{
  display: block;
  height: 40px;
  border-radius: 2px;
  border: 1px solid ${form_add_inp_col};
  padding: 0px 10px;
  width: 330px;
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="button"]
{
  width: 132px;
  height: 45px;
  border-radius: 5px;
  border-style: none;
  color: ${form_add_but_col};
  font-size: 20px;
  cursor: pointer;
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[name="pole4"]:hover
{
  background-color: ${form_add_but_bg_hov};
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="button"] + input[name="pole5"]:hover
{
  background-color: ${form_add_but2_bg_hov};
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="button"] + input[type="button"]
{
  border: 1px solid ${vars.walx_add_color.asVar()};
  outline: 1px solid ${vars.walx_add_color.asVar()};
  color: ${vars.walx_add_color.asVar()};
  background-color: ${form_add_but2_bg};
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[name="pole3"]
{
  background-color: ${vars.walx_add_color.asVar()};
  margin-top: 10px;
  width: inherit;
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[name="pole4"]
{
  background-color: ${vars.walx_add_color.asVar()};
  border: 1px solid ${vars.walx_add_color.asVar()};
  outline: 1px solid ${vars.walx_add_color.asVar()};
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="password"]:focus,
.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="number"]:focus 
{
  caret-color: ${vars.form_add_pas_txt_foc_car.asVar()};
  border-color: ${vars.form_add_pas_txt_foc_bor.asVar()};
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="number"]:focus-visible,
.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="password"]:focus-visible 
{
  border-radius: 3px;
  outline: none;
  outline-offset: 0px;
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="button"]:active
{
  border-style: none;
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} div > div
{
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: gray;
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} div > div:hover
{
  color: black;
}
 
.${clss.ROOT_CLASS} > form input[type="password"]:focus,
.${clss.ROOT_CLASS} > form input[type="text"]:focus 
{
  caret-color: ${vars.form_pt_hov_foc_car.asVar()};
  border-color: ${vars.form_pt_hov_foc_bor.asVar()};
  box-shadow: 0 0 0 2px ${vars.form_pt_hov_foc_bs.asVar()};
}

.${clss.ROOT_CLASS} > form input[type="text"]:focus-visible,
.${clss.ROOT_CLASS} > form input[type="password"]:focus-visible 
{
  border-radius: 3px;
  outline: none;
  outline-offset: 0px;
}

.${clss.ROOT_CLASS} > form input[type="button"]:active
{
  border-style: none;
}

.${clss.ROOT_CLASS} > form div > div
{
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: ${form_sign};
  cursor: pointer;
}

`);

export function buildComponent()
{
  return mk.buildComponent();
}