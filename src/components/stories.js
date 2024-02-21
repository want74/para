function Post(props) {
    return (
        <div className="grid gap-y-[4px]">
            <div className="">
                <img src={props.img} alt={props.alt} className="w-full"/>
            </div>
            <p className="text-[10px] font-[600] text-center">{props.text}</p>
        </div>
    );
  }
  
  export default Post;
  