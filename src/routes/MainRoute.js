import React, { useState, useEffect } from "react";
import '../App.css';
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function MainRoute() {
let navigate = useNavigate();

  const [cryptoList, setCryptoList] = useState([]);

  useEffect(()=> {
    Axios.get('https://api.coinlore.net/api/tickers/?start=100&limit=20').then((response) => {
      setCryptoList(response.data['data']);
    });
  }, []);

  return (
        <>
            <div id="header">
                <h1>CryptoLand</h1>
            </div>
            <div className="cryptoList">
                {cryptoList.map((coin) => {
                    return <div onClick={() => {navigate(`/currency/${coin.id}`)}}>
                            <h1>{coin.symbol}</h1>
                            <h1>{coin.price_usd}</h1>

                    </div>
                })}
            </div>
        </>
  );
}

export default MainRoute;
