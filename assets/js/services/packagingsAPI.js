import axios from "axios";
import { PACKAGINGS_API } from "../config";

/** Get all packagings (with their components and materials). */
function getAll() {
    return axios.get(PACKAGINGS_API).then(response => response.data['hydra:member'])
}

/** Get a packaging (and its components and their materials) thanks to its id. */
function get(id) {
    return axios.get(PACKAGINGS_API + "/" + id).then(response => response.data)
}

/**
 * Update an existing packaging (and its components and their materials).
 * @param {Object} packaging A JSON object that represents the updated packaging.
 */
function update(id, packaging) {
    return axios.put(PACKAGINGS_API + "/" + id, packaging, {headers: {'Content-type': 'application/ld+json'}}).then(response => response.data)
}

export default {
    getAll,
    get,
    update
}