import { representClassNames } from "@/lib/CSSHelper";

export const ROOT_CLASS: string = representClassNames("WSPrintBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("WSPrintBlock-PORT_CLASS");

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';

export const RULES = [
 `.${ROOT_CLASS}::-webkit-scrollbar
  {
    width: 10px;
    height: 10px;
  }`,

 `.${ROOT_CLASS}::-webkit-scrollbar-thumb
  {
    background-color: ${SCTHBG_CLR};
    border-radius: 10px;
  }`,

 `.${ROOT_CLASS}::-webkit-scrollbar-track,
  .${ROOT_CLASS}::-webkit-scrollbar-corner
  {
    background-color: ${SCTRBG_CLR};
  }`,

 `.${ROOT_CLASS}
  {
    display: flex;
    flex-direction: column;
    width: inherit;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
  }`,
];
