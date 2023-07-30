import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  [key: string]: unknown;
}
const Block = ({ children, ...props }: Props) => {
  props.is = "blockly";
  return React.createElement("block", props, children);
};

const Category = ({ children, ...props }: Props) => {
  props.is = "blockly";
  return React.createElement("category", props, children);
};

const Value = ({ children, ...props }: Props) => {
  props.is = "blockly";
  return React.createElement("value", props, children);
};

const Field = ({ children, ...props }: Props) => {
  props.is = "blockly";
  return React.createElement("field", props, children);
};

const Shadow = ({ children, ...props }: Props) => {
  props.is = "blockly";
  return React.createElement("shadow", props, children);
};

export { Block, Category, Value, Field, Shadow };
