import React, { useEffect } from "react";
import "./cardPerfil.css";

export const CardPerfil = () => {
  //multiplico la rotacion por la cantidad de letras
  const letras = () => {
    let text = document.querySelector(".spinning-text p");
    text.innerHTML = text.innerText
      .split("")
      .map((char, i) => `<b style="transform:rotate(${i * 7}deg">${char}</b>`)
      .join(" ");
  };

  useEffect(() => {
    letras();
  }, []);

  return (
    <div className="tarjeta-padre">
      <div className="w-[250px] h-[350px] bg-slate-300 rounded-md flex items-center justify-center relative tarjeta">
        <div className="tarjeta-frente">
          <div className="flex flex-col items-center justify-center gap-3 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-full">
            <div className="spinning-text-wrapper">
              <div className="spinning-text">
                <p>NO - VERIFICADO</p>
              </div>
              <div className="w-[50px] h-[50px] rounded-full border-slate-300 border-[1px] shadow-interno"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
            <h3>Anónimo</h3>
            <small className="text-[10px] text-slate-200">
              PRUEBA COMO SER UNICO
            </small>
            </div>
          </div>
          <div className="flex absolute -rotate-90 w-[350px] justify-between top-[50%] left-[90%] -translate-y-[50%] -translate-x-[50%] px-4">
            <div className="flex flex-col">
              <span className=" text-[10px]">Telefono</span>
              <div className="text-[11px]">NO VERIFICADO</div>
            </div>
            <div className="flex flex-col">
              <span className=" text-[10px]">Email</span>
              <span className="text-[11px] inline-block">NO VERIFICADO</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-200">Registrado</span>
              <span className="text-[11px] inline-block">JUN. 29, 2023</span>
            </div>
          </div>
        </div>

        <div className="tarjeta-dorso bg-slate-300 overflow-hidden">
            <div className="w-[350px] bg-slate-500 -rotate-90 absolute top-[50%] left-6 -translate-y-[50%] -translate-x-[50%] p-2">
              <p className="text-[12px] text-slate-300 w-[300px]">Internet identity que nos proporciona IC con su sistema de logue</p>
            </div>
        </div>
      </div>
    </div>
  );
};
