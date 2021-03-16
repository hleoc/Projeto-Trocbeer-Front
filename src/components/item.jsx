import { useState } from 'react';

const useInput = (initial = 0, product, setCart) => {
  const [state, setState] = useState(initial);
  const max = product.quantity;
  const addOne = () => {
    if (state < max) {
      setState(state + 1);
      return setCart((cart) => ({
        ...cart,
        [product.name]: cart[product.name] ? cart[product.name] + 1 : 1,
      }));
    }
    alert('Atingiu o limite máximo do estoque');
  };
  const removeOne = () => {
    if (state > 0) {
      setState(state - 1);
      return setCart((cart) => ({
        ...cart,
        [product.name]: cart[product.name] > 1 ? cart[product.name] - 1 : undefined,
      }));
    }
  };
  return [state, addOne, removeOne];
};

export default function Item(props) {
  const { productItem, setCart, cart } = props;
  const [quantity, addQuantity, removeQuantity] = useInput(cart[productItem.name], productItem, setCart);
  return (
    <div className="product-item">
      <p className="name-item">{productItem.name}</p>
      <img className="img-product-list" src={productItem.url_product} />
      <p>
        {' '}
        <button className="button-item" onClick={removeQuantity}>
          {' '}
          -{' '}
        </button>{' '}
        {quantity}{' '}
        <button className="button-item" onClick={addQuantity}>
          {' '}
          +{' '}
        </button>
      </p>
      <p>R$ {productItem.price.toFixed(2).replace('.', ',')}</p>
    </div>
  );
}
