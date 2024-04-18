import axios from "axios";
import { useState } from "react";
import { Alert } from "react-bootstrap";

 function SixthExercise () {
    let  [value, setValue] = useState();
    let  [pair1, setPair1] = useState();
    let  [pair2, setPair2] = useState();


    function moeda(value){
        setValue(value.target.value);
    }
    function Pair1(value){
        setPair1(value.target.value);
    }
    function Pair2(value){
        setPair2(value.target.value);
    }

    function converter(){
        axios.get(`https://economia.awesomeapi.com.br/json/last/${pair1}-${pair2}`).then(function (response){
                
        console.log(value * response.data[`${pair1}${pair2}`].bid);
        })

        
    }

    return(
        <>
            <div class="card mt-5">
                    <div class="card-title p-2 border-bottom card-header">
                        <h3>Exercício 6</h3>
                    </div>
                    <div class="card-body">
                    <div class="row">
                    <select onChange={Pair1} class="form-select" aria-label="Default select example">
                        <option selected>Selecione a primeira moeda</option>
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                    <select onChange={Pair2} class="form-select pt-2 mt-4" aria-label="Default select example">
                        <option selected>Selecione a segunda moeda</option>
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>   
                        </div>
                        <div class="row mt-4">
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <label class="label-control"><b>CONVERTER:</b></label>
                                <input class="form-control"  type="number" maxLength={8} placeholder="Digite o valor" onChange={moeda}></input>
                            </div>
                                <div class="col-sm-12 col-md-12 col-lg-3 mt-4">
                                <button className="btn btn-success" onClick={converter}>converter</button> 
                            </div>
                        </div>
                    </div>
                </div>
        </>    
    )
 }

 export default SixthExercise;