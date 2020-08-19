import React from 'react'
import WhatsappImg from '../../assets/images/icons/whatsapp.svg'
import './style.css'

function TeacherItem(){
    return(
        <article className="teacher-item">

        <header>
          <img src="https://avatars1.githubusercontent.com/u/37737495?s=460&u=6ab2f1760ba00517fac0f4c722e3a60100aaf24c&v=4" alt=""/>
          <div>
            <strong>Caio César</strong>
            <span>Informatica</span>
          </div>
        </header>

        <p>Apaixonado por informatica avançada, ele vai explodir sua cabeça com tecnicas e conhecimentos alem da natureza</p>

        <footer>
          <p>
            Preço/Hora
            <strong>R$80,00</strong>
          </p>
          <button type="button">
            <img src={WhatsappImg} alt=""/>
            Entrar em contato
          </button>
        </footer>
      </article>
    )
}

export default TeacherItem;