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

const vars = mk.newCSSVariableMap({
  walx_add_color: ['#1877f2', '#1877f2'],
  walx_add_color_hov: ['#0264e2', '#0264e2'],
  input_window_bor: ['#D9D9D9', '#D9D9D9'],
  input_autofill: ['white', 'white'],
  input_autofill_foc: ['white', 'white'],
  form_bs: ['#d1d0d0', '#d1d0d0'],
  form_warning: ['#d93025', '#d93025'],
  form_label_col: ['black', 'black'],
  form_label_bg: ['white', 'white'],
  form_label_col_hov: ['#1a73e8', '#1a73e8'],
  form_labe_off_bg: ['white', 'white'],
  form_labe_off_col: ['grey', 'grey'],
  form_labe_on_bg: ['white', 'white'],
  form_labe_on_col: ['#1a73e8', '#1a73e8'],
  form_but_col: ['white', 'white'],
  form_delimiter: ['#dadde1', '#dadde1'],
  form_but_reg_bg: ['#42b72a', '#42b72a'],
  form_but_reg_bg_hov: ['#36a420', '#36a420'],
  form_pas_txt_foc_car: ['#1b74e4', '#1b74e4'],
  form_pas_txt_foc_col: ['#1b74e4', '#1b74e4'],
  form_pas_txt_foc_bs:['#e7f3ff', '#e7f3ff'],
  form_txt_col: ['gray', 'gray'],
  form_txt_col_hov: ['black', 'black'],
  form_add_label_foc_col: ['#1a73e8', '#1a73e8'],
  form_add_label_foc_col: ['#D9D9D9', '#D9D9D9'],
  form_add_inp_col: ['#D9D9D9', '#D9D9D9'],
  form_add_but_col: ['white', 'white'],
  form_add_but_bg_hov: ['#0264e2c7', '#0264e2c7'],
  form_add_but2_bg_hov: ['#f4f4f4', '#f4f4f4'],
  form_add_but2_bg: ['white', 'white'],
  form_add_pas_txt_foc_car: ['#1b74e4', '#1b74e4'],
  form_add_pas_txt_foc_bor: ['#1b74e4', '#1b74e4'],
  form_pt_hov_foc_car: ['#1b74e4', '#1b74e4'],
  form_pt_hov_foc_bor: ['#1b74e4', '#1b74e4'],
  form_pt_hov_foc_bs: ['#e7f3ff', '#e7f3ff'],
  form_sign: ['gray', 'gray'],
  form_sign_hov: ['black', 'black'],
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
      <img src="./attention.svg"/>
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
      <img src="./attention.svg"/>
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
  color: ${vars.form_warning.asVar()};
}

.${clss.ROOT_CLASS} form u > img
{
  width: 14px;
  height: 14px;
  margin-right: 7px;
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
  color: ${vars.form_label_col.asVar()};
  background-color: ${vars.form_label_bg.asVar()};
  user-select: none;
}

.${clss.ROOT_CLASS} form input:focus + label,
.${clss.ROOT_CLASS} form input + label:focus
{
  color: ${vars.form_label_col_hov.asVar()};
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
  color: ${vars.form_labe_off_col.asVar()};
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
  background-color: ${vars.form_but_reg_bg_hov.asVar()};
}
  
.${clss.ROOT_CLASS} form input[type="password"]:focus,
.${clss.ROOT_CLASS} form input[type="text"]:focus 
{
  caret-color: ${vars.form_pas_txt_foc_car.asVar()};
  border-color: ${vars.form_pas_txt_foc_col.asVar()};
  box-shadow: 0 0 0 2px ${vars.form_pas_txt_foc_bs.asVar()};
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
  color: ${vars.form_txt_col.asVar()};
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
  color: ${vars.form_add_label_foc_col.asVar()};
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="password"],
.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="number"]
{
  display: block;
  height: 40px;
  border-radius: 2px;
  border: 1px solid ${vars.form_add_inp_col.asVar()};
  padding: 0px 10px;
  width: 330px;
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="button"]
{
  width: 132px;
  height: 45px;
  border-radius: 5px;
  border-style: none;
  color: ${vars.form_add_but_col.asVar()};
  font-size: 20px;
  cursor: pointer;
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[name="pole4"]:hover
{
  background-color: ${vars.form_add_but_bg_hov.asVar()};
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="button"] + input[name="pole5"]:hover
{
  background-color: ${vars.form_add_but2_bg.asVar()};
}

.${clss.ROOT_CLASS} form.${clss.ADD_DEV} input[type="button"] + input[type="button"]
{
  border: 1px solid ${vars.walx_add_color.asVar()};
  outline: 1px solid ${vars.walx_add_color.asVar()};
  color: ${vars.walx_add_color.asVar()};
  background-color: ${vars.form_add_but2_bg.asVar()};
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
  color: ${vars.form_sign.asVar()};
  cursor: pointer;
}

.${clss.ROOT_CLASS} > form div > div:hover
{
  color: ${vars.form_sign_hov.asVar()};
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}