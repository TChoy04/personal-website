import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Main from "./components/main.js";  
import "./App.css";
import ErrorPage from "./components/ErrorPage.js"
import CryptoMain from "./crypto_tracker/CryptoMain.js";
import CoinPage from "./crypto_tracker/components/CoinPage.js";
import {useState,useEffect} from "react"
import axios from "axios"
import Worm from "./happy_worm/Worm.js"
function App() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
<Router>
  <Routes>
    <Route path="/" element={<Main></Main>}></Route>
    <Route path="/js30"> </Route>
    <Route path="/crypton" element={<CryptoMain></CryptoMain>}></Route>
    <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    <Route path='/crypton/coin' element={<CoinPage />}/>
    <Route path='/crypton/coin/:coinId' element={<CoinPage />} />
    <Route path='/snake' element={<Worm></Worm>}></Route>
  </Routes>
</Router>
  );
}

export default App;
