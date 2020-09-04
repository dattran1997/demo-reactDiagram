import * as React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';

export class JSCustomNodeWidget extends React.Component {


  render () {
    console.log(this.props.engine);
    console.log(this.props.node.getPort('out'));

    return (
      <div className="custom-node">
          <PortWidget engine={this.props.engine} port={this.props.node.getPort('in')}>
            <div className="circle-port" />
          </PortWidget>
          <PortWidget engine={this.props.engine} port={this.props.node.getPort('out')}>
            <div className="circle-port" />
          </PortWidget>
        <div className="custom-node-color" style={{ backgroundColor: 'rgb(192,255,0)' }} />
      </div>
    )
  }
    
}