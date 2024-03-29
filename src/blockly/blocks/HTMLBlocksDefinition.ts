import * as Blockly from "blockly/core";

import "./custom_fields/BlocklyReactField";

let testReactField = {
  type: "test_react_field",
  message0: "custom field %1",
  args0: [
    {
      type: "field_react_component",
      name: "FIELD",
      text: "Click me",
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks["test_react_field"] = {
  init: function () {
    this.jsonInit(testReactField);
    this.setStyle("loop_blocks");
  },
};

Blockly.Blocks["html_string_block"] = {
  init: function () {
    this.jsonInit({
      message0: "%1",
      args0: [
        {
          type: "field_input",
          name: "STRING",
          text: "Hello World",
        },
      ],
      previousStatement: null,
      nextStatement: null,
    });
    this.setStyle("loop_blocks");
  },
};

Blockly.Blocks["document_block"] = {
  init: function () {
    this.jsonInit({
      type: "document_block",
      message0: "document body",
      nextStatement: null,
    });
    this.setDeletable(false);
    this.setEditable(false);
    this.setStyle("document_block");
  },
};

Blockly.Blocks["id_block"] = {
  init: function () {
    this.jsonInit({
      message0: "id: %1",
      args0: [
        {
          type: "field_input",
          name: "id",
          text: "id",
          spellcheck: false,
        },
      ],
      output: "id",
    });
    this.setStyle("id_block");
  },
};

Blockly.Blocks["class_block"] = {
  init: function () {
    this.jsonInit({
      message0: "class: %1",
      args0: [
        {
          type: "field_input",
          name: "class",
          text: "class",
          spellcheck: false,
        },
      ],
      output: "class",
    });
    this.setStyle("class_block");
  },
};

Blockly.Blocks["on_click_block"] = {
  init: function () {
    this.jsonInit({
      message0: "onclick: %1",
      args0: [
        {
          type: "field_input",
          name: "func",
          text: "func",
          spellcheck: false,
        },
      ],
      output: "on_click",
    });
    this.setStyle("on_click_block");
  },
};

Blockly.Blocks["div_block"] = {
  init: function () {
    this.jsonInit({
      message0: "div",
      message1: "%1",
      args1: [{ type: "input_statement", name: "_child" }],
      previousStatement: null,
      nextStatement: null,
    });
    this.setStyle("div_block");
  },
};

Blockly.Blocks["div_attributes_block"] = {
  init: function () {
    this.jsonInit({
      message0: "div %1 %2 %3",
      args0: [
        {
          type: "input_value",
          name: "id",
          check: ["id"],
        },
        {
          type: "input_value",
          name: "class",
          check: ["class"],
        },
        {
          type: "input_value",
          name: "on_click",
          check: ["on_click"],
        },
      ],
      message1: "%1",
      args1: [{ type: "input_statement", name: "_child" }],
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
    });
    this.setStyle("div_block");
  },
};

/*
'%{BKY_LOGIC_HUE}'
'%{BKY_LOOPS_HUE}'
'%{BKY_MATH_HUE}'
'%{BKY_TEXTS_HUE}'
'%{BKY_LISTS_HUE}'
'%{BKY_COLOUR_HUE}'
'%{BKY_VARIABLES_HUE}'
'%{BKY_VARIABLES_DYNAMIC_HUE}'
'%{BKY_PROCEDURES_HUE}'
 */
const H_Tag_COLOR = 60;
// Blockly.defineBlocksWithJsonArray([
//   {
//     type: "h1_block",
//     message0: "h1",
//     message1: "%1",
//     args1: [{ type: "input_statement", name: "_child" }],
//     previousStatement: null,
//     nextStatement: null,
//     colour: H_Tag_COLOR,
//   },
//   {
//     type: "h2_block",
//     lastDummyAlign0: "LEFT",
//     message0: "h2",
//     message1: "%1",
//     args1: [{ type: "input_statement", name: "_child" }],
//     previousStatement: null,
//     nextStatement: null,
//     colour: H_Tag_COLOR,
//   },
//   {
//     type: "h3_block",
//     message0: "h3",
//     message1: "%1",
//     args1: [{ type: "input_statement", name: "_child" }],
//     previousStatement: null,
//     nextStatement: null,
//     colour: H_Tag_COLOR,
//   },
//   {
//     type: "h4_block",
//     message0: "h4",
//     message1: "%1",
//     args1: [{ type: "input_statement", name: "_child" }],
//     previousStatement: null,
//     nextStatement: null,
//     colour: H_Tag_COLOR,
//   },
//   {
//     type: "h5_block",
//     message0: "h5",
//     message1: "%1",
//     args1: [{ type: "input_statement", name: "_child" }],
//     previousStatement: null,
//     nextStatement: null,
//     colour: H_Tag_COLOR,
//   },
// ]);


/*------------------ P Blocks -----------------*/


Blockly.Blocks["p_block"] = {
  init: function () {
    this.jsonInit({
      message0: "p",
      message1: "%1",
      args1: [{ type: "input_statement", name: "_child" }],
      previousStatement: null,
      nextStatement: null,
    });
    this.setStyle("text_blocks"); // You might want to change the style depending on your theme.
  },
};

Blockly.Blocks["p_single_block"] = {
  init: function () {
    this.jsonInit({
      message0: "p %1",
      args0: [
        {
          type: "field_input",
          name: "STRING",
          text: "Sample text",
        },
      ],
      previousStatement: null,
      nextStatement: null,
    });
    this.setStyle("text_blocks"); 
  },
};


/*------------------ A Block -----------------*/

Blockly.Blocks["a_block"] = {
  init: function () {
    this.jsonInit({
      message0: "a href: %1",
      args0: [
        {
          type: "field_input",
          name: "HREF",
          text: "http://example.com",
        },
      ],
      message1: "%1",
      args1: [{ type: "input_statement", name: "_child" }],
      previousStatement: null,
      nextStatement: null,
    });
    this.setStyle("url_blocks"); 
  },
};

Blockly.Blocks["a_single_block"] = {
  init: function () {
    this.jsonInit({
      message0: "a href: %1 text: %2",
      args0: [
        {
          type: "field_input",
          name: "HREF",
          text: "http://example.com",
        },
        {
          type: "field_input",
          name: "STRING",
          text: "Link",
        },
      ],
      previousStatement: null,
      nextStatement: null,
    });
    this.setStyle("url_blocks"); 
  },
};

/*------------------ H Blocks -----------------*/

for (let i = 1; i <= 6; i++) {
  Blockly.Blocks[`h${i}_block`] = {
    init: function () {
      this.jsonInit({
        message0: `h${i}`,
        message1: "%1",
        args1: [{ type: "input_statement", name: `_child` }],
        previousStatement: null,
        nextStatement: null,
      });
      this.setStyle("text_blocks"); // Assuming a generic style for all headings
    },
  };
}

for (let i = 1; i <= 6; i++) {
  Blockly.Blocks[`h${i}_single_block`] = {
    init: function () {
      this.jsonInit({
        message0: `h${i} %1`,
        args0: [
          {
            type: "field_input",
            name: `STRING`,
            text: `Heading ${i}`,
          },
        ],
        previousStatement: null,
        nextStatement: null,
      });
      this.setStyle("text_blocks"); // Assuming a generic style for all headings
    },
  };
}
