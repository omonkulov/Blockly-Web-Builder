import { atom } from "recoil";
import { PreviewSize } from "../types";

interface PrefernceState {
  hidePreview: boolean; // Hiding preview
  previewSize: PreviewSize; // Size of the privew panel
  fullscreenPrview: boolean; // Show full-screen preview
}

const defaultValue: PrefernceState = {
  fullscreenPrview: false,
  hidePreview: false,
  previewSize: "Default",
};

const prefernceState = atom({
  key: "prefernce",
  default: defaultValue,
  effects: [
    ({ onSet }) => {
      onSet(() => {
        console.log("Resized!");
        window.dispatchEvent(new Event("resize"));
      });
    },
  ],
});

export { prefernceState };
