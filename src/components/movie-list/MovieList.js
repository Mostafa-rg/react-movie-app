import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Styles
import './movie-list.scss';

//Swiper
import {Swiper, SwiperSlide } from 'swiper/react'

//Components
import Button from '../button/Button';
import MovieCard from '../movie-card/MovieCard';

//Api
import apiConfig from '../../Services/apiConfig';
import tmdbApi, { category } from '../../Services/tmdbApi';

const MovieList = props => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if(props.type !== 'similar'){
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                
                    default:
                        response = await tmdbApi.getTvList(props.type, {params});
                }
            }else{
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results)

        };
        getList();
    }, [])

    return (
        <div className='movie-list'>
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default MovieList;