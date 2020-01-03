import React, { useEffect } from 'react'
import { loadSingleNews } from '../redux/news/thunks'
import { INewsState } from '../redux/news/state'
import { IRootState } from '../store'
import { connect } from 'react-redux'


interface props extends INewsState{
    id:number
    loadSingleNews:(id:number)=>void
}


const Story:React.FC<props> = ({news, id}) => {
    useEffect(()=>{loadSingleNews(id)})
    return( 
        <React.Fragment>
            {news.map((story, i) =>
                <div key={i}> 
                <h1>{ story.headline }</h1>
                <img src= {story.image} alt={story.headline}/>
                <p> {story.news_content} </p>
                <small>{story.pub_date}</small>
            </div>)}
            </React.Fragment>
    )
}
const mapStateToProps =(state: IRootState)=>{
    return {news: state.allNews.news}
}
const mapDispatchToProps= {loadSingleNews}

export default connect(mapStateToProps,mapDispatchToProps)(Story)