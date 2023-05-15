import React from 'react'
import './home.css';
import MainBackImg from './img/a.jpg';
import Topnav from './Topnav';


export const Home = () => {
  return (
    <div className='home-main'>
    {/* <Topnazv></Topnazv> */}
    <div className="my-info-container">
      <div className="about">
        <h1>
          About Me
        </h1>
        <p className='lorem'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni porro fugiat unde et repellendus,
           harum nam! Quia, vel fugiat laudantium ullam nisi minima blanditiis, odio ex laborum mollitia atque inventore.
        </p>
      </div>
      <div className="mypic">
        <img src={MainBackImg} className="pic-my"></img>
      </div>
    </div>
    {/* <img src="{MainBackImg}></img> */}
    </div>
  );
}
export default Home;