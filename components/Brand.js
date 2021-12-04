import Link from "next/link";
import { connect } from 'react-redux';

import * as sharedActions from '../store/shared/Actions'

function Brand({image, name, number_contact, id, loadCatalogProductsAsync, setInfoCatalog}) {

    return (
        <Link href='/catalog' >
            <a onClick={()=>{
                loadCatalogProductsAsync(name);
                setInfoCatalog({name: name, number_contact: number_contact});
            }}>
                <div id={`brand-${id}`}
                    className="bg-white p-3 c-pointer shadow border-rounded row-start align-content-center m-3">
                    <img src={image} height={250} width={250} className="img-brand border-rounded" alt="section-image"/>
                </div>
            </a>
        </Link>
    );
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
    loadCatalogProductsAsync: (payload) => dispatch(sharedActions.loadCatalogProductsAsync(payload)),
    setInfoCatalog: (payload) => dispatch(sharedActions.setInfoCatalog(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Brand);

