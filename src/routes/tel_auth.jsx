import React from 'react'

export default function tel_auth() {
  return (
    <div className="grid gap-y-[60px] justify-items-center">
        <div className="flex"></div>
        <div className="flex">
        <img src="../img/Logo.svg" className="w-full" alt="BoonStud"/>
        </div>
        <div className="w-[328px] grid gap-y-[32px]">
            <div className="grid gap-y-[12px] text-center">
                <h1 className="text-[24px] font-[600]">
                    Введите номер телефона
                </h1>
                <p className="text-[16px] font-[500]">
                    Мы пришлем вам сообщение с кодом для входа в приложение
                </p>
            </div>
            <div className="grid gap-y-[24px] text-[16px] font-[500]">
                <input type="tel" className="w-full h-[56px] border-[1px] border-[#EEEEEE] rounded-[20px] text-[16px] font-[400] text-[#A1A9B8]"/>
                <a href="../main.html">
                    <button className="w-full h-[56px] bg-blue text-white rounded-[20px]">
                        Далее
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}
