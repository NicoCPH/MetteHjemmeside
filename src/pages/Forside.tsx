import { FunctionComponent } from "react";
import NavBar from "../Components/Navbar";

const Forside: FunctionComponent = () => {

  return (
    <div className="w-full flex flex-col text-13xl text-gray-100 font-cambay">
      {/* Header */}
      <div className="relative top-[0px] left-[0px] ">
        <NavBar></NavBar>
        <img
          className="relative top-[0px] left-[0px] w-full object-cover"
          alt=""
          src="/image-6@2x.png"
        />
        <img
          className="absolute top-[3.3vw] max-md:top-[36px] left-[0px] w-full"
          alt=""
          src="./rectangle-51.svg"
        />
        <div className="absolute max-lg:top-[12vw] top-[8vw] left-[7vw] text-gainsboro-100">
          <b className="left-[0px] max-w-6/12 text-[4vw] ">
            Second Opinion
          </b>
          <div className="left-[16px] text-[1.5vw] max-md:text-[2.2vw]">
            <span>{`- `}</span>
            <b>sammen bliver vi bedre</b>
          </div>
        </div>
      </div>
      {/* _______ */}


      {/* Section 1 */}
      <div>

        <div className="relative w-9/12 my-0 mx-auto max-md:text-center flex pb-44 max-md:pb-16  max-md:pt-2 pt-10">
          <div>
            <span className="text-[1vw]  max-md:text-[3vw]">
              <p className="mt-2 w-7/12 max-md:w-full max-md:my-0 max-md:mx-auto">

                Second Opinion er for dig, der har brug for en ny vinkel på dit helbred. Som har mod på at tage medansvar for din sundhed
                - og modsat lade dine erfaringer komme andre til gode.
              </p>
              <p className="mt-2 max-md:w-full w-7/12 max-md:my-0 max-md:mx-auto">
                Vi lægger vægt på videnskabeligt funderede metoder og ny viden, samt naturlige, giftfrie og opbyggende midler.
              </p>
            </span>
          </div>
          <img
            className="relative w-[12vw]  max-md:hidden self-center"
            alt=""
            src="./vector1.svg"
          />
        </div>
        {/* _________ */}

        {/* Section 2 */}
        <div className="relative pb-44 max-md:pb-16">

          <div className="relative grid grid-cols-2 max-sm:grid-cols-2  max-sm:bg-inherit bg-white">
            <div className="p-[10%] pb-0 max-md:p-[4vw] max-sm:bg-white text-[1vw] max-sm:text-[2vw]">

              <p className="m-0 max-md:text-[2.5vw]">
                <b className="text-[1.25vw] max-sm:text-[3vw]">Sunde celler giver en sund krop -
                </b>  for kroppen består dybest set af billioner af celler. Desværre har cellerne en lang række udfordringer i dag, som kan give vidt forskellige symptomer og føre til en lang række skader
              </p>
              <p className="m-0 max-md:text-[2.5vw]">
                Det kan være, du oplever et skrantende helbred, der står i stampe - eller symptomer, der er svære at få hjælp til. Det kan også være, du føler dig overvældet og alene om at finde rundt i en sundhedsjungle.
              </p>
              <p className=" max-md:text-[2.5vw]">Kontakt os gerne for mere information.</p>

            </div>
            <img
              className="relative  max-sm:h-[21vh] w-[91%] pl-[8.3%] object-center"
              alt=""
              src="./olenasergienkoharrub7lfwgunsplash-1@2x.png"
            />

          </div>
        </div>

      </div>

      {/* _______ */}

      <div className="max-md:absolute relative text-4xl max-md:text-[2vw] bottom-0 text-center self-center">
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
