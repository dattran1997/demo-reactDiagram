import * as React from 'react';
import * as _ from 'lodash';
import TrayWidget from './TrayWidget';
import { Application } from '../containers/Application';
import TrayItemWidget from './TrayItemWidget';
import { DefaultNodeModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from '../helpers/DemoCanvasWidget';
import { JSCustomNodeModel } from '../components/CustomNode/JSCustomNodeModel';
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

							var node = null;
							if (data.type === 'in') {
								node = new DefaultNodeModel('Server ' + (nodesCount + 1), 'rgb(192,255,0)');
								node.addInPort('In');
							} else if (data.type === 'out') {
								node = new DefaultNodeModel('Server ' + (nodesCount + 1), 'rgb(0,192,255)');
								node.addOutPort('Out');
							} else {
								node = new JSCustomNodeModel({name: 'Server ' + (nodesCount + 1),color: 'rgb(0,192,255)'});
								node.addInPort('in');
								node.addOutPort('out');
							}
							var point = this.props.app.getDiagramEngine().getRelativeMousePoint(event);
							node.setPosition(point);
							this.props.app.getDiagramEngine().getModel().addNode(node);
							this.forceUpdate();
						}}
						onDragOver={(event) => {
							event.preventDefault();
						}}>
						<DemoCanvasWidget>
							<CanvasWidget engine={this.props.app.getDiagramEngine()} />
						</DemoCanvasWidget>
					</Layer>
				</Content>
			</Body>
		);
	}
}

export default BodyWidget;