// import * as React from 'react';
// import createEngine, { 
//     DefaultLinkModel, 
//     DefaultNodeModel,
//     DiagramModel 
// } from '@projectstorm/react-diagrams';
// import DefaultState from './DefaultState';

// import {
//     CanvasWidget
// } from '@projectstorm/react-canvas-core';

// const DemoDiagram = () => {
    
//     // create an instance of the engine with all the defaults
//     const engine = createEngine();
    
//     // node 1
//     const node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)');
//     node1.addOutPort('Out');
//     node1.setPosition(100, 100);
//     // let port1 = node1.addOutPort('Out');
    
//     // node 2
//     const node2 = new DefaultNodeModel('Node2', 'rgb(192.255,0)');
//     node2.addInPort('In');
//     node2.setPosition(200, 100);
//     // let port2 = node2.addOutPort('Out');
    
//     // link them and add a label to the link
//     // const link = port1.link(port2);
//     // link.addLabel('Hello World!');
    
    
//     const model = new DiagramModel();
//     model.addAll(node1, node2);
//     engine.setModel(model);

//     engine.getStateMachine().pushState(new DefaultState);

//     return (
//         <CanvasWidget className='srd-demo-canvas' engine={engine} />
//     );
// }

// export default DemoDiagram;

import * as React from 'react';

import BodyWidget from './components/BodyWidget';
import { Application } from './Application';

export default () => {
	var app = new Application();
	return <BodyWidget app={app} />;
};


