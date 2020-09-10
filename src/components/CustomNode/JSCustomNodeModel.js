import { DefaultPortModel, NodeModel } from '@projectstorm/react-diagrams';
import RDC from '@projectstorm/react-diagrams-core';


export class JSCustomNodeModel extends NodeModel {
  constructor(options = {}) {
    console.log(options);
    super({
			...options,
			type: 'js-custom-node',
    });
    this.color = options.color || 'rgb(0,192,255)';
    this.name = options.name || 'DF Server';
    this.seviceFormData = options.seviceFormData || {name: 'default name', uri: 'df uri'};


    this.addPort(
      new DefaultPortModel({
        in: true,
        name: 'in',
      })
    );

    this.addPort(
      new DefaultPortModel({
        in: false,
        name: 'out',
      })
    );
  }

  // constructor(options = {}) {
  //   console.log('option: ', options);
  
  //   super({
  //     ...options, 
  //     type: 'js-custom-node'
  //   });

  //   this.color = options.color || 'rgb(0,192,255)';
  //   this.name = options.name || 'DF Diagram';
  //   this.seviceFormData = {name: 'abc', uri: '12.12.12.12', protocolType: 'asdasd', linkDoc: 'asdasd.com'};
  // }



  addInPort(label) {
    this.addPort(
      new DefaultPortModel({
        in: true,
        name: 'in',
        label: label,
      })
    );
  }

  addOutPort(label) {
    this.addPort(
      new DefaultPortModel({
        in: false,
        name: 'out',
        label: label,
      })
    );
  }

  serialize() {
		return {
			...super.serialize(),
      color: this.color,
      name: this.name,
      // seviceFormData: this.seviceFormData,
		};
	}

	deserialize(ob, engine) {
    console.log(ob);
		super.deserialize(ob, engine);
    this.options.color = ob.data.color;
    this.options.name = ob.data.name;
    // this.options.seviceFormData = ob.data.seviceFormData
	}

}