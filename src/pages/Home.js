import React from 'react';
import { Link } from 'react-router-dom'

//Component
import HeroSlide from '../components/hero-slide/HeroSlide';
import { OutlineButton } from '../components/button/Button';
import MovieList from '../components/movie-list/MovieList';

//Api
import { category, movieType, tvType } from '../Services/tmdbApi';

const Home = () => {
    return (
        <>
            <HeroSlide/>
            <div className='container'>
                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Trending Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className='small'>View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Top Rated Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className='small'>View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Trending Tv</h2>
                        <Link to='/tv'>
                            <OutlineButton className='small'>View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Top Rated Tv</h2>
                        <Link to='/tv'>
                            <OutlineButton className='small'>View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        
        </>
    );
};

export default Home;