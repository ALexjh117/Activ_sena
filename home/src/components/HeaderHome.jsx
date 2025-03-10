import React from 'react'
import "../styles/home.css"
import "../styles/HeaderHome.css"

export default function HeaderHome() {
  return (
    <header class="site-header">
        <div class="container">
            <div class="header-wrapper">
                <div class="logo">
                    <a href="index.html">
                        <span class="logo-waso">Activ</span>
                        <span class="logo-strategy">Sena</span>
                    </a>
                </div>
                
                <nav class="main-nav">
                    <button class="menu-toggle" id="menuToggle" aria-expanded="false">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                    <ul class="nav-menu" id="navMenu">
                        <li><a href="#home" class="active"><span class="nav-number">01</span> INICIO</a></li>
                        <li><a href="#about"><span class="nav-number">02</span> NOSOTROS</a></li>
                        <li><a href="#services"><span class="nav-number">03</span> SERVICIOS</a></li>
                        <li><a href="#projects"><span class="nav-number">04</span> PROYECTOS</a></li>
                        <li><a href="#contact"><span class="nav-number">05</span> CONTACTO</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}
