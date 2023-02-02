import Newsitem from "./Newsitem";
import { useState } from "react";
import { useEffect } from "react";


function News(props) {

    const [articles, setArticles] = useState([]);
    const [pageNumber,setPageNumber] = useState(1);
    const [pageTotal,setTotal] = useState(0);
    


    //use effect runs after every render
    //to stop infinite running of useeffect pass an empty array as 
    //dependency

    useEffect(() => {
        async function getNews() {
            const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=93effb41f6634699a07d37b2f04501ea&pagesize=${props.pagesize}&page=${pageNumber}&category=${props.category}`;
            const res = await fetch(url);
            const parsedData = await res.json();
            setTotal( parsedData.totalResults);
            setArticles(parsedData.articles)
        }
        getNews()
    }, [props.pagesize,pageNumber])

    const handlePrevious = async()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=93effb41f6634699a07d37b2f04501ea&pagesize=${props.pagesize}&page=${pageNumber-1}`;
        const res = await fetch(url);
        const parsedData = await res.json();
        console.log(parsedData);
        setPageNumber(pageNumber-1);
        setTotal( parsedData.totalResults);
        setArticles(parsedData.articles)
    }

    const handleNext = async()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=93effb41f6634699a07d37b2f04501ea&pagesize=${props.pagesize}&page=${pageNumber+1}`;
        const res = await fetch(url);
        const parsedData = await res.json();
        console.log(parsedData);
        setPageNumber(pageNumber+1);
        setTotal( parsedData.totalResults);
        setArticles(parsedData.articles)
    }


    return (
        <div className="container">
            
            <div className="d-flex flex-wrap">
                {
                    articles.map((article) => {
                        return <Newsitem title={article.title} imgurl={article.urlToImage}
                            description={article.description} newsurl={article.url}
                            key = {article.url}
                        />
                    })
                }
            </div>
            <div  className="d-flex justify-content-between" style={{marginBottom:'100px'}}>
                <button type="button" className="btn btn-primary" style={{marginLeft:'20px'}} disabled={pageNumber===1} onClick={handlePrevious}>Previous</button>
                <button type="button" className="btn btn-primary" style={{marginRight:'20px'}} disabled={pageNumber===(Math.ceil(pageTotal/props.pagesize))} onClick={handleNext}>Next</button>   
            </div>
        </div>
    )

}

export default News;