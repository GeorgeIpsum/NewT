import React from 'react';
import './tree-picker.scss';

interface TreePickerProps {
  firstTime: boolean
};
interface TreePickerState {};

export default class TreePicker extends React.Component<TreePickerProps, TreePickerState> {
  render() {
    return(
      <div className="Tree-Picker"></div>
    );
  }
}
