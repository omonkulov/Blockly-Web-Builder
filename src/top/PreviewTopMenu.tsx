import { VscPlay } from "react-icons/vsc";
import PreviewSizeDropdown from "../components/PreviewSizeDropdown";

function PreviewTopMenu() {
  const buttonCSS =
    "px-5 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

  return (
    <div className="h-10 w-full bg-blue-100 inline-flex justify-end items-center px-2">
      <PreviewSizeDropdown />
    </div>
  );
}

export default PreviewTopMenu;
