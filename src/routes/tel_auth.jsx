import React from 'react'

export default function tel_auth() {
  return (
    <div class="grid gap-y-[60px] justify-items-center">
        <div class="flex"></div>
        <div class="flex">
        <img src="../img/Logo.svg" class="w-full" alt="BoonStud"/>
        </div>
        <div class="w-[328px] grid gap-y-[32px]">
            <div class="grid gap-y-[12px] text-center">
                <h1 class="text-[24px] font-[600]">
                    Введите номер телефона
                </h1>
                <p class="text-[16px] font-[500]">
                    Мы пришлем вам сообщение с кодом для входа в приложение
                </p>
            </div>
            <div class="grid gap-y-[24px] text-[16px] font-[500]">
                <input type="tel" class="w-full h-[56px] border-[1px] border-[#EEEEEE] rounded-[20px] text-[16px] font-[400] text-[#A1A9B8]"/>
                <a href="../main.html">
                    <button class="w-full h-[56px] bg-blue text-white rounded-[20px]">
                        Далее
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}
