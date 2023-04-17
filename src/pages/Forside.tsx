import { FunctionComponent } from "react";
import NavBar from "../Components/Navbar";

const Forside: FunctionComponent = () => {

  return (
    <div className="w-full text-13xl text-gray-100 font-cambay">
      {/* Header */}
      <div className="relative top-[0px] left-[0px] ">
        <NavBar></NavBar>
        <img
          className="relative top-[0px] left-[0px] w-full object-cover"
          alt=""
          src="/image-6@2x.png"
        />
        <img
          className="absolute top-[3.8vw] max-md:top-[36px] left-[0px] w-full"
          alt=""
          src="./rectangle-51.svg"
        />
        <div className="absolute max-lg:top-[12vw] top-[8vw] left-[124px] text-gainsboro-100">
          <b className="left-[0px] max-w-6/12 text-[4vw] ">
            Second Opinion
          </b>
          <div className="left-[16px] text-[1.5vw]">
            <span>{`- `}</span>
            <b>sammen bliver vi bedre</b>
          </div>
        </div>
      </div>
      {/* _______ */}

      <div className="relative w-8/12 my-0 mx-auto flex max-md:pb-2  max-md:pt-5 pt-3">
        <b className="text-[1.25vw] max-md:text-[2vw]"><p>Second Opinion er for dig, der har brug for en ny vinkel på dit helbred. Som har mod på at tage medansvar for din sundhed - og modsat lade dine erfaringer komme andre til gode.

          Vi lægger vægt på videnskabeligt funderede metoder og ny viden, samt naturlige, giftfrie og opbyggende midler. </p></b>

      </div>


      {/* Section 1 */}
      <div className="relative w-9/12 my-0 mx-auto flex pb-44 max-md:pb-16  max-md:pt-5 pt-12">
        <div>
          <h3 className="relative mb-1 max-md:text-[4vw]">
            Sunde celler giver en sund krop -
          </h3>
          <b className="text-[1.25vw] max-md:text-[2vw]">
            <p className="m-0 w-7/12">
              For kroppen består dybest set af billioner af celler. Desværre har
              cellerne en lang række udfordringer i dag, som kan give vidt
              forskellige symptomer og føre til en lang række skader.
            </p>
            <p className="m-0 w-7/12">
              Det kan være du oplever et skrantende helbred, der står i stampe -
              eller symptomer, der er svære at få hjælp til. Det kan også være du
              føler dig overvældet og alene om at finde rundt i en sundhedsjungle.
            </p>
          </b>
        </div>
        <img
          className="relative w-[13vw]  max-md:hidden self-center"
          alt=""
          src="./vector1.svg"
        />
      </div>
      {/* _________ */}

      {/* Section 2 */}
      <div className="relative pb-44 max-md:pb-16">

        <div className="relative grid grid-cols-2 bg-white">
          <div className="p-[10%] max-md:p-[4vw] ">
            <b className="text-[1.25vw] max-md:text-[1.5vw]">
              <p className="m-0">
                Second Opinion er for dig, der har brug for en ny vinkel på dit
                helbred. Som har mod på at tage medansvar for din sundhed - og
                modsat lade dine erfaringer komme andre til gode.
              </p>
              <p className="m-0">
                Vi lægger vægt på videnskabeligt funderede metoder og ny viden, samt
                naturlige, giftfrie og opbyggende midler.
              </p>
            </b>
          </div>
          <img
            className="relative w-11/12 pl-[8.3%] object-center overflow-auto"
            alt=""
            src="./olenasergienkoharrub7lfwgunsplash-1@2x.png"
          />

        </div>
      </div>


      {/* _______ */}

      <div className="relative text-4xl max-md:text-[2vw] bottom-0 text-center">
        Copyright © 2022 Mette Kenfelt
      </div>

      {/* Footer */}
      {/* <div className="absolute top-[1897px] left-[260px] w-[1400px] h-[155px] text-6xl text-lightslategray font-atkinson-hyperlegible">
        <div className="absolute top-[73px] left-[305px] w-[790px] h-[82px]">
          <div className="absolute top-[0px] left-[0px] w-[790px] h-[31px]">
            <div className="absolute top-[0px] left-[0px]">Home</div>
            <div className="absolute top-[0px] left-[96px]">Min baggrund</div>
            <div className="absolute top-[0px] left-[279px]">Sitemap</div>
            <div className="absolute top-[0px] left-[401px]">
              Persondatapolitik
            </div>
            <div className="absolute top-[0px] left-[624px]">
              Privatlivspolitik
            </div>
          </div>
          <div className="absolute top-[51px] left-[224px]">
            Copyright © 2022 Mette Kenfelt
          </div>
        </div>
      
        <div className="absolute top-[-0.5px] left-[-0.5px] box-border w-[1401px] h-px border-t-[1px] border-solid border-gray-200" />
      </div> */}


    </div>

  );
};

export default Forside;
