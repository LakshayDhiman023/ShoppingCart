import React, { useEffect } from 'react'
import './home.css'
import Navbar from './Navbar/Navbar'
import Banner from './Banner';
import Slide from './Slide';
// import { getProductsReducer } from '../../redux/reducers/productReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import MidSlide from './MidSlide';
import MidSecion from './MidSecion';
// import { useSelect } from '@mui/base';
function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.getProducts);
  // console.log(products);
  useEffect(()=>{
    
    dispatch(getProducts());
  }, [dispatch])
  return (
    <>
      <Navbar />
      <div className="Container">
        <Banner />
      </div>
      <div className="Container">
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSecion/>
        <Slide products={products} title="Discount for You" timer={false} />
        <Slide products={products} title="Suggesting Items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Season's Top Picks" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Top Deals on Accessories" timer={false} />
      </div>
    </>
  );
}

export default Home