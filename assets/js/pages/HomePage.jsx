import React, { useEffect, useState } from 'react';
import MATERIALS_API from '../services/materialsAPI'
import PACKAGINGS_API from '../services/packagingsAPI'
import COMPONENTS_API from '../services/componentsAPI'

const HomePage = () => {

    const [materials, setMaterials] = useState([])
    const [packagings, setPackagings] = useState([])
    const [components, setComponents] = useState([])

    /** Fetch packagings, components and materials at first page loading. */
    useEffect(() => {
        fetchPackagings()
        fetchComponents()
        fetchMaterials()
    }, [])

    const fetchPackagings = async () => {
        try {
            setPackagings(await PACKAGINGS_API.getAll())
        } catch (error) {
            console.log(error)
        }
    }

    const fetchComponents = async () => {
        try {
            setComponents(await COMPONENTS_API.getAll())
        } catch (error) {
            console.log(error)
        }
    }

    const fetchMaterials = async () => {
        try {
            setMaterials(await MATERIALS_API.getAll())
        } catch (error) {
            console.log(error)
        }
    }

    return (<h1>Page d'accueil</h1>);
}
 
export default HomePage;