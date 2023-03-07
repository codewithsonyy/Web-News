
# NewsMonkey |

It is News Web App made using React.js Library and Tailwind. This application provides you to watch the Real-world news with a varieties of news categories.








## Features

- Router for categories
- infinite Scroll
- responsive
- Cross platform
- Spinner
- great use of props    



## Infinite Scroll logic



```javascript
 <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >
```
```javascript
const fetchMoreData =async () => {
  
  
   const url =
      `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
   
  }

```
    
    

![App Screenshot](https://i.ibb.co/ssDbxhp/Screenshot-99.png   )

In association with youtuber- codewithharry 

