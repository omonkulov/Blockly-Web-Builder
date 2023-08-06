function getHTMLBlocks() {
  const toolboxBlocks = {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "label",
        text: "Container",
        "web-class": "myLabelStyle",
      },
      {
        kind: "block",
        type: "test_react_field",
      },
      {
        kind: "block",
        type: "div_block",
      },
      {
        kind: "block",
        type: "div_attributes_block",
        inputs: {
          id: {
            shadow: {
              kind: "block",
              type: "id_block",
            }
          },
          class: {
            shadow: {
              kind: "block",
              type: "class_block",
            }
          },
          on_click: {
            shadow: {
              kind: "block",
              type: "on_click_block",
            }
          },
        }
      },
      {
        kind: "label",
        text: "Header",
        "web-class": "myLabelStyle",
      },
      {
        kind: "block",
        type: "h1_block",
      },
      {
        kind: "block",
        type: "h2_block",
      },
      {
        kind: "block",
        type: "h3_block",
      },
      {
        kind: "block",
        type: "h4_block",
      },
      {
        kind: "block",
        type: "h5_block",
      },
    ],
  };

  return toolboxBlocks;
}

export default getHTMLBlocks;
