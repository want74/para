export default function NavBtn(props) {
    if(props.status=="active"){
        return (
            <>
              <div className="grid gap-y-[4px] text-center text-white font-[500] text-[9px] w-16">
                      <div className="rounded-full bg-blue w-[48px] h-[48px] flex mx-auto">
                          <img src={props.img} className="w-1/2 mx-auto my-auto" alt="home"/>
                      </div>
                      <p>{props.text}</p>
              </div>
            </>
          );
    }else{
        return (
            <>
                <div className="grid gap-y-[4px] text-center text-white font-[500] text-[9px] w-16">
                        <div className="rounded-full lol w-[48px] h-[48px] flex mx-auto">
                            <img src={props.img} className="w-1/2 mx-auto my-auto" alt="home"/>
                        </div>
                        <p>{props.text}</p>
                </div>
            </>
            );
    }
  }