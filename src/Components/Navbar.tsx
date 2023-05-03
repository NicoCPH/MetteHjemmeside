import { FunctionComponent } from "react";
import {
  Link
} from "react-router-dom";

const NavBar: FunctionComponent = ({


}) => {
  return (
    <div className="relative grid grid-cols-12 pt-[1vw] max-md:pt-1 text-[1.2vw] max-md:text-[14px] ">
      <img
        className="relative col-span-2 max-md:hidden left-[35px] bottom-1 w-[3.3vw]"
        alt=""
        src="./vector2.svg"
        />
        <div className="relative gap-3 flex flex-wrap max-sm:col-start-2 max-sm:justify-center font-semibold col-span-10 col-start-9">
            <Link className="max-w-sm p-1 no-underline text-black " to="/">Hjem</Link>
{/* 
            // <Link className="max-w-sm p-1 no-underline text-black" to="/">Min baggrund</Link> */}

            <Link className="max-w-sm p-1 no-underline border text-black hover:border-b-black max-md:ml-0 ml-12" to="/kontakt">Kontakt</Link>
          </div>
      
        
    </div>
  );
};

export default NavBar;
