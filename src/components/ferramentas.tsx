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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container mx-auto items-center justify-center gap-4 lg:gap-6">
        <Links
          href="http://portal.muralhapaulista.sp.gov.br/"
          src="/unidades/6bprv/inteligencia/ferramentas/muralha.svg"
          text="Portal Muralha Paulista"
          blank="_blank"
        />
        <Links
          href="http://inteligenciaweb.intranet.policiamilitar.sp.gov.br"
          src="/unidades/6bprv/inteligencia/ferramentas/pmesp.svg"
          text="Inteligência Web"
          blank="_blank"
        />
        <Links
          href="https://cop.pmesp.br.evm.online/"
          src="/unidades/6bprv/inteligencia/ferramentas/pmesp.svg"
          text="Sistema de COP's"
          blank="_blank"
        />
        <Links
          href="https://stream.pmesp.br.evm.online/"
          src="/unidades/6bprv/inteligencia/ferramentas/pmesp.svg"
          text="COP's Ao Vivo"
          blank="_blank"
        />
        <Links
          href="https://app.pmrvguardiao.com.br/"
          src="/unidades/6bprv/inteligencia/ferramentas/guardiao.webp"
          text="PMRV Guardião"
          blank="_blank"
        />
        <Links
          href="https://detetiveforense.com/auth/login"
          src="/unidades/6bprv/inteligencia/ferramentas/detetive.ico"
          text="Detetive Forense"
          blank="_blank"
        />
        <Links
          href="https://alertabrasil.prf.gov.br/alertabrasil"
          src="/unidades/6bprv/inteligencia/ferramentas/alertaBrasil.svg"
          text="Alerta Brasil"
          blank="_blank"
        />
        <Links
          href="https://bpr.itsbrasil.net.br/"
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
          href="https://www.hnprd.dipol.prodesp.sp.gov.br/Emulador/(S(a1mu5atpumxnmj1imu53nbxp))/pages/McpT27/ePortalDynamic.aspx"
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
          href="https://bopm.policiamilitar.sp.gov.br/"
          src="/unidades/6bprv/inteligencia/ferramentas/pmesp.svg"
          text="BOPM-E"
          blank="_blank"
        />
        <Links
          href="http://www.intranet.policiamilitar.sp.gov.br/"
          src="/unidades/6bprv/inteligencia/ferramentas/pmesp.svg"
          text="Intranet"
          blank="_blank"
        />
        {/* <Links
          href="https://www6.intranet.policiamilitar.sp.gov.br/unidades/6bprv/inteligencia/"
          src="/unidades/6bprv/inteligencia/ferramentas/rodoviaria2.png"
          text="bd inteligência"
          blank="_blank"
        /> */}
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
          href="https://plano-chamada.hawkdev.cloud/"
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
          href="https://mytkstar.net/index.aspx"
          src="/unidades/6bprv/inteligencia/ferramentas/rodoviaria2.png"
          text="Rastreador"
          blank="_blank"
        />
        <Links
          href="https://servidor.hawkdev.cloud/"
          src="/unidades/6bprv/inteligencia/ferramentas/rodoviaria2.png"
          text="Servidor p2"
          blank="_blank"
        />
        {/* <Links
          href="/cpf"
          src="/unidades/6bprv/inteligencia/ferramentas/rodoviaria2.png"
          text="Consulta Telefones"
        /> */}
        <Links
          href="https://web.whatsapp.com/"
          src="/unidades/6bprv/inteligencia/ferramentas/whatsapp.png"
          text="Whatsapp Web"
          blank="_blank"
        />
        {/* <Links
          href="/spmar"
          src="/unidades/6bprv/inteligencia/ferramentas/rodoviaria2.png"
          text="Passagens SPMAR"
        /> */}
      </div>
    </div>
  );
}

export default Ferramantas;
