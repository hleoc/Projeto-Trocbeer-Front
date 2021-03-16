import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../components/item';
import { useHistory } from 'react-router';

const axiosList = async () => {
  const resposta = await axios.get('http://localhost:3001/products/');
  return resposta.data;
};

export default function Home() {
  const history = useHistory();
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
    setProducts(await axiosList());
  }, []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]); //array de dependência
  return (
    <div>
      <div className="login-comprar">
        <label>Para comprar efetue o login </label>
        <button onClick={() => history.push('/login')}>Login</button>
      </div>
      <h1 className="title">Product's List</h1>
      <main>
        <div className="product-list">
          {products.map((e) => {
            return <Item productItem={e} setCart={setCart} cart={cart}/>;
          })}
        </div>
        <div className="btn-comprar">
          <button
            onClick={() => {
              if (window.localStorage.getItem('token')) {
                return history.push('/detail');
              }
              history.push('/login');
            }}
          >
            Comprar
          </button>
        </div>
      </main>
    </div>
  );
}
