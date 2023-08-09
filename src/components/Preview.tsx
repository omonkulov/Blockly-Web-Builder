import React from "react";
import PreviewTopMenu from "../top/PreviewTopMenu";
import { useRecoilState } from "recoil";
import { prefernceState } from "../recoil/preferenceState";
import { PreviewSize } from "../types";
import { codeState } from "../recoil/codeState";

function Preview() {
  const [preference, setPreference] = useRecoilState(prefernceState);
  const [code, _setCode] = useRecoilState(codeState);
  const width = gePreviewClass(preference.previewSize);
  const display = preference.hidePreview ? " hidden " : "";
  return (
    <div className={width + display + " h-full flex flex-col ml-3"}>
      <PreviewTopMenu />
      <div className="flex-1 flex flex-col bg-white w-full h-full rounded-bl-lg rounded-tl-lg">
        <div className="flex-1 flex h-full w-full bg-red-200 rounded-bl-lg rounded-tl-lg">
          <iframe
            className="h-full w-full bg-white"
            srcDoc={`
                  <html>
                    <body>
                      <style>
                        /* CSS code */
                        ${code.css}
                      </style>

                      <!-- HTML code -->
                      ${code.html}
                      <script>
                        // Javascript code
                        ${code.javascript}
                      </script>
                    </body>
                  </html>
                  `}
            title="W3Schools Free Online Web Tutorials"
          />
        </div>
      </div>
    </div>
  );
}

export default Preview;

const gePreviewClass = (arg: PreviewSize) => {
  switch (arg) {
    case "Small":
      return " prev-small";
    case "Medium":
      return " prev-medium";
    case "Large":
      return " prev-large";
    default:
      return " prev-default";
  }
};
