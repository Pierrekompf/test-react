import axios from "axios";
import { COMPONENTS_API } from "../config";

/** Get all components (with their materials). */
function getAll() {
    return axios.get(COMPONENTS_API).then(response => response.data['hydra:member'])
}

/** Get a component (and its materials) thanks to its id. */
function get(id) {
    return axios.get(COMPONENTS_API + "/" + id).then(response => response.data)
}

/**
 * Update an existing component (and its materials).
 * @param {Object} component A JSON object that represents the updated component.
 */
function update(id, component) {
    return axios.put(COMPONENTS_API + "/" + id, component, {headers: {'Content-type': 'application/ld+json'}}).then(response => response.data)
}

export default {
    getAll,
    get,
    update
}