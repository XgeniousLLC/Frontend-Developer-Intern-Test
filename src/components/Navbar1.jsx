import { Container, Navbar } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar1 = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#00192A" }}>
        <Container className="d-flex flex-column flex-sm-row">
          <Navbar.Brand
            href="#home"
            className="text-light d-flex justify-content-center align-items-center  gap-2"
          >
            <FiPhone className="mr-2 " />
            <p className="mb-0 fs-6">(678) 999-3985</p>
          </Navbar.Brand>
          <Navbar.Brand
            href="#home"
            className="text-light d-flex justify-content-center align-items-center  gap-2"
          >
            <IoLocationOutline className="mr-2 fs-4 " />
            <p className="mb-0 fs-6">96872 Boulevard Rd, CA</p>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end ">
            <Navbar.Text className="text-light d-flex justify-content-center align-items-center  gap-2">
              <TbTruckDelivery className="mr-2 fs-4 " />

              <p className="mb-0 fs-6 ">Track an Order</p>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
