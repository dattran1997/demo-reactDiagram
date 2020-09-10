import * as React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';

export class JSCustomNodeWidget extends React.Component {

  handleClick = () => {
    console.log('click');
  }

  render () {
    console.log('service Node: ', this.props.node);
    const { name, color, serviceFormData} = this.props.node.options;
    console.log('service Form data: ', serviceFormData);


    return (
      <div className='custom-node' style={{backgroundColor: color}} tabIndex="1" onClick={this.handleClick} >
          <div className='title'>
            {name}
          </div>
          <div className='port-content'>
            <p>server: {serviceFormData.uri}</p>
            {/* <p>Protocol type: {seviceFormData.protocolType}</p>
            <p>ssl remain: 2 days</p>
            <p>link doc: {seviceFormData.linkDoc}</p> */}
            <p>status: working</p> 
            demo
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