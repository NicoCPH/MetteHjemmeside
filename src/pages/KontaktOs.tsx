import { FunctionComponent, useCallback } from "react";
import NavBar from "../Components/Navbar";

const KontaktOs: FunctionComponent = () => {
  return (
    <div className="relative w-full text-left text-9xl text-gray-100 font-cambay">
      <div className="relative top-[0px] left-[0px] ">
        <NavBar></NavBar>
        <img
          className="relative top-[0px] left-[0px] w-full object-cover"
          alt=""
          src="./mehdimessrrouyduzeaa8w0unsplash-1@2x.png"
        />
        <img
          className="absolute top-[3.3vw] max-md:top-[36px] left-[0px] w-full"
          alt=""
          src="./rectangle-5.svg"
        />
        <div className="absolute max-lg:top-[12vw] top-[8vw] left-[7vw] text-gainsboro-100">
          <b className="left-[0px] max-w-6/12 text-[4vw] ">
            Kontakt os
          </b>
        </div>
      </div>
      {/* Section 1 */}
      <div className="relative w-10/12 max-md:w-full my-0 mx-auto grid grid-cols-8 pb-44 pt-16 max-md:pt-5  max-md:pb-16  ">
        <div className="max-md:ml-5 col-span-6 max-md:col-span-5">
          <h3 className="text-[2vw] max-md:text-[3vw]">Hjælp til dit helbred: <p className="m-0 text-[1.5vw] max-md:text-[2.5vw]">
          Individuel rådgivning, forskellige løsninger og erfaringsudveksling
          </p>
            </h3>
          <span className="text-[1vw] max-md:text-[3vw]">
            <p className="m-0 w-10/12">
              Vi er en gruppe af sundhedsfaglige, behandlere og eksperter, som søger at finde løsninger og dele dem, så vi på sigt kan forebygge,
               at skaderne udvikler sig til kroniske tilstande.
            </p>
            <p className="mt-4 w-10/12">
              Den første, du møder, er Mette Kenfelt - som står for en indledende snak.
               Herefter arbejder vi videre med konkrete tiltag og behandlingsmuligheder.
                Du skal ikke regne med et hurtigt fix af kroppen - men i stedet give dine celler og krop tid og chance for at blive bygget op igen.
            </p>
          </span>
        </div>
        <img
          className="relative max-md:w-full w-10/12 self-center max-md:mr-5 col-span-3"
          alt=""
          src="./image-1@2x.png"
        />
      </div>


      <div className="max-md:w-10/12 w-8/12 mx-auto my-0">
        <h3 className=" max-md:text-[3vw]">Kontakt os gerne, hvis du ønsker mere information om Second Opinion</h3>
        <div className=" w-4/12">
          <p className="m-0  max-md:text-[3vw]">
            Kontakt info:
            <p className="m-0">

              <a
                href="mailto: kontakt@second-opinion.nu"
                target="_blank"
                className="text-[1.25vw]  max-md:text-[3vw] text-black"
              >
                <span className="no-underline">
                  kontakt@second-opinion.nu
                </span>
              </a>
            </p>
          </p>
        </div>
      </div>

      <div className="relativ text-4xl text-center pt-32 max-md:text-[2vw]">
        Copyright © 2022 Mette Kenfelt
      </div>
      {/* _________ */}
      {/* <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[2180px]"
        alt=""
        src="/rectangle-1.svg"
      />
      <b className="absolute top-[675px] left-[117px] tracking-[-0.02em] inline-block w-[817px] h-[295px]">
        Vi er en gruppe af sundhedsfaglige, behandlere og eksperter, som søger
        at finde løsninger og dele dem, så vi på sigt kan forebygge, at skaderne
        udvikler sig til kroniske tilstande.
      </b>
      <b className="absolute top-[1109px] left-[1138px] tracking-[-0.02em] inline-block text-black w-[694px] h-[450px]">
        Den første, du møder, er Mette Kenfelt - som står for en indledende
        snak. Herefter arbejder vi videre med konkrete tiltag og
        behandlingsmuligheder. Du skal ikke regne med et hurtigt fix af kroppen
        - men i stedet give din celler og krop tid og chance for at blive bygget
        op igen.
      </b>
       */}
      {/* 
      <div className="absolute top-[589px] left-[1268px] w-[509.3px] h-[468px]">
        <img
          className="absolute top-[0px] left-[0px] w-[509.3px] h-[468px] object-cover"
          alt=""
          c"
        />
      </div>
      <div className="absolute top-[1101px] left-[117px] w-[710.99px] h-[317px] text-[36px] text-[inherit]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-200 w-[710.99px] h-[317px]" />
        <b className="absolute top-[64px] left-[77px] tracking-[-0.02em] inline-block w-[630px] h-[164px]">
          <p className="m-0">
            Kontakt info:
            <a
              className="text-[inherit]"
              href="mailto:kontakt@second-opinion.nu"
              target="_blank"
            >
              <span className="[text-decoration:underline]">
                kontakt@second-opinion.nu
              </span>
            </a>
          </p>
          <p className="m-0">Tlf. 22 67 41 40</p>
        </b>
      </div> */}
    </div>
  );
};

export default KontaktOs;
