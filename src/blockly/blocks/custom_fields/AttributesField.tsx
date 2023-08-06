import React from 'react'
import BlocklyReactField from './BlocklyReactField'

class AttributesField extends BlocklyReactField {
  static fromJson(options: { [x: string]: string | number ; }) {
    // `this` might be a subclass of ReactDateField if that class doesn't
    // override the static fromJson method.
    return new this(options['date']);
  }
}

export default AttributesField