import React, { Component } from "react";
import Form from "../common/form";
import MATERIALS_API from "../services/materialsAPI";
import PACKAGINGS_API from "../services/packagingsAPI";
import COMPONENTS_API from "../services/componentsAPI";

class PackagingForm extends Form {
  state = {
    packagings: [],
    materials: [],
    components: [],
  };

  async populatePackagings() {
    packagingId = this.props.match.params.id;
    const { data: packagings } = await PACKAGINGS_API.get(packagingId);
    this.setState({ packagings });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Modifier le packaging {this.props.match.params.id} </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input id="name" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="component">Composant</label>
            <input id="component" name="component" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="materials">Matériaux</label>

            <select name="materials" id="materials" className="form-control">
              <option value="" />
            </select>
          </div>

          <button className="btn btn-primary">Confirmer</button>
        </form>
      </React.Fragment>
    );
  }
}

export default PackagingForm;
