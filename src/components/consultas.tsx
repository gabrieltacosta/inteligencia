import { type SetStateAction, useState } from "react";

const Consulta = () => {
  const [valor, setValor] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValor(event.target.value);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 p-6 mb-14">
      <div className="items-center justify-center">
        <h2 className="text-lg md:text-3xl font-bold text-center">Consultas de Escalas</h2>
        <p className="text-center text-sm">
          Atividade DEJEM e Atividade DELEGADA
        </p>
      </div>
      <a
        href="/unidades/6bprv/inteligencia/ferramentas/"
        className="text-black hover:font-bold bg-[#FFFE03] px-6 py-1 rounded-lg"
      >
        Voltar
      </a>
      <div className="flex flex-col max-w-7xl w-full mx-auto items-start gap-1">
        <span className="text-xs text-zinc-400">ID da escala:</span>
        <input
          type="number"
          className="flex-1 bg-transparent border border-zinc-400 px-2 w-80"
          placeholder="Digite o id da escala..."
          required
          onChange={handleChange}
          autoFocus
        />
      </div>
      <div className="flex max-w-7xl w-full pb-10">
        {valor === "" ? null : (
          <iframe
            src={`https://sistemasadmin.intranet.policiamilitar.sp.gov.br/Escala/arrelpreesc.aspx?${valor}`}
            width="100%"
            height="900px"
          />
        )}
      </div>
    </div>
  );
};

export default Consulta;
