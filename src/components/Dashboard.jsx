import React from 'react';
import Header from '../templates/Header';
import { Link } from 'react-router-dom';
import { getArticles } from '../services/articles';



class Dashboard extends React.Component{
    
    
    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: true,
          data: null,
          total: null
        }
    }

    componentDidMount(){

       
       getArticles('ae').then(response =>{
        console.log(response.articles);
        console.log('total: '+response.totalResults);
        this.setState({
            data: response.articles,
            total: response.totalResults
        })
        }, error => {
            alert('Something went wrong!'+ error);
        })
        
       
       
       .then(algo=>console.log(algo));
        

    }

    manejadorClick = () =>{
        console.log('redirecionaaaaaaaaaaaaaaaaaaaaar');
    }



    render(){
        console.log(this.state.data);
        return(
            
            <React.Fragment>
                <div className="container-fluid overflow-hidden">
                    <div className="row vh-100 overflow-auto">
                        <Header></Header>
                        <div className="col d-flex flex-column h-sm-100">
                            <main className="row overflow-auto">
                                <div className="col pt-4">
                                    <table className="table">
                                        {/* <thead>
                                            <tr>
                                            <th scope="col">Image</th>
                                            <th scope="col">Data</th>
                                            </tr>
                                        </thead> */}
                                        <tbody>
                                            { this.state.data &&  this.state.data.map((value, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td className="w-25"> 
                                                            <img src={value.urlToImage} className="img-fluid img-thumbnail" alt="articulo" width="100%"></img>
                                                        </td>
                                                        <td>
                                                            <span>Titulo: </span>{value.title} <br/>
                                                            <span>Autor: </span>{value.author} <br/>
                                                            <span>Descripción: </span>{value.description} <br/>
                                                        </td>
                                                    </tr>
                                                )
                                            })}                                          
                                        </tbody>
                                    </table>
                                </div>
                            </main>
                            <div class="row">
                                <div class="col text-center">
                                <Link to="/"><button type="button" className="btn btn-primary" onClick={this.manejadorClick} >Realizar otra busqueda</button>
                                </Link>
                                    
                                </div>
                            </div>
                            <footer className="row bg-light py-4 mt-auto">
                                <div className="col"> Prueba Angie Acosta -  Julio 2021</div>
                            </footer>
                        </div>
                    </div>
                </div>
                
                
            </React.Fragment>
        );
    }
}

export default Dashboard