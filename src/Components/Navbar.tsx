import { FunctionComponent } from "react";
import {
  Link
} from "react-router-dom";

const NavBar: FunctionComponent = ({


}) => {
  return (
    <div className="relative grid grid-cols-12 pt-[1vw] max-md:pt-1 text-[1.4vw] max-md:text-[14px] ">
      <img
        className="relative col-span-2 max-md:hidden left-[35px] bottom-1 w-[4vw]"
        alt=""
        src="./vector2.svg"
        />
        <div className="relative gap-10 flex flex-wrap max-sm:float-none max-sm:justify-center mx-auto font-semibold col-span-10">
            <Link className="max-w-sm p-1 no-underline text-black " to="/">Hjem</Link>
{/* 
            // <Link className="max-w-sm p-1 no-underline text-black" to="/">Min baggrund</Link> */}

            <Link className="max-w-sm p-1 no-underline border text-black hover:border-b-black max-md:ml-0 ml-12" to="/kontakt">Kontakt</Link>
          </div>
      
        
    </div>
  );
};

export default NavBar;
