function getCSSBlocks() {
  const toolboxBlocks = {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "label",
        text: "CSS",
        "web-class": "myLabelStyle",
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

export default getCSSBlocks;