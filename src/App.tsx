import { useEffect, useState } from "react";
import { PreviewSize, Tab } from "./types";
import Blockly from "blockly/core";

import en from "blockly/msg/en";
import CSSWorkspace from "./blockly/workspace/css/CSSWorkspace";
import HTMLWorkspace from "./blockly/workspace/html/HTMLWorkspace";
import JavascriptWorkspace from "./blockly/workspace/javascript/JavascriptWorkspace";
import TopMenu from "./top/TopMenu";
import WorkspaceTopMenu from "./top/WorkspaceTopMenu";
import PreviewTopMenu from "./top/PreviewTopMenu";
import SystemEvent from "./events/SystemEvent";
import Preview from "./components/Preview";

// Set language
Blockly.setLocale(en);

function App() {
  const [tab, setTab] = useState<Tab>("HTML");

  const workspaceClass = "absolute inset-0 ";
  const cssWorkspaceClass =
    workspaceClass + (tab === "CSS" ? "" : "invisible");
  const htmlWorkspaceClass =
    workspaceClass + (tab === "HTML" ? "" : "invisible");
  const jsWorkspaceClass =
    workspaceClass + (tab === "Javascript" ? "" : "invisible");

  function handleClick(val: Tab) {
    setTab(val);
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 50);
  }
  
  return (
    <div className="w-screen h-screen flex flex-col bg-blue-100">
      {/* Top Menu */}
      <TopMenu />

      {/* Workspace + Preview */}
      <div className="flex-1 h-full flex">
        <div className="flex-1 w-full h-full flex flex-col">
          <WorkspaceTopMenu
            callbackHTMLTab={() => handleClick("HTML")}
            callbackCSSTab={() => handleClick("CSS")}
            callbackJavascriptTab={() => handleClick("Javascript")}
            tab={tab}
          />
          <div className="relative flex-1 w-full rounded-br-lg rounded-tr-lg">
            <HTMLWorkspace key={"HTML"} customClass={htmlWorkspaceClass} />
            <CSSWorkspace key={"CSS"} customClass={cssWorkspaceClass} />
            <JavascriptWorkspace
              key={"Javascript"}
              customClass={jsWorkspaceClass}
            />
          </div>
        </div>

        <Preview />
      </div>
    </div>
  );
}

export default App;
