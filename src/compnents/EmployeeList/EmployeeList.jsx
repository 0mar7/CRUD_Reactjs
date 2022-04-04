import React, { useContext, useState, useEffect } from 'react'
import { EmployeeContext } from '../../context/employeeContext';
import { AiFillPlusCircle } from 'react-icons/ai';
import Employee from '../Employee/Employee';
import { Modal, Button } from 'react-bootstrap';
import AddForm from './../AddForm/AddForm';
import style from './EmployeeList.module.css'



const EmployeeList = () => {

    const { employees } = useContext(EmployeeContext);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose();
    }, [employees])


    return (
        <>

            <div className={`container bg-gradient my-4 p-2 d-flex justify-content-between align-items-center  ${style.header}`}>
                <h3 className='mx-4'>Manage Users</h3>
                <Button onClick={handleShow} className="btn btn-primary mx-4" data-toggle="modal"><AiFillPlusCircle className='mx-1 fs-5' /><span>Add New User</span></Button>
            </div>
            
            <div className='table-responsive'> 
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            employees.map((employee, index) =>
                                <tr key={index}>
                                    <Employee employee={employee} />
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-dark'>Add Employee</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <AddForm />
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">Close Button</Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EmployeeList;