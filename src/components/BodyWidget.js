import * as React from 'react';
import * as _ from 'lodash';
import TrayWidget from './TrayWidget';
import { Application } from '../containers/Application';
import TrayItemWidget from './TrayItemWidget';
import { DefaultNodeModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from '../helpers/DemoCanvasWidget';
import { JSCustomNodeModel } from '../components/CustomNode/JSCustomNodeModel';
import {NodeDataModel} from './NodeDataModel';
import styled from '@emotion/styled';
 
export const Body = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

export const Header = styled.div`
    display: flex;
    background: rgb(30, 30, 30);
    flex-grow: 0;
    flex-shrink: 0;
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    padding: 10px;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    flex-grow: 1;
`;

export const Layer = styled.div`
    position: relative;
    flex-grow: 1;
`;


class BodyWidget extends React.Component {
	state={
		seviceFormData: {},
		serviceFromState: false
	}

	changeServiceData = (serviceData) => {
		this.setState({
			seviceFormData: serviceData,
		});

		console.log(this.state.seviceFormData);
	}

	handleFormOpen = () => {
		this.setState({
			serviceFromState: true
		});
	}

	handleFormClose = () => {
		this.setState({
			serviceFromState: false
		});
	}

	render() {
		return (
			<Body>
				<Header>
					<div className="title">Storm React Diagrams - DnD demo</div>
				</Header>
				<Content>
					<TrayWidget>
						<TrayItemWidget model={{ type: 'in' }} name="In Node" color="rgb(192,255,0)" />
						<TrayItemWidget model={{ type: 'out' }} name="Out Node" color="rgb(0,192,255)" />
						<TrayItemWidget model={{ type: 'in-out' }} name="Connection Node" color="rgb(0,192,255)" />
					</TrayWidget>
					<Layer
						onDrop={(event) => {
							var data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));
							var nodesCount = _.keys(this.props.app.getDiagramEngine().getModel().getNodes()).length;

							this.handleFormOpen()

							var node = null;
							if (data.type === 'in') {
								node = new DefaultNodeModel('Server ' + (nodesCount + 1), 'rgb(192,255,0)');
								node.addInPort('In');
							} else if (data.type === 'out') {
								node = new DefaultNodeModel('Server ' + (nodesCount + 1), 'rgb(0,192,255)');
								node.addOutPort('Out');
							} else {
								node = new JSCustomNodeModel({
									name:'Server ' + (nodesCount + 1),
									color: 'rgb(0,192,255)', 
									serviceFormData: {
										name: 'Node 4',
										uri:'node 4 uri',
									}
								});
							}
							var point = this.props.app.getDiagramEngine().getRelativeMousePoint(event);
							node.setPosition(point);
							this.props.app.getDiagramEngine().getModel().addNode(node);
							let diagramData = this.props.app.getActiveDiagram().serialize(); 
							// console.log(JSON.stringify(diagramData));
							// console.log(diagramData);
							this.forceUpdate();
						}}
						onDragOver={(event) => {
							event.preventDefault();
						}}>
						<DemoCanvasWidget>
							<CanvasWidget engine={this.props.app.getDiagramEngine()} />
						</DemoCanvasWidget>
						<NodeDataModel 
							visible={this.state.serviceFromState} 
							changeServiceData={this.changeServiceData}
							handleFormOpen={this.handleFormOpen}
							handleFormClose={this.handleFormClose}
						/>
					</Layer>
				</Content>
			</Body>
		);
	}
}

export default BodyWidget;