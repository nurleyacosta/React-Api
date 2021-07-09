import React from 'react';
import Filtros from '../templates/Filtros';
import Header from '../templates/Header';

class Inicial extends React.Component{

    manejadorSubmit(e){
        e.preventDefault();
    }



    render(){
        return(
            
            <React.Fragment>
                <div className="container-fluid overflow-hidden">
                    <div className="row vh-100 overflow-auto">
                    <Header></Header>
                    <Filtros></Filtros>
                    </div>
                </div>
                
                
            </React.Fragment>
        );
    }
}

export default Inicial