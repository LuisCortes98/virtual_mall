import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react';

import { Loader } from 'rsuite';

import { GETData } from '../services/WebServices'

import Brand from "../components/Brand";

export default function Main() {

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    GETData("/api/brands", "GET")
      .then(response => setBrands(response))
  },[]);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mall virtual</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/store.ico" />
      </Head>
      
      {brands.length ?
      <div className="w-100 vh-100 bg-white column-center align-items-center">
        <div className="txt-dark-blue txt-28 txt-bold text-center mb-5">Bienvenido a nuestra tienda virtual</div>
        <div className="row-center align-items-center">
          {brands.map(brand => <Brand key={brand.id} {...brand}/>)}
        </div>
      </div> :
      <div className="w-100 h-100 bg-white row-center align-items-center">
        <Loader center size="md" content="Cargando..." />
      </div>}
    </Fragment>
  )
}
