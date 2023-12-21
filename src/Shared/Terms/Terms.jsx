import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
    <Container>
    <h2>Terms and conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum fugit
        suscipit porro laborum dolore molestiae voluptatum alias quo provident?
        Reprehenderit unde soluta, recusandae sint voluptas quae hic expedita
        vitae fuga nam non reiciendis quibusdam? Dicta ipsam dolore natus rerum
        odit autem aperiam dolorum recusandae suscipit libero, sequi
        reprehenderit numquam accusamus aspernatur dignissimos vero magni
        aliquid labore? Dolorem alias perferendis vero, nam accusantium
        praesentium magnam, sunt adipisci, dignissimos exercitationem
        necessitatibus maiores. Incidunt, corporis! Dignissimos, quis a? Quo,
        vitae. Cumque nemo totam harum eligendi nesciunt quis qui dolorum veniam
        doloremque necessitatibus, quam maiores? Numquam facilis illo, veritatis
        corrupti dolor odit laudantium similique.
      </p>
      <p>Go back <Link to ='/register'>Register</Link></p>
    </Container>
   
    </div>
  );
};

export default Terms;
