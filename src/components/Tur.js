import React from 'react'

function Tur(props) {
    const {image,date,head4,par,ico,day,price}=props;
  return (
    <div>
      <article class="tour-card">
            <div class="tour-img-container">
              <img src={image} class="tour-img" alt="" />
              <p class="tour-date">{date}</p>
            </div>
            <div class="tour-info">
              <div class="tour-title">
                <h4>{head4}</h4>
              </div>
              <p>
                {par}
              </p>
              <div class="tour-footer">
                <p>
                  <span><i class={ico}></i></span> china
                </p>
                <p>{day}</p>
                <p>{price}</p>
              </div>
            </div>
          </article>
    </div>
  )
}

export default Tur
