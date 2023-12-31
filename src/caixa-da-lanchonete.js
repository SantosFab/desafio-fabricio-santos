class CaixaDaLanchonete {
    static products = {
        cafe: 3,
        chantily: 1.50,
        suco: 6.20,
        sanduiche: 6.50,
        queijo: 2,
        salgado: 7.25,
        combo1: 9.50,
        combo2: 7.50,
    };

    static multiplier = {
        dinheiro: 0.95,
        debito: 1,
        credito: 1.03
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        let amount = 0;
        let listOfProducts = [];

        if (!(metodoDePagamento in CaixaDaLanchonete.multiplier)) {
            return 'Forma de pagamento inválida!';
        }

        if (!itens || itens.length <=0) {
            return 'Não há itens no carrinho de compra!';
        }

        for (const item of itens){
            const [product, quantity] = item.split(',', 2);
            listOfProducts.push(product);
            const parseQuantity = parseInt(quantity);

            if (!(product in CaixaDaLanchonete.products)) {
                return 'Item inválido!';
            }

            if (isNaN(parseQuantity) || parseQuantity <= 0) {
                return 'Quantidade inválida!';
            }
         
            amount += parseQuantity * CaixaDaLanchonete.products[product] * CaixaDaLanchonete.multiplier[metodoDePagamento]
        }
        
        if (
            (listOfProducts.includes('queijo') && !listOfProducts.includes('sanduiche')) ||
            (listOfProducts.includes('chantily') && !listOfProducts.includes('cafe'))
        ) {
            return 'Item extra não pode ser pedido sem o principal';
        } else {
            return `R$ ${amount.toFixed(2).replace('.', ',')}`;
        }
    }
}
    export { CaixaDaLanchonete };