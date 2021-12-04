import CurrencyFormat from 'react-currency-format';

export default function ProductDetail({value}) {
    return(
        <CurrencyFormat
            value={value}
            prefix={'$'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            decimalScale={0}
            fixedDecimalScale={true}
            displayType={'text'}
        />
    )
}