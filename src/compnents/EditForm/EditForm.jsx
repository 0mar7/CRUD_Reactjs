import React, { useContext, useState } from 'react'
import { EmployeeContext } from '../../context/employeeContext'
import { Form, Button } from 'react-bootstrap'

const EditForm = ({ theEmployee }) => {

    const id = theEmployee.id;

    const { updateEmployee } = useContext(EmployeeContext);

    const [name, setName] = useState(theEmployee.name);
    const [email, setEmail] = useState(theEmployee.email);
    const [address, setAddress] = useState(theEmployee.address);
    const [phone, setPhone] = useState(theEmployee.phone);

    const updatedEmployee = { id, name, email, address, phone };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Form.Control
                    className='my-2'
                    type="email *"
                    placeholder="Email *"
                    required
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control
                    className='my-2'
                    as='textarea'
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <Form.Control
                    className='my-2'
                    type='text'
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <Button
                    variant="success"
                    type="submit" block
                    className='w-100' >
                    Edit Employee
                </Button>
            </Form.Group>

        </Form>
    )
}

export default EditForm;