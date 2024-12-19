import products from "../products.json";
import ProductCard from "../components/ProductCard";
import FooterBootstrap from "../components/FooterBootstrap";
import { MdArrowForwardIos } from "react-icons/md";
import headPhone from "../assets/image/homeBanner/pngwing 1.png";
import washingMachine from "../assets/image/homeBanner/pngegg 1.png";
import model from "../assets/image/homeBanner/5281687 1.png";
import Awards from "../components/Awards";

// import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
  return (
    <div>
      <div className="container">
        {/* banner */}
        <div className="d-flex flex-column flex-sm-row mt-4 gap-4 ">
          {/* left  */}
          <div className="">
            {/* left top */}
            <div
              className="d-flex rounded-2 d-flex flex-column flex-sm-row mb-5"
              style={{
                background: "linear-gradient(to right, #62CDFF, #0080C2)",
                height: "",
              }}
            >
              <div className="p-4 ">
                <h3 className="text-white">
                  Novembers <br /> Gadget Madness
                </h3>
                <h3 className="fs-2 fw-bold">20% OFF</h3>
                <button className="btn btn-warning mt-4" type="button">
                  Get Offer
                </button>
              </div>
              <div>
                <img src={headPhone} alt="" srcset="" />
              </div>
            </div>

            {/* left bottom */}
            <div
              className="d-flex rounded-2 d-flex flex-column flex-sm-row justify-content-center align-items-center"
              style={{
                background: "#F4F300",
                height: "",
              }}
            >
              <div className="p-3">
                <h3 className="text-center">Cyber Monday Special</h3>
                <h3 className="text-center fw-bold fs-2 ">HOME APPLIANCES</h3>
                <img
                  src={washingMachine}
                  alt=""
                  srcset=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* right */}
          <div
            className="d-flex rounded-2 flex-column flex-sm-row position-relative "
            style={{
              background: "#62CDFF",
              height: "",
            }}
          >
            <div className=" p-1 p-md-5 ">
              <div className="">
                <h6>WINTER 2024 Offer</h6>
                <h2 className="fw-bold fs-2 mt-5">
                  Grab the best fashion deals in this winter
                </h2>
              </div>

              <button className="btn mt-5 btn-dark" type="button">
                Get Deals
              </button>
            </div>

            <button
              className=" btn btn-light position-absolute  top-50 start-50 translate-middle rounded-4 p-2"
              type="button"
            >
              {" "}
              95% COTTON MADE
            </button>

            {/* img */}
            <img src={model} alt="" srcset="" />
          </div>
        </div>

        {/* popular product */}
        <div className="mt-5">
          <div className="d-flex justify-content-between">
            <h3>Popular Products</h3>
            <button
              className="border-0 bg-transparent text-success flex justify-center items-center gap-2"
              type="button"
            >
              See All{" "}
              <span className="">
                <MdArrowForwardIos className="" />
              </span>
            </button>
          </div>
          <hr className="my-4" />
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-lg-2 col-md-4 col-12 mb-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

            {/* awards */}
            <div className="my-5">
            <Awards />
            </div>

      </div>
      <FooterBootstrap />
    </div>
  );
};

export default Home;
