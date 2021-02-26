import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';

const HomeContent = () => {
    const [articles, updateArticles] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const api = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=940c56bd75da495592edd812cce82149'
        fetch(api)
            .then(res => res.json())
            .then(data => {
                updateArticles(data.articles)
                setLoading(false)
            })
    }, [])
    return (
        <Container>
            {  loading ?
                <p> Loading ...</p> :
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    {
                        articles.map(news => <NewsCard news={news}></NewsCard>)
                    }
                </div>
            }
        </Container>
    );
};

export default HomeContent;