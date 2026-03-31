import { InputHTMLAttributes } from "react";

type SmartbizInputProps = {
  label: string;
  id: string;
  error?: string | null;
} & InputHTMLAttributes<HTMLInputElement>;

export default function SmartbizInput({
  label,
  id,
  error,
  className = "",
  ...props
}: SmartbizInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        className={`mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
