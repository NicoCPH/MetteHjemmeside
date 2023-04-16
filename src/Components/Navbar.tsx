import { FunctionComponent } from "react";
import {
  Link
} from "react-router-dom";

const NavBar: FunctionComponent = ({


}) => {
  return (
    <div className="relative ">
      <div className="container pt-[30px] max-md:pt-1 text-4xl max-md:text-[14px] items-center ">
        <nav >
          <div className="relative gap-10 flex flex-wrap max-sm:float-none max-sm:justify-center float-right mx-auto font-semibold">
            <Link className="max-w-sm p-1 no-underline text-black " to="/">Hjem</Link>
{/* 
            // <Link className="max-w-sm p-1 no-underline text-black" to="/">Min baggrund</Link> */}

            <Link className="max-w-sm p-1 no-underline border text-black hover:border-b-black max-md:ml-0 ml-12" to="/kontakt">Kontakt</Link>
          </div>
        </nav>
      </div>
      <img
        className="absolute max-md:hidden top-[10px] left-[35px] w-[4vw]"
        alt=""
        src="/vector2.svg"
      />
    </div>
  );
};

export default NavBar;
