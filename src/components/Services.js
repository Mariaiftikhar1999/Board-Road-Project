import React from 'react'
import {service } from  "../data"
import Serve from './Serve'
export default function Services() {
  return (
    <div>
       <section class="section services" id="services">
        <div class="section-title">
          <h2>our <span>services</span></h2>
        </div>
        <div class="section-center services-center">
        {service.map((service)=>{
          return <Serve {...service} key={service.id} />
        
        })}
        </div>
      </section>
     
      
    </div>
  )
}
