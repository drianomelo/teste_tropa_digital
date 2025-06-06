export default function Button({ children, type }) {
  return (
    <button
      type={type}
      className="bg-[#cc6237] py-[10px] px-6 rounded-full w-full text-white text-[13px] font-medium cursor-pointer transition hover:bg-[#be562c]"
    >
      {children}
    </button>
  );
}
