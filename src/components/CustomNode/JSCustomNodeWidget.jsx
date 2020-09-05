import * as React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';

export class JSCustomNodeWidget extends React.Component {


  render () {
    console.log(this.props.node);

    return (
      <div className='custom-node' style={{backgroundColor: this.props.node.color}} tabindex="1">
          <div className='title'>
            {this.props.node.name}
          </div>
          <div className='port-content'>
            <p>server: 12.12.12.12</p>
            <p>ssl remain: 2 days</p>
            <p>status: working</p> 
          </div>
          <div className='port-container'>
            <PortWidget engine={this.props.engine} port={this.props.node.getPort('in')}>
              <div className="circle-port" />
            </PortWidget>
            <PortWidget engine={this.props.engine} port={this.props.node.getPort('out')}>
              <div className="circle-port" />
            </PortWidget>
          </div>
      </div>
    )
  }
    
}