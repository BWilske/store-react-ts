import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
type StoreItemProps = {
  id: number;
  name: string;
  properName: string;
  price: number;
  img: string;
};

export function StoreItem({
  id,
  name,
  properName,
  price,
  img,
}: StoreItemProps) {
  const {
    getItemQuantity,
    incrementItemQuantity,
    decrementItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <div className="flex flex-col bg-red-200 p-2 rounded-lg">
      <img src={img} alt={properName} className="h-48 object-cover mb-4"></img>
      <div className="m-4 flex flex-row justify-between items-baseline">
        <span className="text-4xl">{name}</span>

        <span className="  font-bold text-2xl text-gray-500">
          {formatCurrency(price)}
        </span>
      </div>
      {quantity === 0 ? (
        <button
          onClick={() => incrementItemQuantity(id)}
          className="h-8 m-8 rounded-md ring-slate-400 ring-2 mx-8 bg-green-300 hover:bg-slate-400"
        >
          {" "}
          Add to Cart
        </button>
      ) : (
        <div className="flex flex-col items-center ">
          <div className="flex py-2 ">
            <button
              onClick={() => decrementItemQuantity(id)}
              className=" ring-slate-400 ring-2  rounded-lg shadow-lg flex items-center justify-center w-12 h-8  bg-green-300 m-2 text-3xl hover:bg-slate-400"
            >
              -
            </button>
            <div className="mt-auto">
              <span className="text-5xl text-red-600 font-semibold">
                {quantity}
              </span>
              <span className=" ml-2 text-3xl font-semibold ">In Cart</span>
            </div>
            <button
              onClick={() => incrementItemQuantity(id)}
              className=" ring-slate-400 ring-2 rounded-lg shadow-lg flex items-center justify-center  w-12 h-8  bg-green-300 m-2 text-3xl hover:bg-slate-400"
            >
              +
            </button>
          </div>
          <div
            onClick={() => removeFromCart(id)}
            className=" m-4 bg-red-600 px-24 py-4 rounded-xl hover:bg-slate-600 text-red-200 text-3xl font-bold"
          >
            REMOVE
          </div>
        </div>
      )}
    </div>
  );
}
