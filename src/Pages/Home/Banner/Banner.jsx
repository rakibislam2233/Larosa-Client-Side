import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";

const Banner = () => {
   /** here is a keen slider   */
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (

     /** Banner Section Start  */
      <div ref={sliderRef} className="keen-slider cursor-pointer">
        <div className="keen-slider__slide number-slide1">
          <div
            style={{
              backgroundImage: `url("https://i.postimg.cc/G2LJJk9M/banner1.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode:"multiply"
            }}
            className={`bg-gray-500 w-full h-screen`}
          >
           <div className="w-full max-w-6xl mx-auto h-full flex items-center p-5">
          <div className="space-y-4">
          <h2 className="text-xl text-slate-300 uppercase font-semibold">Welcome to Larosa</h2>
            <h2 className="text-6xl text-slate-200">Explore Our Menu</h2>
           <Link className="block " to="/menu"><button className="py-3 px-5 bg-teal-500 rounded-full  text-white hover:bg-rose-600 duration-500">Check out our Menu</button></Link>
          </div>
           </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2">

          <div
            style={{
              backgroundImage: `url("https://i.postimg.cc/MHSr1cVt/banner2.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={`bg-[#212428]   w-full h-screen`}
          >
            <div className="w-full max-w-6xl mx-auto h-full flex items-center p-5">
          <div className="space-y-4">
          <h2 className="text-xl text-slate-300 uppercase font-semibold">Welcome to Larosa</h2>
            <h2 className="text-6xl uppercase text-slate-200">Steakhouse+ bar</h2>
           <Link className="block " to="/menu"><button className="py-3 px-5 bg-teal-500 rounded-full  text-white hover:bg-rose-600 duration-500">Check out our Menu</button></Link>
          </div>
           </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3">

          <div
            style={{
              backgroundImage: `url("https://i.postimg.cc/MTqtPC3m/banner3.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={`bg-[#212428]   w-full h-screen`}
          >
             <div className="w-full max-w-6xl mx-auto h-full flex items-center p-5">
          <div className="space-y-4">
          <h2 className="text-xl text-slate-300 uppercase font-semibold">Welcome to Larosa</h2>
            <h2 className="text-6xl text-slate-200">Explore Our Menu</h2>
           <Link className="block " to="/menu"><button className="py-3 px-5 bg-teal-500 rounded-full  text-white hover:bg-rose-600 duration-500">Check out our Menu</button></Link>
          </div>
           </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4">

          <div
            style={{
              backgroundImage: `url("https://i.postimg.cc/Yq2dkB34/banner4.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={`bg-[#212428]   w-full h-screen`}
          >
             <div className="w-full max-w-6xl mx-auto h-full flex items-center p-5">
          <div className="space-y-4">
          <h2 className="text-xl text-slate-300 uppercase font-semibold">Welcome to Larosa</h2>
            <h2 className="text-6xl uppercase text-slate-200">Steakhouse+ bar</h2>
           <Link className="block " to="/menu"><button className="py-3 px-5 bg-teal-500 rounded-full  text-white hover:bg-rose-600 duration-500">Check out our Menu</button></Link>
          </div>
           </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide5">

          <div
            style={{
              backgroundImage: `url("https://i.postimg.cc/mg5X8p7P/banner5.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={`bg-[#212428]   w-full h-screen`}
          >
             <div className="w-full max-w-6xl mx-auto h-full flex items-center p-5">
          <div className="space-y-4">
          <h2 className="text-xl text-slate-300 uppercase font-semibold">Welcome to Larosa</h2>
            <h2 className="text-6xl text-slate-200">Explore Our Menu</h2>
           <Link className="block " to="/menu"><button className="py-3 px-5 bg-teal-500 rounded-full  text-white hover:bg-rose-600 duration-500">Check out our Menu</button></Link>
          </div>
           </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide7">

          <div
            style={{
              backgroundImage: `url("https://i.postimg.cc/J4h5vcrZ/banner7.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={`bg-[#212428]  w-full h-screen`}
          >
             <div className="w-full max-w-6xl mx-auto h-full flex items-center p-5">
          <div className="space-y-4">
          <h2 className="text-xl text-slate-300 uppercase font-semibold">Welcome to Larosa</h2>
            <h2 className="text-6xl text-slate-200">Explore Our Menu</h2>
           <Link className="block " to="/menu"><button className="py-3 px-5 bg-teal-500 rounded-full  text-white hover:bg-rose-600 duration-500">Check out our Menu</button></Link>
          </div>
           </div>
          </div>
        </div>
      </div>
       /** Banner Section End */
  );
};

export default Banner;
