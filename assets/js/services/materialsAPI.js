import axios from "axios";
import { MATERIALS_API } from "../config";

/** Get all materials. */
function getAll() {
    return axios.get(MATERIALS_API).then(response => response.data['hydra:member'])
}


/** Get a material thanks to its id. */
function get(id) {
    return axios.get(MATERIALS_API + "/" + id).then(response => response.data)
}

/**
 * Update an existing material.
 * @param {Object} packaging A JSON object that represents the updated material.
 */
function update(id, material) {
    return axios.put(MATERIALS_API + "/" + id, material, {headers: {'Content-type': 'application/ld+json'}}).then(response => response.data)
}

export default {
    getAll,
    get,
    update
}