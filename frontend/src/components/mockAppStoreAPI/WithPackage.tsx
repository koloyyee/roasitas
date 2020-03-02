import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InfiniteScroll from 'react-infinite-scroll-component';
import loading from "../../static/Spinner-1s-200px.svg";

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
      name: string;
      url: string;
    }
  ];
  url: string;
}


const TopGrossing = styled.div`
  flex-direction:row;
  margin: 1em;
  padding: 1em;
  
`;
const Image = styled.img`
  max-width: 80px;
  max-height: 80px;
  border-radius: 20px;
`;

const AppName = styled.p`
  font-size: 10px;
  font-weight: 400;
`;
const AppCat = styled.p`
  font-size: 5px;
  font-weight: 400;
  color: lightgrey;
`;

const WPHorizontalMenu: React.FC = () => {
  const [topGrossing, setTopGrossing] = useState<IProps[]>([]);
  const[fetchAmount, setFetchAmount] = useState(0)

  const fetchAppData = async (category: string, amount?: number) => {
    let num = amount ? amount : (amount = 10);
    const url = `https://rss.itunes.apple.com/api/v1/hk/ios-apps/${category}/all/${num}/explicit.json`;
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);

    const topGrossing = await res.json();

    setTopGrossing(topGrossing.feed.results);
    setFetchAmount(topGrossing.feed.results.length)
  };

  const fetchMoreData = () =>{
      if (fetchAmount <= 100 ){
        fetchAppData('top-grossing', fetchAmount +10 )
        console.log(fetchAmount)
      } else {
        
        console.log('Fetch 100 already!')
        return;
      }
  }

  useEffect((()=>{
      fetchAppData('top-grossing' )
  }),[])

  return (
        <InfiniteScroll
            dataLength = {topGrossing.length}
            next = {fetchMoreData}
            hasMore ={fetchAmount < 101? true : false}
            loader ={<img src={loading} alt='loading' />}
            initialScrollY={topGrossing.length}
            style = {{
              display: 'flex',
              overflowX: 'scroll',
              overflowY: 'hidden',
            }}
        >
            {topGrossing.map((app, i) => {
                return (
                <TopGrossing key={i} className="top-grossing-apps">
                    <Image src={app.artworkUrl100} alt="app pic" />
                    <AppName> {app.name}</AppName>
                    <AppCat> {app.genres[0].name}</AppCat>
                </TopGrossing>
                );
            })}
        </InfiniteScroll>
  );
};

export default WPHorizontalMenu;
