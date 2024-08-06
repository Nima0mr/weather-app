import { memo } from "react";
import { useStore } from "../../shared/components/store";
import Navbar from "../../shared/components/Navbar/Navbar"
import { ReactComponent as Fog } from "../../shared/images/fog-img.svg";
const Layout = memo(() => {
  //--------------------------------------------------------
//   const weatherIcon = (type) => {
//     // find a way to choose wether icons dynamicly
//   };

  return (
    <div>
      <section className="py-[27px] px-[13px] bg-dark-blue-100">
        <Navbar></Navbar>
        <section className="flex justify-between px-4">
          <div>
            <div>
              <h1 className="font-segoe font-black text-[96px] h-[114px] text-white">
                {useStore((state) => state.weatherDegree)}
                <span className="text-h2 font-semibold relative bottom-[67px] right-0.5">
                  c<span className=" text-[35px] font-black relative left-1.5">°</span>
                </span>
              </h1>
            </div>
            <div className="font-segoe font-semibold text-white text-body-3 pt-3">{useStore((state) => state.weatherType)}</div>
          </div>
          <Fog className="self-end"></Fog>
        </section>
      </section>
    </div>
  );
});

export default Layout;
