import { Ref, useEffect, useRef } from "react";
import Workspace from "./workspace/WorkspaceComponent";
import Blockly from "blockly/core";

import locale from "blockly/msg/en";

Blockly.setLocale(locale);

import "blockly/blocks";
import getHTMLBlocks from "./toolbox/html/HTMLBlocks";
import ToolBox from "./toolbox/Toolbox";

function BlocklyComponent() {
  const blocklyDiv = useRef<HTMLDivElement | string>(null);
  const toolbox = useRef<HTMLDivElement>(null);
  const primaryWorkspace = useRef<unknown>(null);

  useEffect(() => {
    if (!blocklyDiv.current || !toolbox.current) return;

    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      renderer: "zelos",
      theme: "zelos",
      toolbox: getHTMLBlocks(),
      readOnly: false,
      trashcan: true,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true,
      },
      zoom: {
        controls: true,
        startScale: 0.7,
        maxScale: 2,
        minScale: 0.3,
        scaleSpeed: 1.1,
        pinch: true,
      },
    });

    if(primaryWorkspace.current) {
      window.NameSpace = primaryWorkspace.current;
    }
  }, [blocklyDiv, toolbox, primaryWorkspace]);

  return (
    <div className="h-full w-full p-5 bg-red-100">
      <Workspace ref={blocklyDiv as Ref<HTMLDivElement>} />
      <ToolBox ref={toolbox} />
    </div>
  );
}

export default BlocklyComponent;
