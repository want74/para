import { Link } from "react-router-dom";

function Topbar(props) {
    return (
        <div className="flex justify-between w-11/12 mx-auto mt-4">
              <div className="w-[48px] h-[48px] rounded-full  bg-black px-[15px] py-[15px]">
                  <img src="img/search.svg" alt="search" className="w-full"/>
              </div>
              <div className="bg-gray px-3 py-[4px] flex rounded-full">
                  <img src="../img/Logo.svg" className="w-full my-auto" alt="BoonStud"/>
              </div>
              <Link to={process.env.PUBLIC_URL+"/auth"}>
                <div className="flex">
                    <img src="../img/people.svg" className="w-full my-auto" alt="BoonStud"/>
                </div>
              </Link>
          </div>
    );
  }
  export default Topbar;
  