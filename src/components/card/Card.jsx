import React from 'react';
import './Card.scss';
const Card = ({ hotel, hotelDays }) => {
  const name = hotel.name;
  const image = hotel.optimizedThumbUrls.srpDesktop;
  const locality = hotel.address.locality;
  const rating = hotel.guestReviews.rating;
  const totalReviews = hotel.guestReviews.total;
  const exactCurrent = hotel.ratePlan.price.exactCurrent;

  const dayPrice = new Intl.NumberFormat('en-Us', {style: 'currency',currency: 'COP',})
  .format(parseInt(exactCurrent * 4438.51));

  const totalPrice = new Intl.NumberFormat('en-Us', {style: 'currency',currency: 'COP',})
  .format(parseInt(exactCurrent * 4438.51)*hotelDays);

  return (
    <section className="card">
      <aside className="card_image">
        <img src={`${image}`} alt={`${name}`} />
      </aside>

      <aside className="card_content">
        <article className="title">
          <h3 className="name">{name}</h3>
          <p className="location">{locality}</p>
        </article>

        <article className="info">
          <article className="details">
            <p className="refund">Totalmente reembolsable</p>
            <p className="seals">
              <span className="material-symbols-outlined">clear_night</span>
              Acumula sellos
            </p>
            <p className="opinions">
              <span>{rating}/10</span>({totalReviews} opiniones)
            </p>
          </article>

          <article className="price">
            <p className="tag">
              <span className="material-symbols-outlined">sell</span>
              Precio secreto disponible
            </p>

            <h3 className="price_day">{dayPrice}</h3>
            <span className="price_total">{totalPrice} en total</span>
          </article>
        </article>
      </aside>
    </section>
  );
};

export default Card;
