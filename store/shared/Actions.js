import * as creators from '../Creators';

import { GETData } from '../../services/WebServices'

export const setBrands = payload => {
    return {
        type: creators.SET_BRANDS,
        payload
    }
}

export const setInfoCatalog = payload => {

    return {
        type: creators.SET_INDO_CATALOG,
        payload
    }
}

export const setCatalogProducts = payload => {
    return {
        type: creators.SET_CATALOG_PRODUCTS,
        payload
    }
}

export const loadBrandsAsync = () => {
    return (dispatch, _getState) => {

        GETData("/api/brands", "GET")
        .then(response => dispatch(setBrands(response)))
        .catch(response => console.log(response));
    }
}

export const loadCatalogProductsAsync = (payload) => {
    return (dispatch, _getState) => {

        GETData("/api/products", "GET")
        .then(response => dispatch(setCatalogProducts(response)))
        .catch(response => console.log(response));
    }
}