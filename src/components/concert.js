function Concert(props) {
    const bg_image = {
        backgroundImage: 'url('+props.concert_img+')',
    }
    const way = props.concert_redirect
    return (
        <a href={way}>
            <div className="grid gap-y-[4px]">
                <div style={bg_image} className="bg-no-repeat bg-cover h-[170px] w-full rounded-[20px]"></div>
                <div className="w-[calc(11/12*100vw)] h-[170px] bg-black opacity-50 rounded-[20px] absolute mt-[0px]"></div>
                <h1 className="text-white text-[16px] font-[600] absolute mt-[36%] ml-4">{props.concert_name}</h1>
                <div className="rounded-full px-2 py-1 bg-gray w-max absolute mt-[2%] ml-4">{props.concert_date}</div>
                <p className="text-[12px] font-[500] text-blue text-end"><span className="bg-black text-white px-2 py-1 rounded-full">{props.concert_peoples} чел.</span> идут на событие</p>
            </div>
        </a>
    );
  }
  export default Concert;
  