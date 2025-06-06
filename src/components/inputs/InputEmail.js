export default function InputEmail({ label, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-[13px] font-semibold text-[#cc6237]">
        {label}
      </label>

      <input
        type="email"
        className="w-[300px] max-mobile:w-full py-3 px-6 rounded-full text-xs text-[#657593] bg-[#f6f6f6] placeholder:text-[#65759380] outline-[#65759380]"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
