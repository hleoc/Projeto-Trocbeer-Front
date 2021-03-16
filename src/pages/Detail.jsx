import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cupom from '../components/cupom';

const axiosList = async () => {
  const resposta = await axios.get('http://localhost:3001/products/');
  return resposta.data;
};

const axiosCupom = async (id) => {
  const resposta = await axios.get(`http://localhost:3001/cupons/${id}`);
  return resposta.data;
};

export default function Detail() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [cupom, setCupom] = useState('');
  const [resultCupom, setResultCupom] = useState({});
  useEffect(async () => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
    setProducts(await axiosList());
  }, []);
  const cartArray = products
    .map(({ name, price, _id }) => ({ name, price, id: _id, quantity: cart[name] }))
    .filter((item) => item.quantity);
  const sub = cartArray
    .reduce((total, item) => item.quantity * item.price + total, 0);
  return (
    <div>
      <div className="title-detail">
        <h1>Carrinho de Compras</h1>
      </div>
      <div className="detail">
        <ul>
          {cartArray.map((item) => (
            <li>
              {item.name} - {item.quantity} un. - R${item.price.toFixed(2).replace('.', ',')}/un. -
              R${(item.price * item.quantity).toFixed(2).replace('.', ',')}
            </li>
          ))}
        </ul>
        <div>SUB-TOTAL: R${sub.toFixed(2).replace('.', ',')}</div>
        <br />
      </div>
      <div className="detail-cupom">
        <label htmlFor="">Digite seu Cupom: </label>
        <input type="text" onChange={(e) => setCupom(e.target.value)} />
        <button
          onClick={async () => {
            const resultado = await axiosCupom(cupom);
            console.log(resultado);
            setResultCupom(resultado);
          }}
        >
          Adicionar Cupom
        </button>
      </div>
      <div className="detail-total">TOTAL:{ resultCupom.unidade === 'real' ? (sub - resultCupom.valor) : (sub - (sub * 0.1))
      .toFixed(2)
      .replace('.', ',')}</div>
      <div className="btn-finalizar-detail">
        <button>Finalizar Compra</button>
      </div>
    </div>
  );
}
