import React from 'react'

const Home = ({loginData}) => {

    
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
          
          <h1> {loginData ? <span className='h1_span'>Willkommen: {loginData.first_name + " " + loginData.last_name}</span> : ""}</h1>
        </div>
    )
}

export default Home;