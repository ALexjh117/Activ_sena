import React from 'react'
import "../src/index.css"
import "./styles/ServiceCardComponent.css"

export default function ServiceCardComponent({title, description}) {
  return (
    <div className="service-card">
        <div className="service-icon">
            <i className="icon-check"></i>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="service-link">Saber Más <i className="icon-arrow-right-long"></i></a>
    </div>
  )
}
