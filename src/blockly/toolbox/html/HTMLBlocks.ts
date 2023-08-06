function getHTMLBlocks() {
  const toolboxBlocks = {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "label",
        text: "HTML",
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
      {
        kind: "block",
        type: "test_react_field",
      },
    ],
  };

  return toolboxBlocks;
}

export default getHTMLBlocks;
