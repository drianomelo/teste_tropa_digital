import Button from "./Button";

export default function TablePages() {
  return (
    <ul className="flex justify-end gap-2 items-center">
      <li className="bg-[#f5f5f5] py-[10px] px-6 flex items-center justify-center gap-2.5 rounded-full text-[13px] cursor-pointer">
        Anterior
      </li>
      <li className="bg-[#cc6237] w-[39px] h-[39px] flex justify-center items-center rounded-full text-xs text-white">
        1
      </li>
      <li className="bg-[#f5f5f5] w-[39px] h-[39px] flex justify-center items-center rounded-full text-xs">
        2
      </li>
      <li className="bg-[#f5f5f5] w-[39px] h-[39px] flex justify-center items-center rounded-full text-xs">
        3
      </li>
      <Button fullWidth={false}>Próxima</Button>
    </ul>
  );
}
