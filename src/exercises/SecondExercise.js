import { useState } from 'react';
import { Table } from 'react-bootstrap';

function SecondExercise () {

    let [nome, setNome] = useState();
    let [salario, setSalario] = useState();
    let [reajuste, setReajuste] = useState();
    
    
    function alterarNome(elemento){
        setNome(elemento.target.value)
    }
    function alterarSalario(valor){
        setSalario(valor.target.value)
    }
    function alterarReajuste(muda){
        setReajuste(muda.target.value)
    }
    
    let resultado = parseFloat(salario) + (parseFloat(salario) * (parseFloat(reajuste) / 100))
    
    return(
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>
                            NOME DO FUNCIONÁRIO
                        </th>
                        <th>
                            ANTIGO SALARIO
                        </th>
                        <th>
                            PORCENTAGEM DO REAJUSTE
                        </th>
                        <th>
                            SALARIO ATUAL
                        </th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>        
                            <input onChange={alterarNome}></input>
                        </td>
                        <td>
                            <input onChange={alterarSalario}></input>       
                        </td>
                        <td colSpan={2}>
                            <input onChange={alterarReajuste}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>        
                            {nome} 
                        </td>
                        <td>
                            R$ {salario}       
                        </td>
                        <td>
                            {reajuste}%
                        </td>
                        <td>
                            R$ {resultado ?? ' 0,00'}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default SecondExercise;