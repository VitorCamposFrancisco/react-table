import { Button,Table, Row } from 'react-bootstrap';

function FirstExercise () {

    let velocidade = 100 ;
    let distancia = 200;
    let tempo = distancia / velocidade;

    return(
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>
                            VELOCIDADE
                        </th>
                        <th>
                            DISTÂNCIA
                        </th>
                        <th>
                            TEMPO PARA COMPLETAR A DISTÂNCIA INFORMADA
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>        
                            {velocidade} KM/H
                        </td>
                        <td>
                            {distancia} KM   
                        </td>
                        <td>
                            {tempo} HORAS
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default FirstExercise;