import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../common/Form";
import MATERIALS_API from "../services/materialsAPI";
import PACKAGINGS_API from "../services/packagingsAPI";
import COMPONENTS_API from "../services/componentsAPI";

class PackagingForm extends Form {
  state = {
    data: {
      id: "",
      name: "",
      component: "",
      material: "",
    },
    test: [
      {
        name: "Baquette",
      },
    ],
    materials: [],
    components: [],
    packagingComponents: [],
    errors: {},
  };

  schema = {
    id: Joi.number(),
    name: Joi.string().required().min(3).label("Emballage"),
    component: Joi.string().label("Composants"),
    material: Joi.string().label("Matériaux"),
  };

  async populatePackagings() {
    try {
      const packaging = await PACKAGINGS_API.get(this.props.match.params.id);
      this.setState({ data: this.mapToViewModel(packaging) });
    } catch (ex) {
      console.log(ex);
    }
  }
  async populateComponents() {
    const components = await COMPONENTS_API.getAll();
    this.setState({ components });
  }
  async populateMaterials() {
    const materials = await MATERIALS_API.getAll();
    this.setState({ materials });
  }

  mapToViewModel(packaging) {
    return {
      id: packaging.id,
      name: packaging.name,
      component: packaging.components[0].name,

      material: packaging.components[0].materials[0].name,
    };
  }

  doSubmit = async () => {
    await PACKAGINGS_API.update(this.props.match.params.id, this.state.data);

    this.props.history.push("/");
  };

  async componentDidMount() {
    await this.populateComponents();
    await this.populateMaterials();
    await this.populatePackagings();

    const packagingComponents = this.state.data.components;
    this.setState({ packagingComponents });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Modifier l'emballage {this.props.match.params.id} </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Emballage")}

          {this.renderSelect("component", "Composants", this.state.components)}

          {/*           {this.state.packagingComponents.map((component) => (
            <div key={component.id}>
              {this.renderSelect(
                component.name,
                "Composant",
                this.state.components
              )}
            </div>
          ))} */}

          {this.renderSelect("material", "Matériaux", this.state.materials)}

          {this.renderButton("Sauvegarder")}
        </form>
      </React.Fragment>
    );
  }
}

export default PackagingForm;
