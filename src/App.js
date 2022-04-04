import React, { useState, useEffect } from 'react'
import Navbar from './compnents/Navbar/Navbar';
import Home from './compnents/Home/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Register from './compnents/Register/Register';
import Login from './compnents/Login/Login';
import Logout from './compnents/Logout/Logout';
import EmployeeList from './compnents/EmployeeList/EmployeeList';
import NotFound from './compnents/NotFound/NotFound';
import jwtDecode from 'jwt-decode';
import PrivateRoute from './compnents/PrivateRoute/PrivateRoute';
import EmployeeContextProvider from './context/employeeContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './compnents/Footer/Footer';




const App = () => {

  let navigate = useNavigate();

  let [loginData, setLoginData] = useState(null)

  function getUserData() {
    let encodedToken = localStorage.getItem('userToken');
    let userData = jwtDecode(encodedToken);
    setLoginData(userData);
  };

  function logOut() {
    localStorage.removeItem('userToken');
    setLoginData(null);
    navigate('/login');
    toast.warning("Bis Bald")
  };



  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      getUserData();
    }
  }, []);


  return (
    <div>
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <Navbar loginData={loginData} logOut={logOut} />

      <div className='container'>
        <EmployeeContextProvider>

          <Routes>
            <Route exact path='/' element={<PrivateRoute />}>
              <Route path='/home' element={<Home loginData={loginData} />} />
              <Route path='/EmployeeList' element={<EmployeeList />} />
            </Route>


            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login getUserData={getUserData} />} />
            <Route path='/logout' element={<Logout />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </EmployeeContextProvider>
      </div>

      <Footer />
    </div>
  )
}

export default App;
