import React, { useContext, useState, useEffect } from 'react'
import { EmployeeContext } from '../../context/employeeContext';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { Modal, Button } from 'react-bootstrap';
import EditForm from './../EditForm/EditForm';


const Employee = ({ employee }) => {


    const { deleteEmployee } = useContext(EmployeeContext);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose();
    }, [employee])


    return (

        <>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <button onClick={handleShow} className='btn text-success' data-toggle="modal"><FaEdit data-toggle="tooltip" title="Edit" /></button>
                <button onClick={() => deleteEmployee(employee.id)} className='btn text-danger' data-toggle="modal"><AiFillDelete data-toggle="tooltip" title="Delete" /></button>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-dark'>Edit Employee</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditForm theEmployee={employee} />
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">Close Button</Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Employee;