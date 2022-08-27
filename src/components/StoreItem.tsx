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
  return (
    <div className="flex flex-col bg-red-200 p-2 rounded-lg">
      <img src={img} alt={properName} className="h-48 object-cover"></img>
      <div className="m-4 flex flex-row justify-between items-baseline">
        <span className="text-4xl">{name}</span>

        <span className="  font-bold text-2xl text-gray-500">
          {formatCurrency(price)}
        </span>
      </div>
      <div className="flex">
        <span>+</span>
        <div className="mt-auto">
          <span>7</span>
          <span>in cart</span>
        </div>
        <span>-</span>
      </div>
    </div>
  );
}
