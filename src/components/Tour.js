import React from 'react'
import {tour} from "../data";
import Tur from './Tur';




export default function Tour() {
  return (
    <div>
      <section class="section" id="tours">
        <div class="section-title">
          <h2>featured <span>tours</span></h2>
        </div>

        <div class="section-center featured-center">
        {tour.map((tur)=>{
          return <Tur {...tur} key={tur.id}/>
        })}

        
        
        </div>
      </section>
      
    </div>
  )
}
