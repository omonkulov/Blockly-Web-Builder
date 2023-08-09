import Blockly, { WorkspaceSvg } from "blockly";
import { useRef, useEffect } from "react";
import getHTMLBlocks from "../toolbox/HTMLToolbox";
import HTMLTheme from "./HTMLTheme";
import "../blocks/HTMLBlocksDefinition";
import { loadWorkspace, saveWorkspace } from "../helper/serialization";
import { htmlGenerator } from "../generator/HTMLGenerator";
import { useRecoilState } from "recoil";
import { codeState } from "../../recoil/codeState";
// @ts-ignore
import {ContinuousToolbox, ContinuousFlyout, ContinuousMetrics} from '@blockly/continuous-toolbox';


interface Props {
  customClass: string;
}

const HTMLLocalStorageKey = "HTMLcode";

function HTMLWorkspace({ customClass }: Props) {
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const toolbox = useRef<HTMLDivElement>(null);
  const primaryWorkspace = useRef<WorkspaceSvg | null>(null);
  const [_code, setCode] = useRecoilState(codeState);
  const generateCode = () => {
    if (!primaryWorkspace.current) return;
    let code = htmlGenerator.workspaceToCode(primaryWorkspace.current);
    setCode((prev) => {
      return { ...prev, html: code };
    });
  };

  useEffect(() => {
    if (!blocklyDiv.current || !toolbox.current) return;

    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      renderer: "zelos",
      theme: HTMLTheme,
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
      plugins: {
        toolbox: ContinuousToolbox,
        flyoutsVerticalToolbox: ContinuousFlyout,
        metricsManager: ContinuousMetrics,
      },
    });

    if (primaryWorkspace.current) {
      window.NameSpace = primaryWorkspace.current;
      Blockly.serialization.blocks.append(
        { type: "document_block" },
        primaryWorkspace.current
      );
      primaryWorkspace.current.addChangeListener((e) => {
        if ((e.type && e.type === "move") || e.type === "change") {
          let reason = (e as any).reason;
          if (reason && Array.isArray(reason) && reason.length > 0) {
            if (reason[0] === "disconnect" || reason[0] === "connect") {
              generateCode();
            }
          } else if (e.type === "change") {
            generateCode();
          }
        }
      });
      loadWorkspace(primaryWorkspace.current, HTMLLocalStorageKey);
      generateCode();
    }

    return () => {
      if (primaryWorkspace.current) {
        saveWorkspace(primaryWorkspace.current, HTMLLocalStorageKey);
      }
    };
  }, [blocklyDiv, toolbox, primaryWorkspace]);

  useEffect(() => {
    const handlePageRefresh = () => {
      if (primaryWorkspace.current) {
        saveWorkspace(primaryWorkspace.current, HTMLLocalStorageKey);
      }
    };

    window.addEventListener("beforeunload", handlePageRefresh);

    return () => window.removeEventListener("beforeunload", handlePageRefresh);
  }, []);

  return (
    <div className={customClass}>
      <div className="w-full h-full" ref={blocklyDiv} id="blocklyDiv2"></div>
      <div className="hidden" ref={toolbox} id="toolboxDiv2"></div>
    </div>
  );
}

export default HTMLWorkspace;
