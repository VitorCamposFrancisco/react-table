import { isVisible } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useState } from "react";
import { Alert } from "react-bootstrap";

function FourthExercise() {
    let [cep, setCep] = useState();
    let [endereco, setEndereco] = useState([]);
    

    let [status, setStatus] = useState({
        "variant" : "",
        "message" : ""
    });

    function Cep (valor) {
        setCep(valor.target.value)
    }

    function buscarCep() {
        axios.get("https://viacep.com.br/ws/" + cep + "/json/").then(function (response) {
            setStatus({
                "variant" : "success",
                "message" : "Deu tudo certo :) BOA"  
            });

            console.log(JSON.stringify(response.data));
            setEndereco(response.data)
            

        }).catch(function (error) {

            console.log(error);
            setStatus({
                "variant" : "danger",
                "message" : "Deu tudo errado :( FUDEU"  
            });
        });
    }

    return (
        <div class="pt-4">
            <div class="card">
                    <div class="card-title p-2 border-bottom card-header">
                        <h3>Exercício 5</h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <label class="label-control"><b>CEP:</b></label>
                                <input class="form-control"  type="number" maxLength={8} placeholder="Digite seu CEP" onChange={Cep}></input>
                            </div>
                                <div class="col-sm-12 col-md-12 col-lg-3 mt-4">
                                <button className="btn btn-success" onClick={buscarCep}>Buscar Cep</button> 
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-12 mt-2" role="alert">
                            <Alert variant={status.variant} >
                                {status.message}
                            </Alert>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="row mt-2">
                        <div className="col-12">
                            Rua:  {endereco.logradouro}
                        </div>
                        <div className="col-12">
                            Bairro:  {endereco.bairro}
                        </div>
                        <div className="col-12">
                            Cidade:  {endereco.localidade}
                        </div>
                        <div className="col-12">
                            Estado:  {endereco.uf}
                        </div>
                </div>
        </div>
    )
}

export default FourthExercise;