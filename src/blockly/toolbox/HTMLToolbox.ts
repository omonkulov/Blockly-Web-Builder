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
        kind: "label",
        text: "Header",
        "web-class": "myLabelStyle",
      },
      {
        kind: "category",
        name: "Logic",
        contents: HeaderBlocks
      },
    ],
  };

  return toolboxBlocks;
}

export default getHTMLBlocks;

const HeaderBlocks = [
  {
    kind: "block",
    type: "h1_single_block",
  },
  {
    kind: "block",
    type: "h2_single_block",
  },

  {
    kind: "block",
    type: "h3_single_block",
  },

  {
    kind: "block",
    type: "h4_single_block",
  },
  {
    kind: "block",
    type: "h5_single_block",
  },

  {
    kind: "block",
    type: "h6_single_block",
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
  {
    kind: "block",
    type: "h6_block",
  },
];

const ContainerBlocks = [
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
        },
      },
      class: {
        shadow: {
          kind: "block",
          type: "class_block",
        },
      },
      on_click: {
        shadow: {
          kind: "block",
          type: "on_click_block",
        },
      },
    },
  },
];

const TextBlocks = [
  {
    kind: "block",
    type: "html_string_block",
  },
  {
    kind: "block",
    type: "p_block",
  },
  {
    kind: "block",
    type: "p_single_block",
  },
  {
    kind: "block",
    type: "a_block",
  },
  {
    kind: "block",
    type: "a_single_block",
  },
];
