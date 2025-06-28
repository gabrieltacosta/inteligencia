import Links from "./links";
import Weather from "./weather";

function Ferramantas() {
  return (
    <div className="w-full  flex flex-col justify-start items-center gap-10 p-6 mb-20">
      <div className="w-full max-w-7xl flex justify-center items-center">
        <div className="flex-1">
          <h2 className="text-lg md:text-3xl font-bold text-center">
            Ferramentas de Inteligência
          </h2>
        </div>
        <div>
          <Weather />
        </div>
      </div>
      <div className="flex max-w-7xl w-full mx-auto flex-wrap justify-around gap-4 lg:gap-14">
        <Links
          href="http://operacional.muralhapaulista.sp.gov.br/"
          src="/unidades/6bprv/inteligencia/ferramentas/muralha.svg"
          text="Muralha Paulista"
          blank="_blank"
        />
        <Links
          href="http://monitoramento.muralhapaulista.sp.gov.br/"
          src="/unidades/6bprv/inteligencia/ferramentas/muralha.svg"
          text="Muralha Paulista Monitoramento"
          blank="_blank"
        />
        <Links
          href="http://inteligenciaweb.intranet.policiamilitar.sp.gov.br"
          src="/unidades/6bprv/inteligencia/ferramentas/pmesp.svg"
          text="Inteligência Web"
          blank="_blank"
        />
        <Links
          href="https://alertabrasil.prf.gov.br/alertabrasil"
          src="/unidades/6bprv/inteligencia/ferramentas/alertaBrasil.svg"
          text="Alerta Brasil"
          blank="_blank"
        />
        <Links
          href="http://dr.itsbrasil.net.br/"
          src="/unidades/6bprv/inteligencia/ferramentas/rodoviaria2.png"
          text="DER - its brasil"
          blank="_blank"
        />
        <Links
          href="https://blitzsjc.sistemasfotosensores.com/"
          src="/unidades/6bprv/inteligencia/ferramentas/fotoblitz.ico"
          text="fotobliz - sjc"
          blank="_blank"
        />

        <Links
          href="https://www.infocrim.ssp.sp.gov.br/login"
          src="/unidades/6bprv/inteligencia/ferramentas/sspNovo.png"
          text="INFOCRIM 4.0"
          blank="_blank"
        />
        <Links
          href="https://copomonline.policiamilitar.sp.gov.br/Login/Login"
          src="/unidades/6bprv/inteligencia/ferramentas/pmesp.svg"
          text="COPOM online"
          blank="_blank"
        />

        <Links
          href="https://seguranca.sinesp.gov.br/sinesp-seguranca/login.jsf?goto=INFOSEG"
          src="/unidades/6bprv/inteligencia/ferramentas/infoseg.ico"
          text="INFOSEG"
          blank="_blank"
        />
        <Links
          href="https://www.hnprd.dipol.prodesp.sp.gov.br/web/(S(pqn0dkxyr0lb2ojxxwnkul5b))/Home/UnknownPage"
          src="/unidades/6bprv/inteligencia/ferramentas/ssp.ico"
          text="PRODESP"
          blank="_blank"
        />
        <Links
          href="https://portalbnmp.cnj.jus.br/#/pesquisa-peca"
          src="/unidades/6bprv/inteligencia/ferramentas/bnmp.ico"
          text="portal bnmp"
          blank="_blank"
        />
        <Links
          href="https://www.rh.intranet.policiamilitar.sp.gov.br/"
          src="/unidades/6bprv/inteligencia/ferramentas/pmesp.svg"
          text="PORTAL SGP/SIRH"
          blank="_blank"
        />
        <Links
          href="https://www6.intranet.policiamilitar.sp.gov.br/unidades/6bprv/inteligencia/"
          src="/unidades/6bprv/inteligencia/ferramentas/rodoviaria2.png"
          text="bd inteligência"
          blank="_blank"
        />

        <Links
          href="http://www.intranet.policiamilitar.sp.gov.br/"
          src="/unidades/6bprv/inteligencia/ferramentas/pmesp.svg"
          text="Intranet"
          blank="_blank"
        />

        <Links
          href="http://sistemasopr.intranet.policiamilitar.sp.gov.br/siopmweb/HSiopm.aspx"
          src="/unidades/6bprv/inteligencia/ferramentas/pmesp.svg"
          text="SIOPM Web"
          blank="_blank"
        />
        <Links
          href="http://10.61.18.121/Funcional/6bprvinteligencia.nsf"
          src="/unidades/6bprv/inteligencia/ferramentas/logoEmail.png"
          text="Email da Seção"
          blank="_blank"
        />
        <Links
          href="https://correio.policiamilitar.sp.gov.br"
          src="/unidades/6bprv/inteligencia/ferramentas/logoEmail.png"
          text="Email Pessoal"
          blank="_blank"
        />
        <Links
          href="/area-dos-batalhoes"
          src="/unidades/6bprv/inteligencia/ferramentas/maps.png"
          text="Limites de área dos Batalhões"
        />
        <Links
          href="https://ead.pmesp.org/"
          src="/unidades/6bprv/inteligencia/ferramentas/pmesp.svg"
          text="PVT/ITP/EAP"
          blank="_blank"
        />
        <Links
          href="/consulta"
          src="/unidades/6bprv/inteligencia/ferramentas/pmesp.svg"
          text="Consulta DEJEM/DELEGADA"
        />
        <Links
          href="https://minhaarea.sp.gov.br/plataformasp"
          src="/unidades/6bprv/inteligencia/ferramentas/sspNovo.png"
          text="SEI - Sistema Eletrônico de Informações"
          blank="_blank"
        />
        <Links
          href="https://web.whatsapp.com/"
          src="/unidades/6bprv/inteligencia/ferramentas/whatsapp.png"
          text="Whatsapp Web"
          blank="_blank"
        />
        <Links
          href="https://www.ciaf.policiamilitar.sp.gov.br/folhadepagamento/autenticacaosegura.aspx"
          src="/unidades/6bprv/inteligencia/ferramentas/pmesp.svg"
          text="holerite"
          blank="_blank"
        />
        <Links
          href="/previsao"
          src="/unidades/6bprv/inteligencia/ferramentas/rodoviaria2.png"
          text="PREVISÃO DO ALMOÇO"
        />
        <Links
          href="http://10.36.216.254:8000/"
          src="/unidades/6bprv/inteligencia/ferramentas/rodoviaria2.png"
          text="PLANO DE CHAMADA | NADA CONSTA"
          blank="_blank"
        />
        <Links
          href="https://pmesprodoviario.ciasat.com.br/?lang=br"
          src="/unidades/6bprv/inteligencia/ferramentas/rodoviaria2.png"
          text="TELEMETRIA"
          blank="_blank"
        />
        <Links
          href="http://10.36.216.220:8080/"
          src="/unidades/6bprv/inteligencia/ferramentas/rodoviaria2.png"
          text="Servidor p2"
          blank="_blank"
        />
      </div>
    </div>
  );
}

export default Ferramantas;
