import React from 'react';
import Navbar from './navbar.jsx'
import { func } from 'prop-types';
import Contact from '../views/contact.jsx'


function Home(props) {
    return (
        <>
            <Navbar />
            <Contact />
        </>
    )
}
export default Home;