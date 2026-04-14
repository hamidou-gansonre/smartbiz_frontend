import { MagnifyingGlass } from "@phosphor-icons/react";

type SearchBarProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({
  placeholder = "Rechercher une facture...",
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative mb-6">
      <MagnifyingGlass
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}
