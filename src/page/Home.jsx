import products from "../products.json";
import ProductCard from "../components/ProductCard";
const Home = () => {
  return (
    <div className="container">
      <div>
        <h3>Popular Products</h3>
        <hr />
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-2 col-md-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
