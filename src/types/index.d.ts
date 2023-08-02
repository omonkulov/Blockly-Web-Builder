export {};
declare global {
  interface Window {
    NameSpace: unknown;
  }
}
window.NameSpace = window.NameSpace || {};



export type Tab = "HTML" | "CSS" | "Javascript";

export type PreviewSize = "Default" | "Small" | "Medium" | "Large";