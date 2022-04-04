import React, { useContext, useState } from 'react'
import { EmployeeContext } from '../../context/employeeContext'
import { Form, Button } from 'react-bootstrap'

const AddForm = () => {


    const { addEmployee } = useContext(EmployeeContext);

    const [details, setDetails] = useState({
        name: '', email: '', address: '', phone: ''
    });

    const getDetails = (e) => {

        let allDetails = { ...details }
        allDetails[e.target.name] = e.target.value;
        setDetails(allDetails);
        console.log(allDetails)
    };

    const { name, email, address, phone } = details;

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone);
    }



    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    className='my-2'
                    type="text *"
                    placeholder="Name *"
                    required
                    name='name'
                    onChange={getDetails}
                />
                <Form.Control
                    className='my-2'
                    type="email *"
                    placeholder="Email *"
                    required
                    name='email'
                    onChange={getDetails}
                />
                <Form.Control
                    className='my-2'
                    as='textarea'
                    placeholder="Address"
                    name="address"
                    onChange={getDetails}
                />
                <Form.Control
                    className='my-2'
                    type='text'
                    placeholder="Phone"
                    name="phone"
                    onChange={getDetails}
                />

                <Button
                    variant="success"
                    type="submit"
                    className='w-100'
                >
                    Add New Employee
                </Button>
            </Form.Group>

        </Form>
    )
}

export default AddForm;