import React from 'react';
import './Card.scss';
const Card = () => {
  return (
    <section className="card">
      <aside className="card_image">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/1a/34/26/e0/hotel-lobby.jpg"
          alt="Loby"
        />
      </aside>

      <aside className="card_content">
        <article className="title">
          <h3 className="name">miami international airport hotel</h3>
          <p className="location">miami</p>
        </article>

        <article className="info">
          <article className="details">
            <p className="refund">Totalmente reembolsable</p>
            <p className="seals">
              <span class="material-symbols-outlined">clear_night</span>
              Acumula sellos
            </p>
            <p className="opinions">
              <span>6,8/10</span>(3.452 ipiniones)
            </p>
          </article>

          <article className="price">
            <p className="tag">
              <span class="material-symbols-outlined">sell</span>
              Precio secreto disponible
            </p>
            
            <h3 className='price_day'>COP 916.118</h3>
            <span className='price_total'>COP 2.070.427 en total</span>
          </article>
        </article>
      </aside>
    </section>
  );
};

export default Card;
