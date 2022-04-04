import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([
        { id: uuidv4(), name: 'Ali', email: 'Ali@mail.com', address: '89 Cairo Egypt', phone: '(0101010100110)' },
        { id: uuidv4(), name: 'Yousef', email: 'Yousef@mail.com', address: '89 Berlin Germany', phone: '(0101010100110)' },
        { id: uuidv4(), name: 'Mo salah', email: 'Mosalah@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(0101010100110)' },
        { id: uuidv4(), name: 'Abdo', email: 'Abdo@mail.com', address: '89 Tornto, CA', phone: '(0101010100110)' },
        { id: uuidv4(), name: 'Hamza', email: 'Hamza@mail.com', address: '89 Sau Paola, Brazil', phone: '(0101010100110)' }
    ]);

    useEffect(()=>{
        setEmployees(JSON.parse(localStorage.getItem('employess')))
    },[]);

    useEffect(() => {
        localStorage.setItem('employess', JSON.stringify(employees))
    });


    //Add Employee
    const addEmployee = (name, email, address, phone) => {

        setEmployees([...employees, { id: uuidv4(), name, email, address, phone }])
    };

    //Delete Employee
    const deleteEmployee = (id) => {
        setEmployees(employees.filter((employee) => employee.id !== id))
    };

    //Update Employee
    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee : employee))
    };

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, deleteEmployee, updateEmployee }}>
            {props.children}
        </EmployeeContext.Provider>
    )

};

export default EmployeeContextProvider;