import React from 'react'

export default function Serve({icon,heading,para}) {
  return (
    <div>
   
    
    
       <article class="service">
              <span class="service-icon"><i class={icon}></i></span>
              <div class="service-info">
                <h4 class="service-title">{heading}</h4>
                <p class="service-text">
                 {para}
                </p>
              </div>
            </article>
        
      </div>
    )
  }
      
   
