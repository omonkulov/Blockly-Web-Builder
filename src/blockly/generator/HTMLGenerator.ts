import Blockly from "blockly";

export const htmlGenerator = new Blockly.Generator("HTML");

(htmlGenerator as any).scrub_ = (
  block: Blockly.Block,
  code: string,
  thisOnly: any
) => {
  if (block.getRootBlock().type !== "document_block") return "";
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + "\n" + htmlGenerator.blockToCode(nextBlock);
  }
  return code;
};

htmlGenerator.forBlock["document_block"] = (_block: Blockly.Block) => {
  return "<!-- Your HTML code below -->";
};

/**========================================================================
 *                           Container blocks
 *========================================================================**/

htmlGenerator.forBlock["div_block"] = (block: Blockly.Block) => {
  const statementMembers = htmlGenerator.statementToCode(block, "_child");
  const code = "<div>\n" + statementMembers + "</div>";
  return code + needNewLine(block);
};

htmlGenerator.forBlock["div_attributes_block"] = (block: Blockly.Block) => {
  const statementMembers = htmlGenerator.statementToCode(block, "_child");
  const id = htmlGenerator.valueToCode(block, "id", 0);
  const className = htmlGenerator.valueToCode(block, "class", 0);
  const onclick = htmlGenerator.valueToCode(block, "on_click", 0);
  const code = `<div ${id} ${className} ${onclick}>\n${statementMembers}</div>`;
  return code + needNewLine(block);
};

/**========================================================================
 *                           Attribute blocks
 *========================================================================**/

htmlGenerator.forBlock["id_block"] = (block: Blockly.Block) => {
  return [`id="${block.getFieldValue("id")}"`, 0];
};

htmlGenerator.forBlock["class_block"] = (block: Blockly.Block) => {
  return [`class="${block.getFieldValue("class")}"`, 0];
};

htmlGenerator.forBlock["on_click_block"] = (block: Blockly.Block) => {
  return [`onclick="${block.getFieldValue("func")}"`, 0];
};





/**========================================================================
 *                           Header
 *========================================================================**/


htmlGenerator.forBlock["h1_block"] = (block: Blockly.Block) => {
  const statementMembers = htmlGenerator.statementToCode(block, "_child");
  const code = "<h1>\n" + statementMembers + "</h1>";
  return code + needNewLine(block);
};

htmlGenerator.forBlock["h2_block"] = (block: Blockly.Block) => {
  const statementMembers = htmlGenerator.statementToCode(block, "_child");
  const code = "<h2>\n" + statementMembers + "</h2>";
  return code + needNewLine(block);
};

htmlGenerator.forBlock["h3_block"] = (block: Blockly.Block) => {
  const statementMembers = htmlGenerator.statementToCode(block, "_child");
  const code = "<h3>\n" + statementMembers + "</h3>";
  return code + needNewLine(block);
};

htmlGenerator.forBlock["h4_block"] = (block: Blockly.Block) => {
  const statementMembers = htmlGenerator.statementToCode(block, "_child");
  const code = "<h4>\n" + statementMembers + "</h4>";
  return code + needNewLine(block);
};

htmlGenerator.forBlock["h5_block"] = (block: Blockly.Block) => {
  const statementMembers = htmlGenerator.statementToCode(block, "_child");
  const code = "<h5>\n" + statementMembers + "</h5>";
  return code + needNewLine(block);
};





















/*================== Helper Functions =================*/

/**
 * If the block has next connection then we don't need to
 * add another newline since scrub_ does that for us.
 * Otherwise we will have to \n in a row.
 * @param block Block that the code is being generated for
 * @return class
 */
function needNewLine(block: Blockly.Block): string {
  console.log("---- ", block.type, " ---- ");
  // console.log(" previous  :", block.getPreviousBlock()?.type)
  // console.log(" statement :", block.getFirstStatementConnection()?.targetBlock()?.type)
  // console.log(" next      :", block.getNextBlock()?.type)
  // console.log(" top       :", block.getTopStackBlock()?.type)
  // console.log(" root      :", block.getRootBlock()?.type)
  // console.log("\n")

  return !block.nextConnection?.targetConnection ? "\n" : "";
}
