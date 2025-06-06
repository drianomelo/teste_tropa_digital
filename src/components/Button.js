export default function Button({ children, type, fullWidth }) {
  return (
    <button
      style={fullWidth ? { width: "100%" } : { width: "fit-content" }}
      type={type}
      className="bg-[#cc6237] py-[10px] px-6 flex items-center justify-center gap-2.5 rounded-full text-white text-[13px] font-medium cursor-pointer transition hover:bg-[#be562c]"
    >
      {children}
    </button>
  );
}
