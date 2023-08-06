import { atom } from "recoil";
import { Tab } from "../types";

interface TabState {
  /** Current blockly tab */
  currentTab: Tab;
  /** Current codeviewer tab */
  currentCodeTab: Tab;
}

const defaultValue: TabState = {
  currentTab: "HTML",
  currentCodeTab: "HTML",
};

const tabState = atom({
  key: "tab",
  default: defaultValue,
  effects: [
    ({ onSet }) => {
      onSet(() => {
        console.log("Tab changed");
      });
    },
  ],
});

export { tabState };
