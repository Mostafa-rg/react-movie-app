import React from 'react';

//Styles
import './page-header.scss'

//Assets
import bg from '../../assets/footer-bg.jpg'

const PageHeader = props => {
    return (
        <div className='page-header' style={{backgroundImage: `url(${bg})`}}>
            <h2>{props.children}</h2>
        </div>
    );
};

export default PageHeader;