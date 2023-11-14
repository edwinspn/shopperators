import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from "react";

interface Props {
  label: string;
  type: HTMLInputTypeAttribute;
  id?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => Promise<void> | void;
  name?: string;
  value?: string;
  invalid?: boolean;
}

export default function Input({
  label,
  type,
  id,
  placeholder,
  onChange,
  required,
  name,
  value,
  invalid,
}: Readonly<Props>): ReactNode {
  return (
    <div className="relative mb-4">
      <label className="block mb-2 text-sm font-medium text-white">
        {label}
      </label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        className="text-sm rounded-lgblock w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 data-[invalid=true]:border-red-700"
        placeholder={placeholder}
        required={required}
        name={name}
        value={value}
        data-invalid={invalid}
      />
    </div>
  );
}
