import {
  VscLayoutSidebarRight,
  VscLayoutActivitybarRight,
  VscScreenFull,
  VscArrowBoth,
  VscCheck,
} from "react-icons/vsc";
import { PreviewSize } from "../types";
import { useRecoilState } from "recoil";
import { prefernceState } from "../recoil/preferenceState";
import { useState } from "react";

function PreviewSizeDropdown() {
  const [preference, setPreference] = useRecoilState(prefernceState);
  const [openSizeDrop, setOpenSizeDrop] = useState<boolean>(false);

  function handleMenuItemClick(parm: PreviewSize) {
    setOpenSizeDrop((prev) => !prev);
    setPreference((prev) => {
      return { ...prev, previewSize: parm, hidePreview: false };
    });
  }

  function handleHideShowPreview() {
    setOpenSizeDrop(false);
    setPreference((prev) => {
      return { ...prev, hidePreview: !prev.hidePreview };
    });
  }

  const buttonClass =
    "h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700";
  return (
    <div className="relative">
      <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
        <button
          className={buttonClass}
          onClick={() => setOpenSizeDrop((prev) => !prev)}
        >
          <VscArrowBoth />
        </button>

        <button className={buttonClass} onClick={handleHideShowPreview}>
          {preference.hidePreview ? (
            <VscLayoutSidebarRight />
          ) : (
            <VscLayoutActivitybarRight />
          )}
        </button>

        <button className={buttonClass}>
          <VscScreenFull />
        </button>
      </div>

      <div
        className={
          "ontopofall absolute -start-20 z-10  rounded-md border border-gray-100 bg-white shadow-lg" +
          (!openSizeDrop && " hidden")
        }
        role="menu"
      >
        <div className="p-2">
          <button
            className="w-24 flex items-between justify-between rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
            onClick={() => handleMenuItemClick("Default")}
          >
            Default {preference.previewSize === "Default" && <VscCheck />}
          </button>

          <button
            className="w-24 flex items-between justify-between rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
            onClick={() => handleMenuItemClick("Small")}
          >
            Small {preference.previewSize === "Small" && <VscCheck />}
          </button>

          <button
            className="w-24 flex items-between justify-between rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
            onClick={() => handleMenuItemClick("Medium")}
          >
            Medium {preference.previewSize === "Medium" && <VscCheck />}
          </button>

          <button
            className="w-24 flex items-between justify-between rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
            onClick={() => handleMenuItemClick("Large")}
          >
            Large {preference.previewSize === "Large" && <VscCheck />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewSizeDropdown;
