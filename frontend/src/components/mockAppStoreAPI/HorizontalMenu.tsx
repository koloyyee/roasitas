import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import InfiniteScroll from 'react-infinite-scroll-component';
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

const Container = styled.div`
  display: flex;
`;

const TopGrossing = styled.div`
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

const HorizontalMenu: React.FC = () => {
  const [topGrossing, setTopGrossing] = useState<IProps[]>([]);
  const [isFetching, setIsFetching] = useState(false)

  useEffect(()=>{
      fetchAppData('top-grossing', topGrossing.length + 10)
  }, [])

  useEffect(()=>{
    if(!isFetching) return;
    fetchAppData('top-grossing', 10)
  }, [isFetching])

  const fetchAppData = async (category: string, amount?: number) => {
    let num = amount ? amount : (amount = 10);
    const url = `https://rss.itunes.apple.com/api/v1/hk/ios-apps/${category}/all/${num}/explicit.json`;
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);

    const topGrossing = await res.json();

    setTopGrossing(topGrossing.feed.results);
    setTopGrossing(prevState => ([...prevState, ...[]]));

    setIsFetching(false)
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollHeight !==
      document.documentElement.offsetHeight
    )
    return;
    console.log('Scrolling')
  };

  

  return (
    <Container>
            {topGrossing.map((app, i) => {
                return (
                <TopGrossing key={i} className="top-grossing-apps">
                    <Image src={app.artworkUrl100} alt="app pic" />
                    <AppName> {app.name}</AppName>
                    <AppCat> {app.genres[0].name}</AppCat>
                </TopGrossing>
                );
            })}
    </Container>
  );
};

export default HorizontalMenu;
