import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function InputPassword({ label, value, onChange, placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-[13px] font-semibold text-[#cc6237]">
        {label}
      </label>

      <div className="relative flex items-center">
        <input
          type={show ? "password" : "text"}
          className="w-[300px] max-mobile:w-full py-3 px-6 rounded-full text-xs text-[#657593] bg-[#f6f6f6] placeholder:text-[#65759380] outline-[#65759380]"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />

        <span className="absolute right-5">
          {show ? (
            <EyeOff size={18} color="#cc6237" onClick={() => setShow(false)} />
          ) : (
            <Eye size={18} color="#cc6237" onClick={() => setShow(true)} />
          )}
        </span>
      </div>
    </div>
  );
}
