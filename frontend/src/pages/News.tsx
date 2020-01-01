import React from 'react';
import Story from '../components/Story';

interface props{
    id:number
}


const News:React.FC<props>=({id}) =>{
    return <Story id={id} />
}

export default News