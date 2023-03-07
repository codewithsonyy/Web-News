import React, { useEffect,useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=>{
const[articles,setArticles]=useState([])
const[loading,setLoading]=useState(true)
const[page,setPage]=useState(1)
const[totalResults,setTotalResults]=useState(0)

const capitalizeFirstLetter =(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
}

 
const updateNews=async()=>{
  const url =
      `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
     setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false)
}   
useEffect(()=>{
  document.title=`${capitalizeFirstLetter(props.category)}-NewsMonkey`;
 updateNews();
 // eslint-disable-next-line
},[])
  




  const fetchMoreData =async () => {
  
  
   const url =
      `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
   
  }

  
    return (
      <div className="w-screen  my-4 ">
        <h1 className="sm:text-3xl text:2xl mx-4 mt-24 text-center font-bold ">
          NewsMonkey - Top {capitalizeFirstLetter(props.category)}  Headlines
        </h1>
{/* {loading && <Spinner />} */}
<InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >



        <div className=" m-4 flex flex-col gap-3 mt-10 sm:grid sm:grid-cols-2  sm:justify-items-stretch  sm:place-items-stretch lg:grid lg:grid-cols-3 ">
          {articles.map((element) => {
            return (
              <div key={element.url}>
                <NewsItem
                  className="sm:justify-self-stretch"
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />{" "}
              </div>
              
            );
          })}
        </div>
        </InfiniteScroll>

       
      </div>
    );
  
}

News.defaultProps = {
  countery:'us',
  pageSize: 6,
  category: 'general',
}
News.propTypes ={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News



