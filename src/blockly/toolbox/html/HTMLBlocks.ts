function getHTMLBlocks() {
  const toolboxBlocks = {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "logic_operation",
      },
      {
        kind: "label",
        text: "A label",
        "web-class": "myLabelStyle",
      },
      {
        kind: "label",
        text: "Another label",
      },
      {
        kind: "block",
        type: "logic_negate",
      },
      {
        kind: "button",
        text: "A button",
        callbackKey: "myFirstButtonPressed",
      },
      {
        kind: "block",
        type: "logic_boolean",
      },
    ],
  };

  return toolboxBlocks;
}

export default getHTMLBlocks;
