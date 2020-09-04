import { DefaultPortModel, NodeModel } from '@projectstorm/react-diagrams';


export class JSCustomNodeModel extends NodeModel {
  constructor(options = {}) {
    super({
			...options,
			type: 'js-custom-node',
    });
    this.color = options.color || { options: 'red' };
    this.name = options.name || 'DF Server';


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



  addInPort(label) {
    this.addPort(
      new DefaultPortModel({
        in: true,
        name: 'in',
        label: label
      })
    );
  }

  addOutPort(label) {
    this.addPort(
      new DefaultPortModel({
        in: false,
        name: 'out',
        label: label
      })
    );
  }

  serialize() {
		return {
			...super.serialize(),
			color: this.color
		};
	}

	deserialize(ob, engine) {
		super.deserialize(ob, engine);
		this.color = ob.color;
	}

}