
import Banner from './Banner/Banner';
import BestSellerCar from './BestSellerCar/BestSellerCar';
import Reviews from './Reviews/Reviews';
import ProductSlider from './ProductSlider/ProductSlider';
import Products from './Products/Products';



const Home = () => {



    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ProductSlider></ProductSlider>
            <Reviews></Reviews>
            <BestSellerCar></BestSellerCar>
        </div>


    );
};

export default Home;