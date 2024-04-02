import '../style/custom.css';
import { Button, Col, Row, Table } from 'react-bootstrap';

function PriceList(){

    let produto = {
        id: 1,
        produto: "Camisa Torcedor Palmeiras - P",
        categoria: "Feminino",
        quantidade: 1,
        valorUnitario: 299.90,
    };
    let produto2 = {
        id: 2,
        produto: "Camisa Jogador Palmeiras - M",
        categoria: "Masculino",
        quantidade: 2,
        valorUnitario: 499.90,
    };
    let produto3 = {
        id: 3,
        produto: "Camisa Torcedor Palmeiras - G",
        categoria: "Masculino",
        quantidade: 3,
        valorUnitario: 299.90,
    };

    let lista_produto = [
        produto,
        produto2,
        produto3,
    ];


    

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
            {
                lista_produto.map(
                    function(produto){
                        return(<tr class="maisclaro">
                        <td class="borda">
                            {produto2.id}
                        </td>
                        <td class="borda">
                            {produto2.produto}
                        </td>
                        <td class="borda">
                            {produto2.categoria}
                        </td>
                        <td class="borda">
                            {produto2.quantidade}
                        </td>
                        <td class="borda">
                            {produto2.valorUnitario}
                        </td>
                        <td class="borda">
                            {produto2.quantidade * produto2.valorUnitario}
                        </td>   
                    </tr>
                    )
                        
                    }
                )
            }
        <tr class="maisclaro"  >
            <td class="borda">
                {produto3.id}
            </td>
            <td class="borda">
                {produto3.produto}
            </td>
            <td class="borda">
                {produto3.categoria}
            </td>
            <td class="borda">
                {produto3.quantidade}
            </td>
            <td class="borda">
                {produto3.valorUnitario}
            </td>
            <td class="borda">
                {produto3.quantidade * produto3.valorUnitario}
            </td>   
        </tr>
        <tr class="escuro">
            <td colspan="3"></td>
            <td class="borda">
                {produto.quantidade + produto2.quantidade + produto3.quantidade}
            </td>
            <td class="borda">
                {produto.valorUnitario + produto2.valorUnitario + produto3.valorUnitario}
            </td>
            <td class="borda">
                {(produto.quantidade * produto.valorUnitario) + (produto2.quantidade * produto2.valorUnitario) + (produto3.quantidade * produto3.valorUnitario)}
            </td>
        </tr>
        </tbody>
    </Table>
        </div>
    );
}

export default PriceList;