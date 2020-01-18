import React, { useEffect } from 'react'
import { loadSingleNews } from '../redux/news/thunks'
import { INewsState } from '../redux/news/state'
import { IRootState } from '../store'
import { connect } from 'react-redux'
import { match, withRouter, useHistory } from 'react-router-dom'
import '../css/Story.css'
import parse from 'html-react-parser'
import {Container, Button} from '@material-ui/core'

interface props extends INewsState{
    match: match<{slug:string}>
    loadSingleNews:(slug:string)=>void
}


const Story:React.FC<props> = ({news,match}) => {
    
    let history = useHistory()
    const goBack=()=>{
        history.push('/news')
    }


    useEffect(()=>{loadSingleNews(match.params.slug)})
    return( 
        <Container maxWidth='md' >
             {news.map((story, i) =>
            <div key={i}> 
            <h1>{ story.headline }</h1>
            <img className='story_img' src= {story.image} alt={story.headline}/>
            <p> {parse(story.news_content)} </p>
            <small>{story.pub_date}</small>
            <br/>
            <Button variant="contained" color="primary" onClick ={goBack}>Back</Button>
        </div>)}
    </Container>
           
    )
}
const mapStateToProps =(state: IRootState)=>{
    return {news: state.allNews.news}
}
const mapDispatchToProps= {loadSingleNews}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Story))