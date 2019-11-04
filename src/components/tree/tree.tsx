import React from 'react';
import './tree.scss';

interface TreeProps {
  tree: any
};
interface TreeState {
  tree: any
};

export default class Tree extends React.Component<TreeProps, TreeState> {
  componentDidMount() {
    this.state = {
      tree: this.props.tree
    }
  }

  render() {
    return(
      <canvas className="tree"></canvas>
    );
  }
}
