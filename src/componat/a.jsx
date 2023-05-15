import React from 'react'
import './about.css';
import MainBackImg from './image/a.jpg';
function About() {
  return (
    <body>
      <div className='Home-main'>
        {/* <Topnav></Topnav> */}
        <div className="my-info-container">
          <div className="about">
            <h1>
              About Me
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Magni porro fugiat unde et repellendus,
              harum nam! Quia, vel fugiat laudantium ullam nisi minima blanditiis,
              odio ex laborum mollitia atque inventore.
            </p>
          </div>
          <div className="mypic">
            <img src={MainBackImg} className="pic-my" ></img>
          </div>
        </div>
        {/* <img src="{MainBackImg}></img> */}
      </div>
    </body>
  )
}

export default About