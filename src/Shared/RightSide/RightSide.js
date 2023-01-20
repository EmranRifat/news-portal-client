import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaWhatsapp,FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousal from "../Carousal/Carousal";
import { authContext } from "../../Context/Authprovider";


const RightSide = () => {
  const {signInWithGoogle,githubSignIn}=useContext(authContext);
  
  
  const handleGoogleSignIn=()=>{
  signInWithGoogle()
   .then(result=>{
    const user=result.user;
    console.log(user);
   })

   .catch(error=>{
    console.error(error)
   })
  };
const handleGithubSignIn=()=>{
  githubSignIn()
  .then(result=>{
    const user=result.user;
    console.log("user",user)
  })
  .catch(error=>console.error(error))
}




  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-primary"><FaGoogle></FaGoogle> Login with Google </Button>
       
        <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub></FaGithub> Loging with Github </Button>
      </ButtonGroup>
     
     <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
      <ListGroup.Item className="mb-2"><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item className="mb-2"><FaWhatsapp></FaWhatsapp> Whats-App</ListGroup.Item>
      <ListGroup.Item className="mb-2"><FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
      <ListGroup.Item className="mb-2"><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
      <ListGroup.Item className="mb-2"><></>  Vestibulum at eros</ListGroup.Item>
    </ListGroup>
      </div>
      
      <div>
<Carousal></Carousal>
      </div>
    </div>
  );
};

export default RightSide;
