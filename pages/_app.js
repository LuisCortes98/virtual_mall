import '../styles/globals.css'
import '../styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import '../public/icons/css/all.min.css';

import {useEffect} from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp;
