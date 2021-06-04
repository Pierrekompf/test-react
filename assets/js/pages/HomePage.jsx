import React, { useEffect, useState } from "react";
import MATERIALS_API from "../services/materialsAPI";
import PACKAGINGS_API from "../services/packagingsAPI";
import COMPONENTS_API from "../services/componentsAPI";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [materials, setMaterials] = useState([]);
  const [packagings, setPackagings] = useState([]);
  const [components, setComponents] = useState([]);

  /** Fetch packagings, components and materials at first page loading. */
  useEffect(() => {
    fetchPackagings();
    fetchComponents();
    fetchMaterials();
  }, []);

  const fetchPackagings = async () => {
    try {
      setPackagings(await PACKAGINGS_API.getAll());
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComponents = async () => {
    try {
      setComponents(await COMPONENTS_API.getAll());
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMaterials = async () => {
    try {
      setMaterials(await MATERIALS_API.getAll());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <h1>Accueil Packagings</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
          </tr>
        </thead>
        <tbody>
          {packagings.map((packaging) => (
            <tr key={packaging.id}>
              <td>{packaging.id}</td>
              <td>
                <Link to={`/packagings/${packaging.id}`}>{packaging.name}</Link>
              </td>
              <td>{packaging.components.id}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form"></div>
    </React.Fragment>
  );
};

export default HomePage;
