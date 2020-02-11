import React from 'react';
import { IRootState } from '../store';
import { connect} from 'react-redux';
import { INews } from '../redux/news/state';
import {loadNews} from '../redux/news/thunks'
import '../css/Posts.css'
import { Paper, Grid, Button, Container } from '@material-ui/core';
import {withRouter, Link } from 'react-router-dom';


interface props{
    news:INews[],
    loadNews: ()=>void
}


class Posts extends React.Component<props,{}>{
  
    public componentDidMount(){
        this.props.loadNews()
    }

    public render(){
        
        return (
            <Container maxWidth='lg'>
                <Grid className = "blog_section" container direction="row"
                justify="center"
                spacing={3}>
                        {this.props.news? this.props.news.map((story,i)=>{
                return (
                    <Grid container item lg={4} key={i}  >
                            <Paper elevation={3}>
                                <div className={'news_article'} id="news">
                                    <h1>{story.headline}</h1>
                                    <img className="blog_img" src={story.image} alt={story.headline}/>
                                    <br/>
                                    <small>{story.pub_date}</small>
                                    <br/>
                                    
                                    <Button variant="contained" color="secondary" >
                                        <Link className="find_out_more" to ={`/news/${story.slug}`} >Fine Out More</Link>
                                    </Button>
                                </div> 
                            </Paper>
                        </Grid>

                )}) : <p>No News Yet.</p>
                }
                </Grid>
                
            </Container>
        )
    }
}


const mapStateToProps=(state:IRootState) =>{
    const news = state.allNews.news
    return {news}
}
const mapDispatchToProps={loadNews}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Posts));