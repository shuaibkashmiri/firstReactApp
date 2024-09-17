import React, { useEffect } from 'react'

const News = () => {
    const url="https://newsapi.org/v2/top-headlines?country=us&apiKey=40dd280d53a149f48c7c4f88adaf28ec";

    const urlTwo="https://newsapi.org/v2/everything?q=football&apiKey=40dd280d53a149f48c7c4f88adaf28ec"

    const getNews=async()=>{
        const newsdata=await fetch(urlTwo,{method:"GET"})
        const newsDataArr=await newsdata.json();
        console.log(newsDataArr.articles);
    }

    useEffect(()=>{
        getNews();
    } ,[])
  return (
    <div>News</div>
  )
}

export default News