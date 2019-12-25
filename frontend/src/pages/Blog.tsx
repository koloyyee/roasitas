import React from 'react';
import { IRootState } from '../store';
import { connect } from 'react-redux';
import { INews } from '../redux/news/state';
import {loadNews} from '../redux/news/thunks'
import '../css/Blog.css'

interface props{
    news:INews[],
    loadNews: ()=>void
}

class Posts extends React.Component<props,{}>{
    public componentDidMount(){
        this.props.loadNews()
    }
    public render(){
        return (this.props.news? this.props.news.map((article,i)=>{
            return (
                <div className={'news-article '} key={i}>
                    <h1>{article.headline}</h1>
                    <p>{article.news_content}</p>
                    <img src={article.image} alt={article.headline}/>
                    <p>{article.writer}</p>
                    <small>{article.pub_date}</small>
                </div>
            )
            }) : <p>No News Yet.</p>)
    }
}

const mapStateToProps=(state:IRootState) =>{
    const news = state.allNews.news
    return {news}
}
const mapDispatchToProps={loadNews}
export default connect(mapStateToProps,mapDispatchToProps)(Posts);