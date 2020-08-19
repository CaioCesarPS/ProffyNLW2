import React from 'react';
import {Link} from 'react-router-dom'
import LogoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'

function Laging(){
  return (
    <div id="page-landing">

      <div id="page-landing-content" className="container">

        <div className="logo-container">

          <img src={LogoImg} alt="ProffyLogo"/>
          <h2>Sua plataforma de estudos Online</h2>

        </div>

        <img 
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt=""/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt=""/>
            Dar aulas
          </Link>

        </div>

        <span className="total-connections">
          total de conexões feitas <img src={purpleHeartIcon} alt="coração roxo"/>
        </span>

      </div>
    </div>
    );
}

export default Laging;