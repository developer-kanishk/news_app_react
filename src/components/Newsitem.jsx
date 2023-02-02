

function Newsitem(props) {
    const defaultUrl = 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
    return (    
        <div className="card" style={{width: '18rem',margin:'10px'}}>
            <img src={props.imgurl?props.imgurl:defaultUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.newsurl} className="btn btn-primary">Read more</a>
                </div>
        </div>
    )

}
export default Newsitem;