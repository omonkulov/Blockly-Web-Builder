import { forwardRef } from "react";

const Workspace = forwardRef<HTMLDivElement>((_, ref) => {
  return <div className="w-10/12 h-full" style={{width:"100%", height:"100%"}} ref={ref} id="blocklyDiv"></div>;
});

export default Workspace;
