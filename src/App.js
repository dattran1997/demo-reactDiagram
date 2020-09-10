import React from 'react';
import logo from './logo.svg';
import './App.scss';
import DemoDiagram from './containers/demo';
import {NodeDataModel} from './components/NodeDataModel';
import {
  CanvasWidget
} from '@projectstorm/react-canvas-core';

function App() {
  return (
    <div className='srd-demo-canvas'>
      {/* <NodeDataModel/> */}
      <DemoDiagram/>
    </div>
  );
}

export default App;
