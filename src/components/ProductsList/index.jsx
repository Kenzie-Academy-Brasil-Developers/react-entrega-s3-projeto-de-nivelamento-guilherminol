const ProductsList = ({ products, addToCart }) => {
  return (
    <ul>
      {products.map((item, key) => {
        return (
          <li key={key}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Preço Original: R$ {item.price.toFixed(2)}</p>
            <p>Promoção: R$ {(item.price - item.discount).toFixed(2)}</p>
            <button onClick={() => addToCart(item.code)}>Adicionar</button>
          </li>
        );
      })}
    </ul>
  );
};
export default ProductsList;
