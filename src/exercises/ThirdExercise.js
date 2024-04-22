import { useState } from 'react';

function ThirdExercise() {

    let [nome, setNome] = useState();
    let [vitorias, setVitorias] = useState();
    let [empates, setEmpates] = useState();


    
    function Nome(valor) {
        setNome(valor.target.value)
    }
    function Vitorias(valor) {
        setVitorias(valor.target.value)
    }
    function Empates(valor) {
        setEmpates(valor.target.value)
    }

    let totalVitorias = vitorias * 3;
    let totalEmpates = empates * 1;
    let [total,setTotal] = useState(totalVitorias + totalEmpates);
    
    function acaoBotao(){
        setTotal(total);
    }
    return (
        <div>
            <div class="container pt-3">
                <div class="card">
                    <div class="card-title p-2 border-bottom card-header">
                        <h3>Exercício 3</h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 col-lg-3">
                                <label class="label-control"><b>Nome do time:</b></label>
                                <input class="form-control" type="text" placeholder="Insira aqui o nome do time" onChange={Nome}></input>
                            </div>
                                <div class="col-sm-12 col-md-2 col-lg-2">
                                    <label class="label-control"><b>Nº Vitórias:</b></label>
                                    <input class="form-control" type="number" placeholder="Nº de Vitórias" onChange={Vitorias} disabled={!nome}></input>
                                </div>
                                <div class="col-sm-12 col-md-2 col-lg-2">
                                    <label class="label-control"><b>Nº Empates:</b></label>
                                    <input class="form-control" type="number" placeholder="Nº de Empates" onChange={Empates} disabled={!vitorias}></input>
                                </div>
                                <div class="col-sm-12 col-md-3 col-lg-3 mt-4">
                                    <button type="button" class="btn btn-primary " disabled={!nome || !vitorias || !empates} onClick={acaoBotao}>Calcular</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
            )

}

            export default ThirdExercise;