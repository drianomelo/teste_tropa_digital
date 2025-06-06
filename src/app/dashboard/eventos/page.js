"use client";

import Button from "@/components/Button";
import InputDropdown from "@/components/inputs/InputDropdown";
import TablePages from "@/components/TablePages";
import { EllipsisVertical, Plus } from "lucide-react";

export default function EventosPage() {
  return (
    <div className="p-8 pt-0">
      <h2 className="text-2xl font-bold text-[#cc6237] mb-4">Todos Eventos</h2>

      <div className="p-[20px] rounded-[10px] border border-[#09428f2b] bg-white">
        <div className="flex justify-end gap-2">
          <InputDropdown placeholder="Buscar" />
          <Button>
            <Plus size={18} color="#FFF" />
            Inserir novo
          </Button>
        </div>
        <table className="w-full my-4">
          <thead className="pb-4 border-b border-[#cc613721]">
            <tr>
              <th className="text-start text-[15px] text-[#cc623780] font-medium pb-2">
                Nome do evento
              </th>
              <th className="text-start text-[15px] text-[#cc623780] font-medium pb-2">
                Total de equipes
              </th>
              <th className="text-start text-[15px] text-[#cc623780] font-medium pb-2">
                Status
              </th>
              <th className="text-start text-[15px] text-[#cc623780] font-medium pb-2">
                Data
              </th>
              <th className="text-start text-[15px] text-[#cc623780] font-medium pb-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-start text-sm py-3 border-b border-[#cc623721] text-[#657593] font-normal">
                Clube do Laço Coração Pantaneiro
              </td>
              <td className="text-start text-sm py-3 border-b border-[#cc623721] text-[#657593] font-normal">
                10
              </td>
              <td className="text-start text-sm py-3 border-b border-[#cc623721] text-[#657593] font-normal">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  Ativo
                </div>
              </td>
              <td className="text-start text-sm py-3 border-b border-[#cc623721] text-[#657593] font-normal">
                9 a 11 de Junho
              </td>
              <td className="text-center text-sm py-3 border-b border-[#cc623721] text-[#657593] font-normal">
                <EllipsisVertical color="#cc6237" />
              </td>
            </tr>
            <tr>
              <td className="text-start text-sm py-3 border-b border-[#cc623721] text-[#657593] font-normal">
                Clube do Laço Coração Teste
              </td>
              <td className="text-start text-sm py-3 border-b border-[#cc623721] text-[#657593] font-normal">
                10
              </td>
              <td className="text-start text-sm py-3 border-b border-[#cc623721] text-[#657593] font-normal">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-300"></div>
                  Inativo
                </div>
              </td>
              <td className="text-start text-sm py-3 border-b border-[#cc623721] text-[#657593] font-normal">
                9 a 11 de Junho
              </td>
              <td className="text-center text-sm py-3 border-b border-[#cc623721] text-[#657593] font-normal">
                <EllipsisVertical color="#cc6237" />
              </td>
            </tr>
          </tbody>
        </table>
        <TablePages />
      </div>
    </div>
  );
}
