import React from 'react'
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg'
import LogoImg from '../../assets/images/logo.svg'
import './styles.css'

interface pageHeaderProps {
  title: string;
}
const PageHeader:React.FC<pageHeaderProps> = (props) => {
    return(
        <header className="page-header">
        <div className="top-bar-container">
          <Link to="/"> 
            <img src={backIcon} alt="botão voltar"/>
          </Link>
          <img src={LogoImg} alt="ProffyLogo"/>
        </div>

        <div className="header-content">
          <strong>{props.title}</strong>

          {props.children}
        </div>

      </header>

    );
}

export default PageHeader;