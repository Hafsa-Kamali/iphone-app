
import Banner from "./Banner";
import SmallBanner from "./SmallBannner";
import Categories from "./Category";
import Products from "./Products";
import PopularProducts from "./PopularProducts";
import DiscountProduct from "./DiscountProduct";
import Banner2 from "./Banner2";
import Footer from "./Footer";





export default function Home() {
  return (
    <div className="grid items-center m-auto justify-center ">
  
  <Banner />
  <SmallBanner />
<Categories />
<Products />
<PopularProducts />
<DiscountProduct />

<Banner2 />
<Footer />
    </div>
  );
}