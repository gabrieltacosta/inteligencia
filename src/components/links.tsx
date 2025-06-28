import { Link } from "react-router";

interface linksProps {
    href: string;
    src: string;
    text: string;
    blank?: string
  }
  
  const Links = ({ href, src, text, blank }: linksProps) => {
    return (
      <Link to={href} target={blank} className="flex flex-col justify-center items-center text-sm md:text-base text-zinc-400 uppercase">
        <div className="flex gap-2 justify-center items-center hover:text-white hover:font-bold">
          <img src={src} width={25} />
          {text}
        </div>
      </Link>
    );
  };
  
  export default Links;