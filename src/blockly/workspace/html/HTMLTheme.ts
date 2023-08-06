import Blockly from "blockly/core";

export default Blockly.Theme.defineTheme("HTMLTheme", {
  base: Blockly.Themes.Zelos,
  blockStyles: {
    document_block: {
      colourPrimary: "#D3B31C",
      colourSecondary: "#484848",
      colourTertiary:"#D3B31C",
    },
    header_blocks:{
      colourPrimary: "#FFFFFF"
    },
    id_block: {
      colourPrimary: "#ff9500",
      colourSecondary: "#ff9500",
      colourTertiary:"#ff9500",
    },
    class_block: {
      colourPrimary: "#009fe8",
      colourSecondary: "#009fe8",
      colourTertiary:"#009fe8",
    },
    on_click_block: {
      colourPrimary: "#e3d430",
      colourSecondary: "#e3d430",
      colourTertiary:"#e3d430",
    },
    div_block: {
      colourPrimary: "#b0b0b0",
      colourSecondary: "#b0b0b0",
      colourTertiary:"#787777",
    }
  },

  startHats: true,
  name: "HTMLTheme",
});
