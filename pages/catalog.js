import Head from 'next/head'
import Router from 'next/router'

import { connect } from 'react-redux';
import { Fragment, useEffect } from 'react';

import { Loader } from 'rsuite';

import Product from "../components/Product";
import Chat from "../components/Chat";

function Catalog(props) {

  useEffect(() => !props.infoCatalog && Router.push('/'),[]);

  return (
    <Fragment>
    {props.infoCatalog ?
      <Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{props.infoCatalog.name}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/store.ico" />
        </Head>
        
          {props.products.length ?
          <div className="w-100 vh-100 bg-white column-start align-items-start p-4 position-relative">
              <div className="py-2">
                <div className="txt-dark-blue txt-28 txt-bold">{props.infoCatalog.name}</div>
              </div>
              <div className="grid-products w-100">
                  {props.products.map(product => <Product key={product._ref} {...product}/>)}
              </div>
              <Chat name={props.infoCatalog.name} number={props.infoCatalog.number_contact}/>
          </div> :
          <div className="w-100 h-100 bg-white row-center align-items-center">
              <Loader center size="md" content="Cargando..." />
          </div>}
      </Fragment> : 
      <div/>
    }
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  products: state.shared.catalogProducts,
  infoCatalog: state.shared.infoCatalog,
})

export default connect(mapStateToProps)(Catalog)