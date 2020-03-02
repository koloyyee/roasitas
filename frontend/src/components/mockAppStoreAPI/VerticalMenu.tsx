import React, { useState, useEffect } from 'react';



// top 10 grossing
// https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-grossing/all/10/explicit.json


interface IProps {
    artistName: string;
    id: string;
    releaseDate: string;
    name: string;
    kind: string;
    copyright: string;
    artistId: string;
    artistUrl: string;
    artworkUrl100: string;
    genres: [
        {
            genreId: string;
            name:string;
            url: string
        }
    ]
    url:string;
}


const VerticalMenu:React.FC =()=>{

    const[data , setData ] = useState<IProps[]>([])
    
    const fetchAppData = async (category:string, amount:string)=>{
        const url = `https://rss.itunes.apple.com/api/v1/hk/ios-apps/${category}/all/${amount}/explicit.json`
        const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);

        const data = await res.json()
        console.log(data)
        setData(data.feed.results)   
    
    }

    useEffect(()=>{
        fetchAppData('top-free', '10')
    }, [])
    

    return(
       
        <div>
            {data.map((app, i)=>{
                return (
                    <div key={i}>
                        <img src={app.artworkUrl100} alt='app pic'/>
                        <p> {app.name}</p>
                        <p> {app.genres[0].name}</p>
                    </div>
                )

            })}

        </div>
    )
}

export default VerticalMenu