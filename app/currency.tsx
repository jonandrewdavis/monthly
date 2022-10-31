import CurrencyFormat from "react-currency-format";

const Currency = ({ value }: { value: number | string }) => {
  return <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
}

export default Currency;
