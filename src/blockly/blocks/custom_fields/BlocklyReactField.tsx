import Blockly from "blockly";
import { useEffect, useState } from "react";
import { Root, createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";

class BlocklyReactField extends Blockly.Field {
  SERIALIZABLE = true;
  div_: Element | undefined;
  react_root: Root | undefined;

  static fromJson(options: { [x: string]: any }) {
    // `this` might be a subclass of BlocklyReactField if that class doesn't
    // override the static fromJson method.
    return new this(options["text"]);
  }

  // constructor(val: any) {
  //   super(val);

  //   this.dropdownDispose_ = this.dropdownDispose_.bind(this);
  //   this.showEditor_ = this.showEditor_.bind(this);
  // }

  showEditor_(_e?: Event | undefined): void {
    this.div_ = Blockly.DropDownDiv.getContentDiv();
    this.react_root = ReactDOM.createRoot(this.div_);
    this.react_root.render(this.render());

    var border = this.getSourceBlock()?.getColour();
    let sourceBlock = this.getSourceBlock()?.getColour();

    if (sourceBlock && border) {
      Blockly.DropDownDiv.setColour(sourceBlock, border);
    }

    Blockly.DropDownDiv.showPositionedByField(
      this,
      this.dropdownDispose_.bind(this)
    );

    

    // Sending a resize event renders the dropdown correctly
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 10);
  }

  dropdownDispose_() {
    console.log("hello");
    if (window.getSelection) {
      window.getSelection()?.removeAllRanges();
    }
    if (this.react_root) this.react_root.unmount();
  }

  render() {
    return <BlocklyReactFieldComponent />;
  }
}

interface Props {}

function BlocklyReactFieldComponent({}: Props) {
  const [first, setfirst] = useState(true);
  return (
    <div className="bg-white p-2 w-80 h-80">
      hello from react {first + ""}
      <button onClick={() => setfirst((prev) => !prev)}>Flip</button>
    </div>
  );
}

Blockly.fieldRegistry.register("field_react_component", BlocklyReactField);

export default BlocklyReactField;
