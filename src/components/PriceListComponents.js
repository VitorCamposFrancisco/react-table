import '../style/custom.css';
import { useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';

function PriceList(){
    let id_produto  = 1;
    let id_produto2 = 2;
    let id_produto3 = 3;

    let camisa1 = "Camisa Torcedor Palmeiras - P";
    let camisa2 = "Camisa Jogador Palmeiras - M";
    let camisa3 = "Camisa Torcedor Palmeiras - G";

    let categ1 = "Feminino";
    let categ2 = "Masculino";
    let categ3 = "Masculino";

    let qtde1 = 1;
    let qtde2 = 2;
    let qtde3 = 3;
    let qtdeTotal = qtde1 + qtde2 + qtde3;

    let valorUnit1 = 299.90;
    let valorUnit2 = 499.90;
    let valorUnit3 = 299.90;
    let valorUnitTotal = valorUnit1 + valorUnit2 + valorUnit3;

    let valorTotal1 = valorUnit1
    * qtde1;
    let valorTotal2 = valorUnit2 * qtde2;
    let valorTotal3 = valorUnit3 * qtde3;
    let total = valorTotal1 + valorTotal2 + valorTotal3;


    const formatado  = valorUnitTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const formatado2 = valorTotal3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const formatado3 = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const Unit1      = valorUnit1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const Unit2      = valorUnit2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const Unit3      = valorUnit3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const total1     = valorTotal1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const total2     = valorTotal2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


    return(
        <div>
            <Table striped bordered hover responsive variant="dark">
        <thead>
            <tr>
                <td colSpan="6" class="escuro" className="text-center">
                    VENDAS - MEU PALMEIRAS
                </td>
            </tr>
            <tr class="claro">
                <td class="borda">
                    ID
                </td>
                <td class="borda">
                    PRODUTO
                </td>
                <td class="borda">
                    CATEGORIA
                </td>
                <td class="borda">
                    QTDE.
                </td>
                <td class="borda">
                    VALOR UNITÁRIO
                </td>
                <td class="borda">
                    TOTAL
                </td>   
            </tr>
        </thead>
        <tbody>
        <tr class="maisclaro">
            <td class="borda">
                {id_produto}
            </td>
            <td class="borda">
                {camisa1}
            </td>
            <td class="borda">
                {categ1}
            </td>
            <td class="borda">
                {qtde1}
            </td>
            <td class="borda">
                {Unit1}
            </td>
            <td class="borda">
                {total1}
            </td>   
        </tr>
        <tr class="maisclaro">
            <td class="borda">
                {id_produto2}
            </td>
            <td class="borda">
                {camisa2}
            </td>
            <td class="borda">
                {categ2}
            </td>
            <td class="borda">
                {qtde2}
            </td>
            <td class="borda">
                {Unit2}
            </td>
            <td class="borda">
                {total2}
            </td>   
        </tr>
        <tr class="maisclaro"  >
            <td class="borda">
                {id_produto3}
            </td>
            <td class="borda">
                {camisa3}
            </td>
            <td class="borda">
                {categ3}
            </td>
            <td class="borda">
                {qtde3}
            </td>
            <td class="borda">
                {Unit3}
            </td>
            <td class="borda">
                {formatado2}
            </td>   
        </tr>
        <tr class="escuro">
            <td colspan="3"></td>
            <td class="borda">
                {qtdeTotal}
            </td>
            <td class="borda">
                {formatado}
            </td>
            <td class="borda">
                {formatado3}
            </td>
        </tr>
        </tbody>
    </Table>
        </div>
    );
}

export default PriceList;