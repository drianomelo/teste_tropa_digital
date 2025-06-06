import {
  LayoutDashboard,
  Calendar,
  Users,
  UserPlus,
  Power,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Sidebar({ user }) {
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const currentPage = window.location.pathname
      .split("/")
      .filter(Boolean)
      .pop();

    setActiveItem(currentPage);
  }, []);

  return (
    <aside className="w-[210px] bg-white p-7 flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <img
          className="w-[160px]"
          src="/images/logo.svg"
          alt="Desenho de boneco segurando celular"
        />

        <nav className="flex flex-col gap-3">
          <span className="text-[9px] font-extrabold text-[#a3a3a3] uppercase">
            Menu
          </span>
          <ul>
            <li>
              <a
                href="/dashboard"
                className={`flex p-2.5 items-center gap-2.5 text-sm leading-[.8] font-medium rounded-[5px] transition-all mb-1 hover:text-[#cc6237] ${
                  activeItem === "dashboard"
                    ? "bg-[#cc6237] text-white"
                    : "text-[#252525]"
                }`}
              >
                <LayoutDashboard
                  size={18}
                  color={activeItem === "dashboard" ? "#fff" : "#252525"}
                />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/dashboard/eventos"
                className={`flex p-2.5 items-center gap-2.5 text-sm leading-[.8] font-medium rounded-[5px] transition-all mb-1 hover:text-[#cc6237] ${
                  activeItem === "eventos"
                    ? "bg-[#cc6237] text-white"
                    : "text-[#252525]"
                }`}
              >
                <Calendar
                  size={18}
                  color={activeItem === "eventos" ? "#fff" : "#252525"}
                />
                Eventos
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className={`flex p-2.5 items-center gap-2.5 text-sm leading-[.8] font-medium rounded-[5px] transition-all mb-1 hover:text-[#cc6237] ${
                  activeItem === "equipes"
                    ? "bg-[#cc6237] text-white"
                    : "text-[#252525]"
                }`}
              >
                <Users
                  size={18}
                  color={activeItem === "equipes" ? "#fff" : "#252525"}
                />
                Equipes
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className={`flex p-2.5 items-center gap-2.5 text-sm leading-[.8] font-medium rounded-[5px] transition-all mb-1 hover:text-[#cc6237] ${
                  activeItem === "inscricoes"
                    ? "bg-[#cc6237] text-white"
                    : "text-[#252525]"
                }`}
              >
                <UserPlus
                  size={18}
                  color={activeItem === "inscricoes" ? "#fff" : "#252525"}
                />
                Inscrições
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-6 border-t border-gray-200">
        <div className="flex items-center gap-2 mt-8">
          <img
            className="w-11 h-11 rounded-2xl p-0.5 border border-[#cc6237]"
            src={user.picture}
            alt="Foto do Usuário"
          />
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-medium text-black leading-[1]">
              {user.nameUser}
            </h4>
            <span className="text-[11px] text-black/50 leading-[1]">
              {user.role}
            </span>
          </div>
        </div>
        <button className="text-sm font-medium  flex items-center gap-2.5 leading-[.7]">
          <User size={15} color="#252525" />
          Alterar dados
        </button>
        <a
          href="/login"
          className="text-sm font-medium  flex items-center gap-2.5 leading-[.7] cursor-pointer"
        >
          <Power size={15} color="#252525" />
          Sair
        </a>
      </div>
    </aside>
  );
}
