import { Link } from "react-router-dom";
import stockInfo from '../data';

export default function Stocks () {
  return (
    <div className="stocks">
      {stockInfo.map((stock) => {
        const { name, symbol, } = stock;

        return (
          <Link key={symbol} to={`/price/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
};