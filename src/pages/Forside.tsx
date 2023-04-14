import { FunctionComponent, useCallback } from "react";

const Forside: FunctionComponent = () => {
  const onLoginTextClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onMinBaggrundTextClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onKontaktOsTextClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <div className="relative w-full h-[2180px] text-left text-13xl text-gray-100 font-cambay">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[2180px]"
        alt=""
        src="/rectangle-1.svg"
      />
      <div className="absolute top-[1216px] left-[5px] w-[1920px] h-[464px] text-[26px]">
        <img
          className="absolute top-[7px] left-[985px] w-[935px] h-[457px] object-cover"
          alt=""
          src="/olenasergienkoharrub7lfwgunsplash-1@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] bg-white w-[1002px] h-[464px]" />
        <b className="absolute top-[calc(50%_-_110px)] left-[140px] tracking-[-0.02em] inline-block w-[737.57px] h-[276px]">
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
      <div className="absolute top-[calc(50%_-_419px)] left-[258px] w-[941px] h-[328px]">
        <b className="absolute top-[calc(50%_-_164px)] left-[0px] tracking-[-0.02em] inline-block w-[941px] h-[259.95px]">
          Sunde celler giver en sund krop -
        </b>
        <b className="absolute top-[calc(50%_-_95.95px)] left-[0px] text-[24px] tracking-[-0.02em] inline-block w-[941px] h-[259.95px]">
          <p className="m-0">
            For kroppen består dybest set af billioner af celler. Desværre har
            cellerne en lang række udfordringer i dag, som kan give vidt
            forskellige symptomer og føre til en lang række skader.
          </p>
          <p className="m-0">
            Det kan være du oplever et skrantende helbred, der står i stampe -
            eller symptomer, der er svære at få hjælp til. Det kan også være du
            føler dig overvældet og alene om at finde rundt i en sundhedsjungle.
          </p>
        </b>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[544px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[544px] object-cover"
          alt=""
          src="/image-6@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[544px]"
          alt=""
          src="/rectangle-51.svg"
        />
      </div>
      <div className="absolute top-[149px] left-[124px] w-[771px] h-[185.37px] text-gainsboro-100">
        <div className="absolute top-[122px] left-[16px] tracking-[-0.02em] inline-block w-[737.53px] h-[63.37px]">
          <span>{`- `}</span>
          <b>sammen bliver vi bedre</b>
        </div>
        <b className="absolute top-[0px] left-[0px] text-77xl tracking-[-0.02em] inline-block w-[771px] h-[134.66px]">
          Second Opinion
        </b>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[72.37px] text-4xl">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[1920px] h-[72px]" />
        <b
          className="absolute top-[21px] left-[1790px] tracking-[-0.02em] inline-block w-[96.13px] h-[51.37px] cursor-pointer"
          onClick={onLoginTextClick}
        >
          Login
        </b>
        <div className="absolute top-[19px] left-[1272px] w-[351px] h-[53px]">
          <b
            className="absolute top-[0px] left-[0px] tracking-[-0.02em] inline-block w-[159px] h-[51px] cursor-pointer"
            onClick={onMinBaggrundTextClick}
          >
            Min baggrund
          </b>
          <b
            className="absolute top-[2px] left-[192px] tracking-[-0.02em] inline-block w-[159px] h-[51px] cursor-pointer"
            onClick={onKontaktOsTextClick}
          >
            Kontakt os
          </b>
        </div>
      </div>
      <div className="absolute top-[1897px] left-[260px] w-[1400px] h-[155px] text-6xl text-lightslategray font-atkinson-hyperlegible">
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
      </div>
      <img
        className="absolute h-[9.37%] w-[16.38%] top-[32.57%] right-[11.95%] bottom-[58.06%] left-[71.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
      <img
        className="absolute h-[2%] w-[3.81%] top-[0.64%] right-[94.47%] bottom-[97.36%] left-[1.72%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector2.svg"
      />
    </div>
  );
};

export default Forside;
