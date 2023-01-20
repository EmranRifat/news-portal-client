import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../../Context/Authprovider';

const Register = () => {
    const navigate=useNavigate()

    const {createUser}=useContext(authContext);

    const [error, setError] = useState("");
    const [accepted,setAccepted]=useState(false);


    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;
        // console.log(name,photoURL,email,password)


        if (password.length < 5) {
            setError("Password must be Five characters or more");
            return;
          }
          
          createUser(email,password)
          .then(result=>{
            const user=result.user;
            console.log("user",user);
            form.reset();
            setError(" ");
            navigate("/");
          })
          .catch(error=>{
            setError(error.message);
            console.error(error)})

    }
    const handleAccepted=(event)=>{
        setAccepted(event.target.checked)
    }




    return (       
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
                type="checkbox"
                onClick={handleAccepted}

                label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted} >
            Register
        </Button>
        <Form.Text className="text-danger">
            {error}
    
        </Form.Text>
    </Form>
    );
};

export default Register;