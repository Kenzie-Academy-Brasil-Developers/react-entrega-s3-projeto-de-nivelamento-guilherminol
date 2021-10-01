import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);
  const addToCart = (id) => {
    const newCartProduct = products.find((product) => product.code === id);
    setCart([...cart, newCartProduct]);
  };
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.code !== id);
    setCart(newCart);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Total da compra:{" "}
          {cart
            .reduce(
              (acc, atual) =>
                acc + Number(atual.price) - Number(atual.discount),
              0
            )
            .toFixed(2)}
        </p>
        <h3>
          {" "}
          Desconto especial:{" "}
          {cart
            .reduce((acc, item) => acc + Number(item.discount), 0)
            .toFixed(2)}
        </h3>
        <Form products={products} setProducts={setProducts}></Form>
        <ProductsList products={products} addToCart={addToCart}></ProductsList>
        <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
      </header>
    </div>
  );
}

export default App;
