export default function Header({ user }) {
  return (
    <header className="flex justify-between items-center p-8">
      <h1 className="text-base font-normal text-black/60">
        Bem-vindo de volta,{" "}
        <span className="font-bold text-black">
          {user?.nameUser || "Usuário"}
        </span>
      </h1>
    </header>
  );
}
