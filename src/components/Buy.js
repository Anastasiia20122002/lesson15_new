import React from "react";
import Modal1 from "./Modal1";
import { useState, useEffect } from "react";
import BuyPizza from "./BuyPizza";
import "./BuyPizza.css";
import "./Buy.css";
import "./styles.css";
function Buy() {
  console.log("Init Buy");
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  // console.log("toggleModal = " + modal);
  // console.log("toggleModal1 = " + modal1);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  if (modal1) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  async function fetchPizzas() {
    const response = await fetch(BASE_URL + "/pizzas", {
      headers: { "x-api-key": key },
    });
    const data = await response.json();
    setPizza(data);
  }
  const [pizzas, setPizza] = useState([]);
  const BASE_URL =
    "https://q8zbks9a4l.execute-api.eu-central-1.amazonaws.com/Prod";
  const key = "OwekZi1fkt3VlmA7r20fv6m4jAVLDh6iaF5C41al";
  useEffect(() => {
    fetchPizzas();
  }, []);
  const [modal1Open, setModal1Open] = useState(false);
  const toggleModal = () => {
    console.log("toggleModal = " + modal);

    setModal(!modal);
  };
  const toggleModal1 = () => {
    console.log("toggleModal1  =" + modal1);
    setModal1(!modal1);
  };
  const [modal2Open, setModal2Open] = useState(false);
  async function CreateOrder() {
    const response = await fetch(BASE_URL + "/order", {
      method: "POST",
      headers: {
        "x-api-key": key,
      },
      body: JSON.stringify({
        address: "Shevchenka 31",
        pizzas: [{ id: "e95da3f5-3c9c-4e3c-a10a-13fc8092d027", count: 3 }],
        phoneNumber: "+38067777777",
      }),
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <div id="buy">
      <div id="cart">
        <img
          id="buy_img"
          src="/images/shopping.png"
          onClick={() => {
            toggleModal();
          }}
        />
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <div id="header_small">
                <h1 div className="title">
                  Cart
                </h1>
                <img
                  id="cancel"
                  src="images/cancel.png"
                  onClick={() => {
                    toggleModal();
                    toggleModal1();
                  }}
                />
              </div>
              <BuyPizza
                image="/images/pizza3.png"
                name="Pepperoni"
                weight="430g"
                number="1"
                price="195"
              />
              <BuyPizza
                image="/images/pizza3.png"
                name="Diabola"
                weight="860g"
                number="2"
                price="440"
              />
              <BuyPizza
                image="/images/pizza1.png"
                name="Calzone al Forno"
                weight="430g"
                number="1"
                price="180"
              />
              <div id="amount">
                <h1 id="text">Amount</h1>
                <h1 id="money">UAH</h1>
              </div>
              <div id="button-div">
                <button
                  id="toorder"
                  onClick={() => {
                    //console.log(modal);
                    //console.log(modal1);
                    toggleModal();

                    //console.log(modal);
                    //console.log(modal1);
                    /*setModal1Open(true);*/
                  }}
                >
                  To order
                </button>
                {modal1 && (
                  <div className="modal">
                    <div onClick={toggleModal1} className="overlay"></div>
                    <div className="modal-content">
                      <div id="header_small">
                        <h1 div className="title">
                          Cart
                        </h1>
                        <img
                          id="cancel"
                          src="images/cancel.png"
                          onClick={toggleModal1}
                        />
                      </div>
                      <BuyPizza
                        image="/images/pizza3.png"
                        name="Pepperoni"
                        weight="430g"
                        number="1"
                        price="195"
                      />
                      <BuyPizza
                        image="/images/pizza3.png"
                        name="Diabola"
                        weight="860g"
                        number="2"
                        price="440"
                      />
                      <BuyPizza
                        image="/images/pizza1.png"
                        name="Calzone al Forno"
                        weight="430g"
                        number="1"
                        price="180"
                      />
                      <div id="amount">
                        <h1 id="text">Amount</h1>
                        <h1 id="money">UAH</h1>
                      </div>
                      <div id="button-div">
                        <button
                          id="toorder"
                          onClick={() => {
                            toggleModal1();
                            /*setModal1Open(true);*/
                          }}
                        >
                          To order
                        </button>
                        {modal1Open && <Modal1 setOpenModal1={setModal1Open} />}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div id="text-buy">
        <h3>0 UAH</h3>
      </div>
    </div>
  );
}

export default Buy;
