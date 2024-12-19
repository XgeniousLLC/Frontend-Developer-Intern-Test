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
    <div className="group">
      {/* Card */}
      <Card className="border-0 w-auto h-auto shadow-md transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg">
        {/* Image */}
        <Card.Img
          className="w-auto h-auto rounded-t-md"
          variant="top"
          src={product?.image}
        />
        
        {/* Card Body */}
        <Card.Body className="fs-6 p-4">
          {/* Rating */}
          <CardText
            className="rounded d-flex justify-center items-center max-w-min px-2 mb-2 text-yellow-600 bg-yellow-100"
          >
            <FaStar className="mr-2" /> {product?.rating}
          </CardText>

          {/* Title */}
          <Card.Title className="fs-6 fw-normal text-gray-800 mb-4 group-hover:text-blue-600 transition duration-300">
            {product?.productName}
          </Card.Title>

          {/* Button */}
          <Button
            variant="primary"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transform transition duration-300 ease-in-out"
            onClick={handleBuy}
          >
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
