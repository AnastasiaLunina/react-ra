import React from 'react';

function Item({ item }) {

  const { url, MainImage, title, currency_code, price, quantity } = item;
  let level;

  if (!url || !MainImage || !title || !currency_code || !price|| !quantity) {
    return null;
  }

  if(quantity < 11) {
    level = 'item-quantity level-low'
  } else if (quantity > 10 && quantity < 21) {
    level = 'item-quantity level-medium'
  } else {
    level = 'item-quantity level-high'
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
                {currency_code === 'USD' ? '$' + price : currency_code === 'GBR' ? 'GBR' + price : '€' + price }
              </p>
              <p className={level}>{quantity} left</p>
          </div>
      </div>
  )
}

export default Item;
