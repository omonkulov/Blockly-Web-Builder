import Blockly, { WorkspaceSvg } from 'blockly';
import { useRef, useEffect } from 'react'
import getCSSBlocks from '../../toolbox/css/CSSBlocks';

interface Props {
  customClass: string;
}

function CSSWorkspace({customClass}: Props) {
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const toolbox = useRef<HTMLDivElement>(null);
  const primaryWorkspace = useRef<WorkspaceSvg | null>(null);

  useEffect(() => {
    if (!blocklyDiv.current || !toolbox.current) return;

    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      renderer: "zelos",
      theme: "zelos",
      toolbox: getCSSBlocks(),
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
      <div className="w-full h-full" ref={blocklyDiv} id='blocklyDiv'></div>
      <div className="hidden" ref={toolbox} id='toolboxDiv'></div>
    </div>
  )
}

export default CSSWorkspace