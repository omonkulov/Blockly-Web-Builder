import { forwardRef } from "react";

const ToolBox = forwardRef<HTMLDivElement>((_, myRef) => {
  return <div style={{ display: 'none' }} ref={myRef}></div>;
});

export default ToolBox;

