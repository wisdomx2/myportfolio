import React from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import Footer from '../../components/common/Footer/Footer';
import Hello from '../../components/Hello/Hello';


function HelloPage() {
    return (
        <div>
            <NavBar />
            <Hello />
            <Footer />
        </div>

    )
}

export default HelloPage;