import { Search } from "lucide-react";

export default function InputDropdown({ placeholder }) {
  return (
    <div className="flex items-center gap-0.5 relative">
      <span className="absolute left-3">
        <Search size={18} color="#25252580" />
      </span>
      <input
        type="text"
        className=" max-mobile:w-full py-3 pl-9 pr-3 rounded-full text-xs text-[#252525] bg-[#f6f6f6] placeholder:text-[#25252580] outline-[#65759380]"
        placeholder={placeholder}
      />
    </div>
  );
}
