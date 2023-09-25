import { AuthFormProps } from "../../types/Types";

export default function AuthForm({value, setFunction, title, type}: AuthFormProps) {
  return (
    <>
      <h1 className="text-sm">
        {title} <span className={`text-red-500 `}>*</span>
      </h1>
      <input
        type={type}
        value={value}
        onChange={(e) => setFunction(e.target.value)}
        placeholder={type}
        className="w-full focus:outline-none border py-4 px-4 rounded-2xl focus:border-black text-sm"
      />
    </>
  );
}
