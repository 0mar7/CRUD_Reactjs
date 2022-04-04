import React from 'react'
import Notfound from '../../images/notfound.jpg'


const NotFound = () => {
    return (
        <div>
            <img  className=' w-25 mx-auto d-block py-5' src={Notfound} alt="Not Found" />
        </div>
    )
}

export default NotFound
