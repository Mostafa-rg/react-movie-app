import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

//Api
import apiConfig from '../../Services/apiConfig';
import tmdbApi from '../../Services/tmdbApi';


const CastList = props => {

    const { category } = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const result = await tmdbApi.credits(category, props.id);
            setCasts(result.cast.slice(0, 5));
        };
        getCredits();
    }, [category, props.id]);

    return (
        <div className='casts'>
            {
                casts.map((item, index) => (
                    <div key={index} className='casts__item'>
                        <div className='casts__item__img' style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                        <p className='casts__item__name'>{item.name}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default CastList;