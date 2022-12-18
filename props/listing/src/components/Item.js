import React from 'react';
import classNames from 'classnames';


function Item({ item }) {

  const { url, MainImage, title, currency_code, price, quantity } = item;

  if (!url || !MainImage || !title || !currency_code || !price|| !quantity) {
    return null;
  }

  const currency = () => {
    return currency_code === 'USD' ? '$' + price : currency_code === 'GBR' ? 'GBR' + price : '€' + price
  }

  return (
      <div className="item">
          <div className="item-image">
              <a href={url}>
                  <img src={MainImage.url_570xN} alt={title}/>
              </a>
          </div>
          <div className="item-details">
              <p className="item-title">
                {title && title.length > 50 ? title.substring(0, 50) + '...' : title}
              </p>
              <p className="item-price">
                {currency}
              </p>
              <p className={classNames('item-quantity', {
                                       'level-low' : quantity < 11,
                                       'level-medium': quantity > 10 && quantity < 21, 
                                       'level-high': quantity >= 21})}>
                {quantity} left
              </p>
          </div>
      </div>
  )
}

export default Item;
