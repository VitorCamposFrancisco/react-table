import '../style/custom.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function PriceList(){

    let valor_a = 6
    let valor_b = 6;
    let [total, setTotal] = useState(valor_a + valor_b);

    function acaoBotao (){
        setTotal(total + 1);
        console.log(total);
    }

    return(
        <div>
            <table cellspacing="0">
        <thead>
            <tr>
                <td colSpan="6" class="escuro">
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
                1
            </td>
            <td class="borda">
                Camisa Torcedor Palmeias - M
            </td>
            <td class="borda">
                Masculina
            </td>
            <td class="borda">
                1
            </td>
            <td class="borda">
                R$299,90
            </td>
            <td class="borda">
                R$299,90
            </td>   
        </tr>
        <tr class="maisclaro">
            <td class="borda">
                2
            </td>
            <td class="borda">
                Camisa Jogador Palmeias - M
            </td>
            <td class="borda">
                Masculina
            </td>
            <td class="borda">
                2
            </td>
            <td class="borda">
                R$499,90
            </td>
            <td class="borda">
                R$999,80
            </td>   
        </tr>
        <tr class="maisclaro"  >
            <td class="borda">
                3
            </td>
            <td class="borda">
                Camisa Torcedor Palmeias - G
            </td>
            <td class="borda">
                Feminina
            </td>
            <td class="borda">
                3
            </td>
            <td class="borda">
                R$299,90
            </td>
            <td class="borda">
                R$899,70
            </td>   
        </tr>
        <tr class="escuro">
            <td colspan="3">
                
            </td>
            <td class="borda">
                6
            </td>
            <td class="borda">
                R$1099,70
            </td>
            <td class="borda">
                R$2199,40
            </td>
        </tr>
        </tbody>
        <tr>
            <th>Valor 1</th>
            <th>Valor 2</th>
            <th>Total</th>
        </tr>
        <tr>
            <td>{valor_a}</td>
            <td>{valor_b}</td>
            <td>{total}</td>
        </tr>
        <Button variant="success" onClick={acaoBotao}>VALOR</Button>
    </table>
        </div>
    );
}

export default PriceList;