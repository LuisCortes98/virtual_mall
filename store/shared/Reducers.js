import * as creators from '../Creators';

const initialState = {
    brands: [],
    infoCatalog: null,
    catalogProducts: []
};

export const sharedReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case creators.SET_BRANDS:
            return { ...state, brands: payload };
        case creators.SET_INDO_CATALOG:
            return { ...state, infoCatalog: payload };
        case creators.SET_CATALOG_PRODUCTS:
            return { ...state, catalogProducts: payload };
        default:
            return state;
    }
}