import { ButtonHTMLAttributes, ReactNode } from "react";

type SmartbizButtonProps = {
  label: string;
  loading?: boolean;
  bgColor?: string;
  textColor?: string;
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function SmartbizButton({
  label,
  loading = false,
  bgColor = "smartbiz-bg-primary",
  textColor = "text-white",
  disabled = false,
  className = "",
  icon,
  ...props
}: SmartbizButtonProps) {
  return (
    <button
      {...props}
      type={props.type || "button"}
      disabled={disabled || loading}
      className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 text-base font-bold transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 border-none ${bgColor} ${textColor} ${className}`}
    >
      {loading ? (
        "Chargement..."
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {label}
        </>
      )}
    </button>
  );
}
