import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageProducts from "./Pages/PageProducts/PageProducts";
import PageHome from "./Pages/PageHome/PageHome";
import Menu from "./Components/Menu/Menu";
import { useState } from "react";

export default function App() {
  const [categories, setCategories] = useState(initialCategories)

  function changeQuantity(product, newQuantity){
    product.quantity = newQuantity
    setCategories([...categories])
  }

  return (
    <>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route
            path="/produtos"
            exact
            element={categories.map((categorie) => (
              <PageProducts allCategories={categorie} changeQuantity={changeQuantity} />
            ))}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

/* API ( Array de objetos) || all my products */
const initialCategories = [
  {
    title: "Fragrância feminina",
    products: [
      {
        id: 1,
        name: "kit luna",
        imageUrl:
          "https://static.natura.com/cdn/ff/RlabEOLJcW-p__CLUmLAlcAqlMUsPp5wttk-Ii2m6Ms/1682696225/public/products/125400_1_8.jpg",
          quantity: 0,
          description: 'Muito cheiroso',
          price: 190.00

      },
      {
        id: 2,
        name: "kit kriska",
        imageUrl:
          "https://static.natura.com/cdn/ff/4HlJRgvdXSPdXsOqWE8x4p6qWfHkRZK8lZH6U63hoiU/1682696001/public/products/125397_2_9.jpg",
          quantity: 0,
          description: 'Muito cheiroso',
          price: 190.00
      },
      {
        id: 3,
        name: "kit una",
        imageUrl:
          "https://static.natura.com/cdn/ff/RJ9kZUSERJajhG_pJdZHCtcnBeCg4BrNLtBVQkdTQbc/1682695899/public/products/125493_2_3.jpg",
          quantity: 0,
          description: 'Muito cheiroso',
          price: 190.00
      },
      {
        id: 4,
        name: "kit kaiak ",
        imageUrl:
          "https://static.natura.com/cdn/ff/-82_ejzDWA22h6HmoZTdhF1KRiwVOkzH214nrUSlINQ/1682695347/public/products/125610_2_3.jpg",
          quantity: 0,
          description: 'Muito cheiroso',
          price: 190.00
      },
      {
        id: 5,
        name: "kit humor",
        imageUrl:
          "https://static.natura.com/cdn/ff/4HlJRgvdXSPdXsOqWE8x4p6qWfHkRZK8lZH6U63hoiU/1682696001/public/products/125397_2_9.jpg",
          quantity: 0,
          description: 'Muito cheiroso',
          price: 190.00
      },
      {
        id: 6,
        name: "innamorata",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0587/6075/7446/products/BT-US_Boticollection-Innamorata-1-638186_400x.jpg?v=1675715338",
          quantity: 0,
          description: 'Muito cheiroso',
          price: 190.00
      },
    ],
  },

  {
    title: "Fragrancia Masculina",
    products: [
      {
        id: 7,
        name: "kit essencial",
        imageUrl:
          "https://static.natura.com/cdn/ff/qH-iOT5YJkKfy3uJ0AR3dfTBjX9_8rxVr3c30CJMCFM/1682694820/public/products/125608_1_8.jpg",
          quantity: 0,
          description: 'Muito cheiroso',
          price: 190.00
      },
      {
        id: 8,
        name: "malback gold",
        imageUrl:
          " https://cdn.shopify.com/s/files/1/0587/6075/7446/products/BT-US_Malbec-Vert_1-516985_400x.jpg?v=1679358385",
          quantity: 0,
          description: 'Muito cheiroso',
          price: 190.00
      },
      {
        id: 9,
        name: "malback gold",
        imageUrl:
          " https://cdn.shopify.com/s/files/1/0587/6075/7446/products/BT-US_Malbec-Vert_1-516985_400x.jpg?v=1679358385",
          quantity: 0,
          description: 'Muito cheiroso',
          price: 190.00
      },
    ],
  },
];
