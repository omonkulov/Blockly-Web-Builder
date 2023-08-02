import Blockly, { WorkspaceSvg } from 'blockly';
import { useRef, useEffect } from 'react'
import getHTMLBlocks from '../../toolbox/html/HTMLBlocks';

interface Props {
  customClass: string;
}

function HTMLWorkspace({customClass}: Props) {
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const toolbox = useRef<HTMLDivElement>(null);
  const primaryWorkspace = useRef<WorkspaceSvg | null>(null);

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

    if (primaryWorkspace.current) {
      window.NameSpace = primaryWorkspace.current;
    }
  }, [blocklyDiv, toolbox, primaryWorkspace]);

  return (
    <div className={customClass}>
      <div className="w-full h-full" ref={blocklyDiv} id='blocklyDiv2'></div>
      <div className="hidden" ref={toolbox} id='toolboxDiv2'></div>
    </div>
  )
}

export default HTMLWorkspace