import { atom } from "recoil";

interface TabState {
  /** HTML code */
  html: string;
  /** CSS code */
  css: string;
  /** JS code */
  javascript: string;
}

const defaultValue: TabState = {
  html: "",
  css: "",
  javascript: ""
};

const codeState = atom({
  key: "code",
  default: defaultValue,
});

export { codeState };
