const Cart = ({ cart, removeFromCart }) => {
  return (
    <>
      <h1>Carrinho :</h1>
      <ul>
        {cart.map((item, key) => {
          return (
            <li key={key}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Preço Original: R$ {item.price.toFixed(2)}</p>
              <p>Promoção: R$ {(item.price - item.discount).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.code)}>Remover</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Cart;
