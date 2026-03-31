import { ButtonHTMLAttributes } from "react";

type SmartbizButtonProps = {
  label: string;
  loading?: boolean;
  bgColor?: string;
  textColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function SmartbizButton({
  label,
  loading = false,
  bgColor = "var(--smartbiz-bg-primary, #1A6BFF)",
  textColor = "#ffffff",
  disabled = false,
  className = "",
  ...props
}: SmartbizButtonProps) {
  return (
    <button
      {...props}
      type={props.type || "button"}
      disabled={disabled || loading}
      className={`w-full  rounded-xl py-3 text-base font-bold transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: "none",
      }}
    >
      {loading ? "Chargement..." : label}
    </button>
  );
}
