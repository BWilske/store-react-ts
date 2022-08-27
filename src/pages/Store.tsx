import storeItems from "../data/plants.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <div className="bg-stone-200">
      <h1 className="text-center text-5xl font-extrabold pt-8">Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8 p-8">
        {storeItems.map((item) => (
          <div>
            <StoreItem key={item.id} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
