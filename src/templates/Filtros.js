import React from 'react';
import { getArticles } from '../services/articles';

var arrayCountry = ["ae","ar","at","au","be","bg","br","ca","ch","cn","co","cu","cz","de","eg","fr","gb","gr","hk","hu","id","ie","il","in","it","jp","kr","lt","lv","ma","mx","my","ng","nl","no","nz","ph","pl","pt","ro","rs","ru","sa","se","sg","si","sk","th","tr","tw","ua","us","ve","za"];

class Filtros extends React.Component{
  
    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: true,
          data: null,
          total: null,
          country:'in',
          category:'general',
          q:null
        };

        this.manejadorBoton1 = this.manejadorBoton1.bind(this);
        this.manejadorBoton2 = this.manejadorBoton2.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);

    }
    
    manejadorBoton1(){
        getArticles(null,null,this.state.q)
            .then(response =>{
                //console.log(response.articles);
                this.setState({
                    data: response.articles,
                    total: response.totalResults
                })
            }, error => {
                alert('Something went wrong!'+ error);
            })
    }
    
    manejadorBoton2(){
        console.log('Country '+this.state.country);
        console.log('Category: '+this.state.category);

        getArticles(this.state.country, this.state.category)
            .then(response =>{
                //console.log(response.articles);
                this.setState({
                    data: response.articles,
                    total: response.totalResults
                })
            }, error => {
                alert('Something went wrong!'+ error);
            })
    }
    changeCountry(e){
        this.setState({
            country: e.target.value
        })
    }
    changeCategory(e){
        this.setState({
            category: e.target.value
        })
    }
    updateInputValue(evt) {
        this.setState({
          q: evt.target.value
        });
    }

    render(){
        return(
            
            <div className="col d-flex flex-column h-sm-100">
                <main className="row overflow-auto">
                    <div className="col pt-8">
                        <h3>Filtros de busqueda </h3>
                        <div className="mb-3 row">
                            <label for="inputFiltro1" className="col-sm-2 col-form-label">Busqueda especifica:</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="filtroq" onChange={this.updateInputValue} />
                            </div>
                            <div className="col-sm-2">
                                <button type="button" className="btn btn-primary" onClick={this.manejadorBoton1} >Buscar</button>
                            </div>
                            
                        </div>
                        <div className="mb-3 row">
                            <label for="inputFiltro2" className="col-sm-2 col-form-label">Pais:</label>
                            <div className="col-sm-3">
                                <select name="pais" id="pais" className="selectpicker" onChange={this.changeCountry}>
                                        { arrayCountry.map((value, index) => {
                                            return(
                                                <option value={value}>{value}</option>
                                            )
                                        })}
                                </select>
                            </div>
                            <label for="inputFiltro3" className="col-sm-2 col-form-label">Categoría:</label>
                            <div className="col-sm-3">
                                <select name="category" id="category" className="selectpicker" onChange={this.changeCategory}>
                                    <option value='business'>Negocios</option>
                                    <option value='entertainment'>Entretenimiento</option>
                                    <option value='general'>General</option>
                                    <option value='health'>Salud</option>
                                    <option value='science'>Ciencia</option>
                                    <option value='sports'>Deportes</option>
                                    <option value='technology'>Tecnología</option>
                                </select>
                            </div>
                            <div className="col-sm-2">
                                <button type="button" className="btn btn-primary" onClick={this.manejadorBoton2}>Buscar</button>
                            </div>
                        </div>
                        <hr />
                        
                        <h3>Resultados...</h3>
                        <p>Total articulos: {this.state.total} </p>
                       
                        <table className="table">
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

                         {/* <div className="row">
                            <div className="col text-center">
                                <Link to="/Dashboard"><button type="button" className="btn btn-success" onClick={this.manejadorClick} >Ver Resultados</button>
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </main>
                <footer className="row bg-light py-4 mt-auto">
                    <div className="col"> Prueba Angie Acosta -  Julio 2021</div>
                </footer>
            </div>
            
        );



        
    }
}

export default Filtros;