import React from 'react'
import { Link } from 'react-router-dom'

export default function auth() {
  return (
    <>
    <div className="grid gap-y-[60px] justify-items-center">
        <div className="flex"></div>
        <div className="flex">
            <img src="../img/Logo.svg" className="w-full" alt="BoonStud"/>
        </div>
        <div className="w-[328px] grid gap-y-[32px]">
            <div className="grid gap-y-[12px] text-center">
                <h1 className="text-[24px] font-[600]">
                    Войдите в BoonStud – или зарегистрируйтесь
                </h1>
                <p className="text-[16px] font-[500]">
                    Через Leader-ID или номер телефона – как удобно
                </p>
            </div>
            <div className="grid gap-y-[8px] text-[16px] font-[500]">
                <Link to="tel_auth">
                    <button className="w-full h-[56px] bg-gray rounded-[20px]">
                        Войти с номером телефона
                    </button>
                </Link>
                <Link to="#">
                    <button className="w-full h-[56px] bg-gray rounded-[20px]">
                        Войти с  Leader ID
                    </button>
                </Link>
            </div>
            <div>
                <p className="text-[12px] text-center font-[300]">Нажимая войти, Вы автоматически принимаете
                    <a href="#" className="text-blue">политику конфиденциальности</a></p>
            </div>
        </div>
    </div>
  </>
  )
}
