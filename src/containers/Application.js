import * as SRD from '@projectstorm/react-diagrams';
import { JSCustomNodeFactory } from '../components/CustomNode/JSCustomNodeFactory';
import { parsedData } from '../helpers/sampleData';
import {JSCustomNodeModel } from '../components/CustomNode/JSCustomNodeModel';

/**
 * @author Dylan Vorster
 */
export class Application {


	constructor() {
		this.diagramEngine = SRD.default();
		this.diagramEngine.getNodeFactories().registerFactory(new JSCustomNodeFactory());
		this.newModel();
		// this.newSerializeModel();
	}

	newModel() {
		this.activeModel = new SRD.DiagramModel();
		this.diagramEngine.setModel(this.activeModel);		
		//3-A) create a default node
		// var node1 = new SRD.DefaultNodeModel('Node 1', 'rgb(0,192,255)');
		// let port = node1.addOutPort('Out');
		// node1.setPosition(100, 100);

		// //3-B) create another default node
		// var node2 = new SRD.DefaultNodeModel('Node 2', 'rgb(192,255,0)');
		// let port2 = node2.addInPort('In');
		// node2.setPosition(400, 100);
		const nodes = [
			{
				id: '1',
				name:'Node1 ' ,
				color: 'red',
				serviceFormData: {
					name: 'Node 1',
					uri:'node 1 uri',
				}
			},
			{
				id: '2',
				name:'Node2 ' ,
				color: 'green',
				serviceFormData: {
					name: 'Node 2',
					uri:'node 2 uri',
				}
			},
			{
				id: '3',
				name:'Node3 ' ,
				color: 'blue',
				serviceFormData: {
					name: 'Node 3',
					uri:'node 3 uri',
				}
			},
			{
				id: '4',
				name:'Node4 ' ,
				color: 'yellow',
				serviceFormData: {
					name: 'Node 4',
					uri:'node 4 uri',
				}
			},
			
		]

		const allNodeModel = nodes.map((node, index) => {
			const nodeModel = new JSCustomNodeModel(node);
			nodeModel.setPosition(index * 100, index * 50);

			return nodeModel;
		})

		// link the ports

		this.activeModel.addAll(...allNodeModel);

		// serialize
		let diagramData = JSON.stringify(this.activeModel.serialize());

		// console.log(diagramData);
	}

	newSerializeModel() {
		this.activeModel = new SRD.DiagramModel();
		this.activeModel.deserializeModel(parsedData, this.diagramEngine);
		this.diagramEngine.setModel(this.activeModel);
	}

	getActiveDiagram() {
		return this.activeModel;
	}

	getDiagramEngine() {
		return this.diagramEngine;
	}
}
