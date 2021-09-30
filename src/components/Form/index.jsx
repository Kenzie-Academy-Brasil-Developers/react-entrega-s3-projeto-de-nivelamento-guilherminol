import { useState } from "react";
const Form = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    code: 0,
    name: "",
    description: "",
    price: 0,
    discount: 0,
  });
  return (
    <>
      <input
        type="text"
        onChange={(e) =>
          setNewProduct({
            code: e.target.value,
            name: newProduct.name,
            description: newProduct.description,
            price: newProduct.price,
            discount: newProduct.discount,
          })
        }
        placeholder="code"
      />
      <input
        type="text"
        onChange={(e) =>
          setNewProduct({
            code: newProduct.code,
            name: e.target.value,
            description: newProduct.description,
            price: newProduct.price,
            discount: newProduct.discount,
          })
        }
        placeholder="name"
      />
      <input
        type="text"
        onChange={(e) =>
          setNewProduct({
            code: newProduct.code,
            name: newProduct.name,
            description: e.target.value,
            price: newProduct.price,
            discount: newProduct.discount,
          })
        }
        placeholder="description"
      />
      <input
        type="text"
        onChange={(e) =>
          setNewProduct({
            code: newProduct.code,
            name: newProduct.name,
            description: newProduct.description,
            price: e.target.value,
            discount: newProduct.discount,
          })
        }
        placeholder="price"
      />
      <input
        type="text"
        onChange={(e) =>
          setNewProduct({
            code: newProduct.code,
            name: newProduct.name,
            description: newProduct.description,
            price: newProduct.price,
            discount: e.target.value,
          })
        }
        placeholder="discount"
      />
      <button onClick={() => setProducts([...products, newProduct])}>
        Adicionar produto
      </button>
    </>
  );
};
export default Form;
