import { useEffect, useState } from "react";
import { PreviewSize, Tab } from "./types";
import Blockly from "blockly/core";

import en from "blockly/msg/en";
import CSSWorkspace from "./blockly/workspace/CSSWorkspace";
import HTMLWorkspace from "./blockly/workspace/HTMLWorkspace";
import JavascriptWorkspace from "./blockly/workspace/JavascriptWorkspace";
import TopMenu from "./top/TopMenu";
import WorkspaceTopMenu from "./top/WorkspaceTopMenu";

import Preview from "./components/Preview";
import { useRecoilState } from "recoil";
import { tabState } from "./recoil/tabState";

// Set language
Blockly.setLocale(en);

function App() {
  const [tab, setTab] = useRecoilState(tabState);
  const workspaceClass = "absolute inset-0 ";

  /**
   *
   * @param tabName Workspace Tab that the class will be applied for
   * @returns
   */
  function getWorkspaceClass(tabName: Tab): string {
    return workspaceClass + (tab.currentTab === tabName ? "" : " invisible");
  }

  function handleClick(val: Tab) {
    // Hide any open dropdowns before switching tab
    Blockly.DropDownDiv.hideWithoutAnimation();
    // Switch tab
    setTab({ ...tab, currentTab: val });
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-blue-100">
      {/* Top Menu */}
      <TopMenu />

      <div className="flex-1 h-full flex">
        {/* Workspace */}
        <div className="flex-1 w-full h-full flex flex-col">
          <WorkspaceTopMenu callback={handleClick} />
          <div className="relative flex-1 w-full rounded-br-lg rounded-tr-lg">
            <HTMLWorkspace
              key={"HTML"}
              customClass={getWorkspaceClass("HTML")}
            />
            <CSSWorkspace key={"CSS"} customClass={getWorkspaceClass("CSS")} />
            <JavascriptWorkspace
              key={"Javascript"}
              customClass={getWorkspaceClass("Javascript")}
            />
          </div>
        </div>

        {/* Preview */}
        <Preview />
      </div>
    </div>
  );
}

export default App;
