import { FunctionComponent, useCallback } from "react";

const KontaktOs: FunctionComponent = () => {
  const onLoginTextClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onMinBaggrundTextClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onKontaktOsText1Click = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <div className="relative w-full h-[2180px] text-left text-9xl text-gray-100 font-cambay">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[2180px]"
        alt=""
        src="/rectangle-1.svg"
      />
      <div className="absolute top-[1913px] left-[258px] w-[1400px] h-[155px] text-6xl text-lightslategray font-atkinson-hyperlegible">
        <div className="absolute top-[62px] left-[358px] w-[688px] h-[93px]">
          <div className="absolute top-[0px] left-[0px] w-[688px] h-[31px]">
            <div className="absolute top-[0px] left-[0px]">Hjem</div>
            <div className="absolute top-[0px] left-[110px]">Kontakt os</div>
            <div className="absolute top-[0px] left-[278px]">
              Persondatapolitik
            </div>
            <div className="absolute top-[0px] left-[522px]">
              Privatlivspolitik
            </div>
          </div>
          <div className="absolute top-[62px] left-[165px]">
            Copyright © 2023 Mette Kenfelt
          </div>
        </div>
        <div className="absolute top-[-0.5px] left-[-0.5px] box-border w-[1401px] h-px border-t-[1px] border-solid border-gray-200" />
      </div>
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
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[72px] text-4xl">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[1920px] h-[72px]" />
        <b
          className="absolute top-[19px] left-[1797px] tracking-[-0.02em] inline-block w-[96.13px] h-[51.37px] cursor-pointer"
          onClick={onLoginTextClick}
        >
          Login
        </b>
        <b
          className="absolute top-[21px] left-[1268px] tracking-[-0.02em] inline-block w-[159px] h-[51px] cursor-pointer"
          onClick={onMinBaggrundTextClick}
        >
          Min baggrund
        </b>
        <b
          className="absolute top-[20px] left-[1496px] tracking-[-0.02em] inline-block w-[159px] h-[51px] cursor-pointer"
          onClick={onKontaktOsText1Click}
        >
          Kontakt os
        </b>
        <img
          className="absolute h-[61.85%] w-[3.8%] top-[17.48%] right-[93.91%] bottom-[20.68%] left-[2.29%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </div>
      <div className="absolute top-[72px] left-[-4px] w-[1924px] h-[472px] text-77xl text-gainsboro-100">
        <img
          className="absolute top-[0px] left-[0px] w-[1924px] h-[472px] object-cover"
          alt=""
          src="/mehdimessrrouyduzeaa8w0unsplash-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[4px] w-[1920px] h-[472px]"
          alt=""
          src="/rectangle-5.svg"
        />
        <b className="absolute top-[85.45px] left-[121px] tracking-[-0.02em] inline-block w-[531px] h-[110.22px]">
          Kontakt os
        </b>
      </div>
      <div className="absolute top-[589px] left-[1268px] w-[509.3px] h-[468px]">
        <img
          className="absolute top-[0px] left-[0px] w-[509.3px] h-[468px] object-cover"
          alt=""
          src="/image-1@2x.png"
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
      </div>
    </div>
  );
};

export default KontaktOs;
