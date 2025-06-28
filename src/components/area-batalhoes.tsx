const AreaBatalhoes = () => {

    return (
        <div className="flex flex-col justify-center items-center gap-10 pb-20">
            <h2 className="text-lg md:text-3xl font-bold text-center">Limites de área dos Batalhões e DP</h2>
            <a
                href="/unidades/6bprv/inteligencia/ferramentas/"
                className="text-black hover:font-bold bg-[#FFFE03] px-6 py-1 rounded-lg"
            >
                Voltar
            </a>

            
                

            <div className="flex max-w-[390px] sm:max-w-[921px] md:max-w-[768px] lg:max-w-7xl w-full p-5">
                <iframe src="https://www.google.com/maps/d/embed?mid=1IZQYhjM25zcrjnTEByfibpcDAE59r9o&ehbc=2E312F" width="1280" height="540"></iframe>
            </div>
        </div>
    );
}

export default AreaBatalhoes;