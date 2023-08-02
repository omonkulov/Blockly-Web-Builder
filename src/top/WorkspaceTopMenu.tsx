import { useRecoilState } from "recoil";
import { Tab } from "../types";
import PreviewTopMenu from "./PreviewTopMenu";
import { prefernceState } from "../recoil/preferenceState";
import PreviewSizeDropdown from "../components/PreviewSizeDropdown";

interface Props {
  tab: Tab;
  callbackCSSTab: () => void;
  callbackHTMLTab: () => void;
  callbackJavascriptTab: () => void;
}

function WorkspaceTopMenu(props: Props) {
  const [preference, _] = useRecoilState(prefernceState);

  const rootCSS = "h-8 rounded-tl-md rounded-tr-md px-4 outline outline-1 outline-gray-300";
  const inactiveTab = rootCSS + " bg-gray-300 text-gray-500";
  const activeTab = rootCSS +  " bg-white shadow";
  return (
    <div className="h-10 w-full bg-blue-100 flex items-end justify-start">
      <div className="self-star flex gap-1">
        <button
          className={props.tab === "CSS" ? activeTab : inactiveTab}
          onClick={props.callbackCSSTab}
        >
          CSS
        </button>
        <button
          className={props.tab === "HTML" ? activeTab : inactiveTab}
          onClick={props.callbackHTMLTab}
        >
          HTML
        </button>
        <button
          className={props.tab === "Javascript" ? activeTab : inactiveTab}
          onClick={props.callbackJavascriptTab}
        >
          Javascript
        </button>
      </div>

      <div className={"flex-1 justify-self-end self-center	bg-red-300 h-full" + (!preference.hidePreview && " hidden")}>
        <PreviewSizeDropdown />
      </div>
    </div>
  );
}

export default WorkspaceTopMenu;
