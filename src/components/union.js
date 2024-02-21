function Union(props) {
    return (
        <div className="bg-gray flex px-[8px] rounded-[12px] justify-around py-3">
            <div className="flex">
                <img src={props.union_avatar} alt="imko" className="w-full my-auto"/>
            </div>
            <div className="grid gap-y-[8px] mb-2">
                <h1 className="text-[12px] font-[600]">{props.union_name}</h1>
                <p className="text-[10px] font-[400]">{props.union_desc}</p>
                <div className="flex justify-around w-2/3">
                    <p className="text-[12px] font-[500] text-blue">Подписаться</p>
                    <div className="rounded-full h-[3px] w-[3px] bg-black my-auto"></div>
                    <p className="text-[9px] font-[600] my-auto">{props.union_subs}</p>
                </div>
            </div>
        </div>
    );
  }
  export default Union;
  