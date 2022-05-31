import React from 'react'
import Navbar from './Navbar'

function Error() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <h3 className='text-center'>Path is not valid</h3>
        </>
    )
}

export default Error