const Previsao = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-10 pb-20">
            <h2 className="text-lg md:text-3xl font-bold text-center">Previsão do Almoço</h2>
            <a
                href="/unidades/6bprv/inteligencia/ferramentas/"
                className="text-black hover:font-bold bg-[#FFFE03] px-6 py-1 rounded-lg"
            >
                Voltar
            </a>
            <div className="flex max-w-[412px] lg:max-w-7xl w-full p-5">
                <iframe
                    src="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdrpbwVLxoiJEE7NwVY-kAAZU2KcMNZIgYBm5O5HQ-v1wdbOA/formResponse?pli=1"
                    width="540px"
                    height="800px"
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}

export default Previsao;