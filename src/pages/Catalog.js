import React from 'react';

import { useParams } from 'react-router-dom';

//Components
import PageHeader from '../components/page-header/PageHeader';


//Api
import { category as cate} from '../Services/tmdbApi'

const Catalog = () => {

    const { category } = useParams();

    console.log(category)
    return (
        <>
            <PageHeader>
                {category === cate.movie ? 'Movies' : 'Tv Series'}
            </PageHeader>
        </>
    );
};

export default Catalog;