import React , {useState,useEffect} from 'react'
import ProductCart from '../components/ProductCart'


const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("/api/products")
    .then((res)=>res.json())
    .then((data)=>{
      setProducts(data);
    })
    .catch((err) => console.error("Error fetching products : ",err))
  },[]);
  return (
    <div>
     <h1 className='text-3xl my-5'>List Products</h1>
     <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {
            products.map((product,key)=>
               <ProductCart key={key} data ={product}/>
        )}

     </div>
    </div>
  )
}

export default Home
