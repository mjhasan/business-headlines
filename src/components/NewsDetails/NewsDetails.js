import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';

const NewsDetails = () => {
    const { newsTitle } = useParams()

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

    const news = articles.find(article => article.publishedAt === newsTitle)
    console.log(news);

    return (
        <div>
            {
                loading ? <p>Loading...</p> :
                    <Container>
                        <h3>{news.title}</h3>
                        <img style={{width: '50%'}} src={news.urlToImage} alt={news.title}/>
                        <p><small>Last Update : {news.publishedAt}</small></p>
                        <div>
                            {news.content}
                            {news.description}
                        </div>
                    </Container>
            }
        </div>
    );
};

export default NewsDetails;