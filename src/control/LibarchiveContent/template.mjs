import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('LiarchiveContent', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
});

mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS}">
    <h2>libarchive</h2>
    <ul>
      <li>Stable release: 3.8.0 (May 20, 2025) tar.xz tar.gz zip</li>
      <li>Stable release: 3.8.0 (May 20, 2025) tar.xz tar.gz zip</li>
      <li>Stable release: 3.8.0 (May 20, 2025) tar.xz tar.gz zip</li>
      <li>Stable release: 3.8.0 (May 20, 2025) tar.xz tar.gz zip</li>
      <li>Stable release: 3.8.0 (May 20, 2025) tar.xz tar.gz zip</li>
    </ul>
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

.${clss.ROOT_CLASS}
{
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > *
{
  width: 700px;
  margin: 0 auto;
}

.${clss.ROOT_CLASS} > h2
{
  padding: 20px 0;
  font-size: 40px;
}

.${clss.ROOT_CLASS} ul
{
  padding: 0 20px;
}

.${clss.ROOT_CLASS} ul > li
{
  padding-left: 10px;
  margin-bottom: 10px;
}

@media (device-width < 550px)
{
}
`);

export async function buildComponent()
{
  return mk.buildComponent();
}
