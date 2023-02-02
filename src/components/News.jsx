import Newsitem from "./Newsitem";
import { useState } from "react";
import { useEffect } from "react";
import Spinner  from "./Spinner";


function News(props) {

    const [articles, setArticles] = useState([]);
    const [pageNumber,setPageNumber] = useState(1);
    const [pageTotal,setTotal] = useState(0);
    const [loading,setLoading] = useState(true);


    //use effect runs after every render
    //to stop infinite running of useeffect pass an empty array as 
    //dependency

    useEffect(() => {
        setLoading(true);
        async function getNews() {
            const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=656278b86a064dbaacefd3e1818e54a3&pagesize=${props.pagesize}&page=${pageNumber}&category=${props.category}`;
            const res = await fetch(url);
            const parsedData = await res.json();
            setLoading(false);
            setTotal( parsedData.totalResults);
            setArticles(parsedData.articles)
        }
        getNews()
    }, [props.pagesize,pageNumber,props.category])

    const handlePrevious = async()=>{
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=656278b86a064dbaacefd3e1818e54a3&pagesize=${props.pagesize}&page=${pageNumber-1}`;
        const res = await fetch(url);
        const parsedData = await res.json();
        setLoading(false);
        console.log(parsedData);
        setPageNumber(pageNumber-1);
        setTotal( parsedData.totalResults);
        setArticles(parsedData.articles)
    }

    const handleNext = async()=>{
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=656278b86a064dbaacefd3e1818e54a3&pagesize=${props.pagesize}&page=${pageNumber+1}`;
        const res = await fetch(url);
        const parsedData = await res.json();
        setLoading(false);
        console.log(parsedData);
        setPageNumber(pageNumber+1);
        setTotal( parsedData.totalResults);
        setArticles(parsedData.articles)
    }


    return (
        <div className="container">
            { loading && <Spinner/>}
            <div className="d-flex flex-wrap">
                {
                    !loading && articles.map((article) => {
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