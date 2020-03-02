import React, { useEffect } from 'react'
import { loadSingleNews } from '../../redux/news/thunks'
import { INewsState } from '../../redux/news/state'
import { IRootState } from '../../store'
import { connect } from 'react-redux'
import { match, withRouter, useHistory } from 'react-router-dom'
import './Story.css'
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

    const slug =  match.params.slug
    useEffect(()=>{loadSingleNews(slug)})
    const singleNews = news.find(news => news.slug === slug)
    
    return( 
        <Container maxWidth='md' >
            {singleNews? 
           <div> 
           <h1>{ singleNews.headline }</h1>
           <img className='singleNews_img' src= {singleNews.image} alt={singleNews.headline}/>
           <p> {parse(singleNews.news_content)} </p>
           <small>{singleNews.pub_date}</small>
           <br/>
           <Button variant="contained" color="primary" onClick ={goBack}>Back</Button>
       </div>
        :
        <div>
            <p> No Such News</p>
        </div>
        }
            
    </Container>
           
    )
}
const mapStateToProps =(state: IRootState)=>{
    return {news: state.allNews.news}
}
const mapDispatchToProps= {loadSingleNews}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Story))