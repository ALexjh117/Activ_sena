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
                        <li><a href="#home" class="active"> INICIO</a></li>
                        <li><a href="#about"> NOSOTROS</a></li>
                        <li><a href="#services"> SERVICIOS</a></li>
                        <li><a href="#projects"> PROYECTOS</a></li>
                        <li><a href="#contact"> CONTACTO</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}
