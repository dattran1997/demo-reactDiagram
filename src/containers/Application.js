import * as SRD from '@projectstorm/react-diagrams';
import { JSCustomNodeFactory } from '../components/CustomNode/JSCustomNodeFactory';
import { parsedData } from '../helpers/sampleData';
import { JSCustomNodeModel } from '../components/CustomNode/JSCustomNodeModel';

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
        name: 'Node1',
        color: 'red',
        serviceFormData: {
          name: 'Node 1',
          uri: 'node 1 uri',
        },
        position: {
          x: 10,
          y: 10,
        },
      },
      {
        id: '2',
        name:'Node2' ,
        color: 'green',
        serviceFormData: {
          name: 'Node 2',
          uri:'node 2 uri',
        },
        position: {
          x: 40,
          y: 40,
        },
      },
      {
        id: '3',
        name:'Node3' ,
        color: 'blue',
        serviceFormData: {
          name: 'Node 3',
          uri:'node 3 uri',
        },
        position: {
          x: 100,
          y: 100,
        },
      },
      {
        id: '4',
        name:'Node4' ,
        color: 'yellow',
        serviceFormData: {
          name: 'Node 4',
          uri:'node 4 uri',
        },
        position: {
          x: 140,
          y: 140,
        },
      },
    ]

    const links = [
      {
        id: '1',
        name: 'link1',
        nodeOut: {
          id: '1',
          name: 'Node1',
        },
        nodeIn: {
          id: '2',
          name: 'Node2',
        },
      },
      {
        id: '2',
        name: 'link2',
        nodeOut: {
          id: '3',
          name: 'Node3',
        },
        nodeIn: {
          id: '4',
          name: 'Node4',
        },
      },
    ]

    const allNodeModel = nodes.map((node, index) => {
      const nodeModel = new JSCustomNodeModel(node);
      nodeModel.setPosition(index * 100, index * 50);

      return nodeModel;
    });

    // link the ports

    const allLinkModel = links.map((link) => {
      const linkModel = new SRD.DefaultLinkModel();

      allNodeModel.map((nodeModel) => {
        if (link.nodeOut.name === nodeModel.name){
          linkModel.setSourcePort(nodeModel.getPort('out'));
        } else if (link.nodeIn.name === nodeModel.name) {
          linkModel.setTargetPort(nodeModel.getPort('in'));
        }

        return null;
      });

      return linkModel;
    });

    this.activeModel.addAll(...allNodeModel, ...allLinkModel);

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
