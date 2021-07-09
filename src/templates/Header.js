import React from 'react';

class Header extends React.Component{
    render(){
        return(
            // <nav class="navbar navbar-dark bg-dark">
            //     <a class="navbar-brand" href="/">Libros</a>
            //     <a class="navbar-brand" href="/Dashboard">Lista</a>
            // </nav>
            // <nav className="navbar navbar-expand-lg navbar-light bg-light">
            //   <div className="container-fluid">
            //     <a className="navbar-brand" href="/">Libros</a>
            //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            //       <span className="navbar-toggler-icon"></span>
            //     </button>
            //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            //       <div className="navbar-nav">
            //         <a className="nav-link active" href="/">Busqueda</a>
            //         <a className="nav-link" href="/Dashboard">Listado</a>
            //       </div>
            //     </div>
            //   </div>
            // </nav>
            <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
                <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
                    <a href="/" className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5">Articulos</span>
                    </a>
                    <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <a href="/" className="nav-link px-sm-0 px-2">
                                <i className="fs-5 bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="/Dashboard" data-bs-toggle="collapse" className="nav-link px-sm-0 px-2">
                                <i className="fs-5 bi-speedometer2"></i><span className="ms-1 d-none d-sm-inline">Detalle</span> </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;