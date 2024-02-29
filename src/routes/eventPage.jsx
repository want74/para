import Concert from '../components/concert'
import Topbar from '../topbar';
import BottomBar from '../bottomBar'

// const bg_image = {
//     backgroundImage: 'url('+props.concert_img+')',
// }

export default function eventPage() {
    return (
        <>
        <div class="grid gap-y-[4px]">
            {/* <div style={bg_image} class="b bg-no-repeat bg-cover h-[170px] w-full rounded-[20px]"></div> */}
            <div class="w-[calc(11/12*100vw)] h-[170px] bg-black opacity-50 rounded-[20px] absolute mt-[0px]"></div>
            <h1 class="text-white text-[16px] font-[600] absolute mt-[36%] ml-4">Сила первых</h1>
            <div class="flex justify-between py-[4px] gap-2">
                <div class="bg-gray flex gap-2 rounded-full px-[8px] w-full">
                    <img src="img/ppos.svg" class="w-[32px]" alt=""/>
                    <p class="text-[12px] my-auto">PPOS SVFU</p>
                </div>
                <div class="bg-gray flex gap-2 rounded-full px-[8px] w-full">
                    <img src="img/geo.svg" class="w-[32px]" alt=""/>
                    <p class="text-[12px] my-auto">Ус Хатын</p>
                </div>
            </div>
        </div>
        <h1 class="text-[16px] font-[600px]">
            О событии
        </h1>
        <p class="text-[12px] font-[500]">
            Сила первых – это мероприятие для первокурсников, организованное первичной профсоюзной организацией студентов СВФУ. Оно нацелено на то, чтобы сплотить студентов, которые впервые вошли в новую ступень жизни
        </p>
        <hr class="text-black opacity-30"/>
        <h1 class="text-[16px] font-[600px]">
            Информация
        </h1>
        <div class="grid gap-y-2 w-2/3 text-[12px] font-[500]">
            <div class="flex justify-between">
                <p class="text-black opacity-70 font-[400]">Дата</p>
                <p>6 сентября, 2023 год</p>
            </div>
            <div class="flex justify-between">
                <p class="text-black opacity-70 font-[400]">Начало</p>
                <p>12:00</p>
            </div>
            <div class="flex justify-between">
                <p class="text-black opacity-70 font-[400]">Возраст</p>
                <p>18+</p>
            </div>
            <div class="flex justify-between">
                <p class="text-black opacity-70 font-[400]">Стоимость</p>
                <p class="text-blue font-[600]">500 ₽ </p>
            </div>
        </div>
        <a href="#">
            <button class="text-center w-full flex py-[20px] rounded-[20px] bg-blue">
                <p class="mx-auto text-white">
                    Купить билет
                </p>
            </button>
        </a>
    </>
    );
  }