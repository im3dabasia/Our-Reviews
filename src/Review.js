import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
const [index,setIndex] = useState(0);
const {Id,name,job,image,text} = people[index];
let val = index;


function checkNum(num){
  if (num > people.length -1){
    return 0;
  }else if(num < 0){
    return people.length -1;
  }else{
    return num;
  }
}
function nextPerson(index){
  const nextIndex = index+1;
  return checkNum(nextIndex);
}

function prevPerson(index){
  const prevIndex = index-1;
  return checkNum(prevIndex);
}



return <article className='review'>
  <div className='img-container'>
    <img src={image} alt={name} className='person-img' ></img>
  </div>
  <div className='info'>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p >{text}</p>

  </div>
    <div className='button-container'>
      <button onClick={() => setIndex(prevPerson)}className='prev-btn'>
        <FaChevronLeft/>
      </button>
      <button onClick={() => setIndex(nextPerson)} 
        className='next-btn'>
        <FaChevronRight/>
      </button>

    </div>
    <button className='random-btn' onClick={() => setIndex( Math.floor(Math.random() * 4))}> Surprise me</button>


</article>
};

export default Review;
