import React from 'react'
import '../styles/portfolio.css'
import qscript from '../assets/qscript.jpg'
import auth from '../assets/auth.png'
import monkey from '../assets/monkey.png'
import tictactoe from '../assets/tictactoe.png'
import weather from '../assets/weather.png'
import news from '../assets/news.jpg'
import { BrowserRouter, Link } from 'react-router-dom'
//import todo from '../assets/todo.png'

const Portfolio = () => {
  return (
    <>
        <section id="portfolio">
            <h2 className="portTitle">Portfolio</h2>
            <div className="portImgs">
              <BrowserRouter>
                <Link to="https://qscript-coffee.surge.sh/" target='_blank'>
                  <img src={qscript} alt="qscript" className="portImg" />
                  <p>QScript Coffee</p>
                </Link>
                <Link to="https://github.com/Rupam3220/Authentication_project_Backend_Express" target='_blank'>
                  <img src={auth} alt="auth" className="portImg" />
                  <p>Authentication Backend</p>
                </Link>
                <Link to="https://github.com/Rupam3220/MusicMonkey_expressJS" target='_blank'>
                  <img src={monkey} alt="monkey" className="portImg" />
                  <p>Monkey Music</p>
                </Link>
                <Link to="https://rctictac.surge.sh/" target='_blank'>
                  <img src={tictactoe} alt="tictactoe" className="portImg" />
                  <p>Tic Tac Toe</p>
                </Link>
                <Link to="https://weatherapp-rupam.surge.sh/" target='_blank'>
                  <img src={weather} alt="weather" className="portImg" />
                  <p>Weather App</p>
                </Link>
                <Link to="https://headline-rupam.surge.sh/" target='_blank'>
                  <img src={news} alt="news" className="portImg" />
                  <p>Headlines - News App</p>
                </Link>
              </BrowserRouter>    
            </div>
            <button className="portBtn">Show More</button>
        </section>
    </>
  )
}

export default Portfolio