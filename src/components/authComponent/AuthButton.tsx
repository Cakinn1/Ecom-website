import { AuthButtonProps } from "../../types/Types";

export default function AuthButton({
  handleUserToggle,
  title,
  value,
}: AuthButtonProps) {
  return (
    <button
      onClick={() => handleUserToggle(value)}
      className="border-[#649aaa] border text-[#649aaa] font-bold text-lg w-full py-4 rounded-2xl"
    >
      {title}
    </button>
  );
}
