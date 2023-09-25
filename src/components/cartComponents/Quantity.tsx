import { QuantityProps} from "../../types/Types";

export default function Quantity({
  handleQuantityChange,
  item,
}: QuantityProps) {
  return (
    <input
      type="number"
      value={item.quantity}
      onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
      className="p-2 w-14 border border-black"
    />
  );
}
