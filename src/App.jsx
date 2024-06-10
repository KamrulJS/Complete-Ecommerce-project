import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Footer from './Components/Footer/Footer'
import ListingProduct from './Pages/ListingProduct/ListingProduct'
import NotFound404 from './Pages/NotFound404/NotFound404'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import axios from 'axios'

function App() {
const [productData, setproductData] = useState([]);
useEffect(() => {
  getData('https://kamruljs.github.io/ecommerce-project-API/db.json');
}, []);

const getData = async (url) =>{
  try{
    await axios.get(url).then((res)=>{
      setproductData(res.data);
      // console.log(res.data);
    })
  }catch(error){
    console.log(error);
  }
}



  return (
    productData.length !==0 &&
    <BrowserRouter>
       <Header data={productData}/>
          <Routes>
            <Route exact={true} path='/' element={<Home data={productData}/>}/>
            <Route exact={true} path='/category/:id' element={<ListingProduct data={productData} single={true}/>}/>
            <Route exact={true} path='/category/:id/:id' element={<ListingProduct data={productData} single={false}/> }/>
            <Route exact={true} path='/product/:id' element={<ProductDetails data={productData}/>}/>
            <Route exact={true} path='/about' element={<About/>}/>
            <Route exact={true} path='*' element={<NotFound404/>}/>
          </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
