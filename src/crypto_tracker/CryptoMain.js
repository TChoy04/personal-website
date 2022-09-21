import React, {useState,useEffect} from 'react'
import "./CryptoMain.css"
import axios from 'axios'
import Header from "./components/Header.js"
import {Link} from "react-router-dom"
import CoinBar from "./components/CoinBar.js"
import CoinPage from "./components/CoinPage"
import {IoPlanet}from "react-icons/io5"
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
function CryptoMain() {
    const [crypto,setCrypto] = useState([]);
    useEffect(()=>{
        axios.get(url).then((response)=>{
            setCrypto(response.data);
            console.log(response.data[0])
        }).catch((error)=>{
            console.log(error);
        })
    },[])
  return (
    <>
    <Header></Header>
    <h1 className="coin-logo"> <IoPlanet></IoPlanet><span>Planet Crypton</span></h1>
    <div className = "coin-wrapper">
        <div className="coin-row">
            <p className="rank">#</p>
            <p className="coin">Coin</p>
            <p className="price">Price</p>
            <p className="daily">24h</p>
            <p className='hide-mobile'>Volume</p>
            <p className='hide-mobile'>Market Cap</p>
        </div>
    {crypto.map((coin)=>{
       return <Link className="coin-row hover-effect" element = {<CoinPage></CoinPage>}to={`./coin/${coin.id}`} key={coin.id}>
        <CoinBar coin = {coin} ></CoinBar>
       </Link>
    })
    
    }
    </div>
    </>
  )
}

export default CryptoMain