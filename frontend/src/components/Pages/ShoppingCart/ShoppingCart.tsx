import { useRef, useState } from "react";
import { useShoppingCartContext } from "../../../context/ShopingCartContext";
import { BsFillCartXFill } from "react-icons/bs";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Order } from "../../../api";
import { OrderT } from "../../../types";

export const ShoppingCart = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    street: "",
    aptNumber: "",
  });

  const { items, addItem, removeItem, clear } = useShoppingCartContext();

  const submitHandler = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const orderData: OrderT = {
        ...(Object.fromEntries(formData.entries()) as unknown as OrderT),
        itemQuantity: items.map((item) => ({
          watch: item.item.id,
          quantity: item.quantity,
        })),
      };

      if (!validateForm()) return;
      Order.create(orderData);
      formRef.current.reset();
      clear();
    }
  };

  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      city: "",
      street: "",
      aptNumber: "",
    };

    let isValid = true;

    // Validate the first name
    if (!formRef.current["firstName"].value) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    // Validate the last name
    if (!formRef.current["lastName"].value) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    // Validate the phone number
    if (!formRef.current["phoneNumber"].value) {
      newErrors.phoneNumber = "Please enter a valid phone number";
      isValid = false;
    }

    // Validate the city
    if (!formRef.current["city"].value) {
      newErrors.city = "City is required";
      isValid = false;
    }

    // Validate the street
    if (!formRef.current["street"].value) {
      newErrors.street = "Street is required";
      isValid = false;
    }

    // Validate the apt number
    if (!formRef.current["aptNumber"].value) {
      newErrors.aptNumber = "Apt. number is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="flex flex-col items-center gap-20 py-10">
      <h1 className="text-white text-4xl">Shopping cart</h1>
      <div className="bg-white w-11/12 md:w-3/5 rounded-3xl py-10 px-10">
        {items.length ? (
          <>
            <div className="flex justify-between">
              <h2 className="text-2xl">Items:</h2>
              <button
                className="border-2 p-2 border-red-500 rounded-full text-red-500"
                onClick={clear}
              >
                <BsFillCartXFill className="w-5 h-5" />
              </button>
            </div>
            {items.map((e, i) => (
              <div
                key={e.item.id}
                className={`flex${i === 0 ? "" : " border-t-2"}`}
              >
                <div
                  className="w-20 md:w-40 p-4 h-20 md:h-40 flex items-center
           justify-center"
                >
                  <img
                    src={`http://localhost:1337${e.item.photo.url}`}
                    className="h-full"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <h2>{e.item.name}</h2>
                  <p>{e.item.price} &euro;</p>
                </div>
                <span className="ml-auto flex gap-10 items-center">
                  <div className="bg-[gray] text-white p-4 rounded-xl flex justify-center items-center">
                    <button
                      className="text-lg"
                      onClick={() => removeItem(e.item)}
                    >
                      <AiFillMinusCircle />
                    </button>
                    <span className="px-2 rounded-md">{e.quantity}</span>
                    <button
                      className="text-lg "
                      onClick={() => addItem(e.item)}
                    >
                      <AiFillPlusCircle />
                    </button>
                  </div>
                  <span className="w-10">
                    {e.quantity * e.item.price} &euro;
                  </span>
                </span>
              </div>
            ))}
          </>
        ) : (
          <h2 className="text-xl text-center">
            {" "}
            There are no items in shopping cart.
          </h2>
        )}
      </div>

      {items.length ? (
        <div className="bg-white w-11/12 md:w-3/5 flex flex-col gap-10 rounded-3xl py-10 px-10">
          <h2 className="text-2xl">Order informations:</h2>
          <form ref={formRef} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName">First name</label>
              <input
                value="a"
                type="text"
                name="firstName"
                className="border-2"
              />
              {errors.firstName ? (
                <span className="text-red-500">{errors.firstName}</span>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last name</label>
              <input
                value="a"
                type="text"
                name="lastName"
                className="border-2"
              />
              {errors.lastName ? (
                <span className="text-red-500">{errors.lastName}</span>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                value="a"
                type="tel"
                name="phoneNumber"
                className="border-2"
              />
              {errors.phoneNumber ? (
                <span className="text-red-500">{errors.phoneNumber}</span>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input value="a" type="text" name="city" className="border-2" />
              {errors.city ? (
                <span className="text-red-500">{errors.city}</span>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="street">Street</label>
              <input value="a" type="text" name="street" className="border-2" />
              {errors.street ? (
                <span className="text-red-500">{errors.street}</span>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="aptNumber">Apt. number</label>
              <input
                value="a"
                type="text"
                name="aptNumber"
                className="border-2"
              />
              {errors.aptNumber ? (
                <span className="text-red-500">{errors.aptNumber}</span>
              ) : null}
            </div>
          </form>
          <div className="flex justify-center items-center">
            <button
              className="border-2 px-4 py-2 rounded-lg"
              onClick={submitHandler}
            >
              Submit order
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
