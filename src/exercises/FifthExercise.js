import { useState } from "react";

function FifthExercise (){
    
    let [sNome, setNome] = useState();
    let [iPreco, setPreco] = useState();
    let [iPorcentagem, setPorcentagem] = useState();
    let [resultado, setTotal] = useState(); 
    const [isVisible, setIsVisible] = useState();
    
    

    function Nome(valor){
        setNome(valor.target.value)
    }
    function Preco(valor){
        setPreco(valor.target.value)
    }
    function Porcentagem(valor){
        setPorcentagem(valor.target.value)
    }
    function acaoBotao(){
        setTotal(resultado = parseFloat(iPreco) + (parseFloat(iPreco) * (parseFloat(iPorcentagem) / 100)));
        setNome(sNome);
        setIsVisible(true)
    }
    return(
        <div>
            <div className="container pt-5">
                <div className="card">
                    <div className="card-title p-2 border-bottom card-header">
                        <h2>Exercício 4</h2>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-3">
                                <label className="label-control col-sm-12 col-md-12 col-lg-10">Nome da mercadoria:</label>
                                <input className="form-control" type="text" placeholder="Digite o nome da mercadoria" onChange={Nome}></input>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2">
                                <label className="label-control col-sm-12 col-md-12 col-lg-10">Preço atual:</label>
                                <input className="form-control" type="number" placeholder="Digite o preço atual" disabled={!sNome} onChange={Preco}></input>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2">
                                <label className="label-control col-sm-12 col-md-12 col-lg-12">% de aumento:</label>
                                <input className="form-control" type="number" placeholder="Digite a porcentagem" disabled={!sNome || !iPreco} onChange={Porcentagem}></input>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2 mt-4">
                                <button type="button" className="btn btn-success col-sm-12 col-md-12 col-lg-8" disabled={!sNome || !iPreco || !iPorcentagem} onClick={acaoBotao}>Calcular                                </button>
                            </div>
                            {isVisible && <div className="alert alert-success col-sm-12 col-md-12 col-lg-2 mt-2" role="alert">
                             <label className=" col-sm-12 col-md-8 col-lg-8 "><b>Novo preço: </b> R${resultado}</label>     
                             </div>}
                    </div>
                </div>
            </div>
        </div> 
        </div>
    )
}

export default FifthExercise;