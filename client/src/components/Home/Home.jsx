import "./Home.scss";

import Banner from "./Banner/Banner"
import Category from "../Home/Category/Category"
import Products from "../Products/Products"

const Home = () => {
    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category />
                <Products headingText="Related Products" />
            </div>
        </div>
    </div>;
};

export default Home;
