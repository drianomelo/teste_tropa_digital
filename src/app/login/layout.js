export default function LoginLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fbff]">
      <div
        className="max-w-[756px] flex justify-between gap-8 bg-white p-[10px] rounded-[20px] shadow-[0_100px_150px_rgba(0,0,0,0.25)]"
        style={{ alignItems: "start" }}
      >
        {children}
      </div>
    </div>
  );
}
