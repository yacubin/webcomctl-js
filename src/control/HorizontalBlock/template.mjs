import ControlMaker from '../../lib/ControlMaker.mjs';

const mk = new ControlMaker('HorizontalBlock', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
`;

export const CSS = `
.${ROOT_CLASS}
{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
`;
