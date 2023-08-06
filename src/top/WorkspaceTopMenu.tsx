import { useRecoilState } from "recoil";
import { Tab } from "../types";
import PreviewTopMenu from "./PreviewTopMenu";
import { prefernceState } from "../recoil/preferenceState";
import { tabState } from "../recoil/tabState";

interface Props {
  callback: (val: Tab) => void;
}

function WorkspaceTopMenu(props: Props) {
  const [preference, _preference] = useRecoilState(prefernceState);
  const [tab, _tab] = useRecoilState(tabState);

  const rootCSS =
    "h-8 rounded-tl-md rounded-tr-md px-4 outline outline-1 outline-gray-300";
  const inactiveTab = rootCSS + " bg-gray-300 text-gray-500";
  const activeTab = rootCSS + " bg-white shadow";
  return (
    <div className="h-10 w-full bg-blue-100 flex items-end justify-start">
      <div className="self-star flex gap-1">
        <button
          className={tab.currentTab === "HTML" ? activeTab : inactiveTab}
          onClick={() => props.callback("HTML")}
        >
          HTML
        </button>
        <button
          className={tab.currentTab  === "CSS" ? activeTab : inactiveTab}
          onClick={() => props.callback("CSS")}
        >
          CSS
        </button>
        <button
          className={tab.currentTab  === "Javascript" ? activeTab : inactiveTab}
          onClick={() => props.callback("Javascript")}
        >
          Javascript
        </button>
      </div>

      <div
        className={
          "flex-1 justify-self-end self-center	bg-red-300 h-full" +
          (!preference.hidePreview ? " hidden" : "")
        }
      >
        <PreviewTopMenu />
      </div>
    </div>
  );
}

export default WorkspaceTopMenu;
