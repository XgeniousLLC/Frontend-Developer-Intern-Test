import Button from "react-bootstrap/Button";
import { Card, CardText } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const handleBuy = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to buy this product!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, buy it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your purchase was successful.", "success");
      }
    });
  };

  return (
    <div>
      <Card className="border-0 w-60 h-80 ">
        <Card.Img className="w-60 h-56" variant="top" src={product?.image} />
        <Card.Body className="fs-6  ">
          <CardText
            className=" rounded "
            style={{
              color: "#FFC436",
              backgroundColor: "#FFF5DF",
              width: "70px",
            }}
          >
            <FaStar className=" mx-2 mb-1 " /> {product?.rating}
          </CardText>
          <Card.Title className="fs-6 fw-normal ">
            {product?.productName}
          </Card.Title>

          <Button variant="primary" onClick={handleBuy}>
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
