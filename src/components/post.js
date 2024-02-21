function Post(props) {
    return (
        <div className="bg-gray grid gap-y-[12px] px-[8px] rounded-[12px]">
            <div className="flex justify-between py-[4px]">
                <div className="bg-white flex gap-2 rounded-full px-[8px]">
                    <img src={props.author_avatar} className="w-[32px]" alt=""/>
                    <p className="text-[12px] my-auto">{props.author}</p>
                </div>
                <button className="bg-blue rounded-full px-[8px] py-[5px] text-white text-[12px] font-[500]">
                    Подписаться
                </button>
            </div>
            <img src={props.img} alt="peoples" className="w-full rounded-[12px]"/>
            <div className="grid gap-y-[8px] mb-2">
                <h1 className="text-[16px] font-[600]">{props.header}</h1>
                <p className="text-[12px] font-[400]">{props.text}</p>
            </div>
        </div>
    );
  }
  
  export default Post;
  