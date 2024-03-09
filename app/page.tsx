import Image from "next/image";
import Header from "./component/header";
import { Play }  from "./component/icon";
import { Nodes }  from "./component/icon";
import { Bolt }  from "./component/icon";


export default function Home() {
  return (
    <>
        <main className="flex min-h-screen flex-col items-center justify-between pt-3 p-5">
      <Header />

      <section className="w-full p-5 m-auto space-y-12 px-16 py-48 max-w-[80%]">
        <div className="grid grid-cols-5 gap-x-5">
          <div className="col-span-3">
            <div className="ml-16 flex gap-x-5 items-center ">
              <div className="flex">
                <div className="bg-[#f4f4f4] p-6 size-20  flex items-center justify-center rounded-full"><Bolt /></div>
                <div className="bg-primary -ml-3 p-6 size-20 flex items-center justify-center rounded-full"><Nodes /></div>
              </div>
              <h2 className="text-8xl"> <span></span>Analytics </h2>
            </div>
            
            <h2 className="text-8xl"> that <span className="text-[#b1b1b1]">helps you</span></h2>
          </div>
          <div className="col-span-2 relative h-full bg-accent min-w-[40%] p-7 rounded-2xl" style={{background: "url('/laptop-and-analytics2.png')", backgroundSize: "cover"}}>
            <div className="absolute -top-3 -left-4 size-9 p-3 bg-primary shadow-xl flex items-center justify-center rounded-full">
              <Play />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 !mt-3">
          <div className="col-span-1"></div>
        <div className="col-span-4 justify-end flex items-center gap-x-3">
          <span className="text-8xl">shape</span> 
          <div className="bg-accent size-20 p-2 rounded-full flex items-center justify-center">       
            <Image
              className="relative"
              src="/arrows.png"
              alt=""
              width={50}
              height={50}
              priority
            />
          </div> 
        <span className="text-8xl">the future</span>
        </div>
        </div>
      </section>

      <section className="bg-wht w-full p-5 rounded-[5rem] m-auto px-16 py-20">
        <div className="space-y-12  max-w-[85%] mx-auto">

        <div className="flex items-center justify-between">
          <h4 className="text-5xl w-[45%]">Your key to strategic success through analytics 
          </h4>

          <p className="w-[25%]">
            Ready for exciting, instanenous <br /> all-accessible insights in real time?
          </p>
        </div>

        <div className="flex gap-x-5">
          <div className="w-[60%] rounded-3xl bg-white min-h-[300px] pt-8 flex gap-x-10  pr-0 shadow-lg">
            <div className="pl-10 max-w-[40%]">
              <button className="bg-accent rounded-xl p-3 text-xs ">Setting up reports</button>

              <div className="pt-16">
              <h6 className="text-xl">Fast and easy access</h6>
              <h6 className="text-xl">to analytics</h6>

              <p className="text-sm text-[#b1b1b1] pt-5">One platform is a comprehensive
                system of solutins that will be the 
                first step towards digitalization of your business!
              </p>
              </div>
              
            </div>
            
            <div className="border-t border-l border-[#e6e4e4] p-5 rounded-tl-2xl w-full">
              <p>Sales statistic</p>
              <div className="space-y-5">
                <div className="flex gap-x-3">
                  <div className="flex gap-x-2 items-center">
                    <div className="p-2 bg-primary w-10 h-10 rounded-full"></div>
                    <div>
                      <span className="text-xs text-[#b1b1b1]">Total profit</span>
                      <div>
                        $ <span className="text-3xl">264,2k</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-wht rounded-2xl min-w-[33%] flex flex-col py-3 px-5 gap-y-2">
                    <span className="text-xs">Visitors</span>
                    <div className="bg-accent rounded">
                      <div className="w-[30%] bg-green-600 p-0.5 rounded"></div>
                    </div>

                    <div className="flex">
                      <span className="text-2xl">56k</span>
                      <span className="text-[9px] self-start text-green-500">+14%</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-3 border border-[#e6e4e4] rounded-2xl  p-3">
                  <p className="text-xs">Visit Statics</p>

                  <div className="flex w-full">

                  <div className="bg-primary text-white rounded-2xl w-[40%] flex py-3 px-3 gap-x-2">
                    <div className="flex flex-col gap-y-3">
                      <span className="text-xs">rate</span>
                      <span className="text-2xl">+58%</span>
                    </div>

                    <div className="flex w-[30%]">
                      <span className="text-[9px] self-start text-green-500">+14%</span>
                    </div>
                  </div>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
          <div className="w-[40%] rounded-2xl bg-blk text-white flex flex-col p-8 justify-between items-center shadow-lg">
            <div className="flex gap-x-3 justify-center">
              <div className="flex border rounded-3xl p-5 border-gray-800 w-1/2">
                <span className="w-12 h-12 rounded-full p-1 bg-wht">1</span>
                <span className="w-12 h-12 rounded-full p-1 bg-wht">1</span>
              </div>
              <div className="flex flex-col border rounded-3xl p-5 border-gray-800 w-1/2">
                <p className="text-xs">Transactions</p>
                <div className="self-end"><span className="text-[9px] self-start text-green-500">+14%</span></div>
                <span className="text-5xl">56k</span>
              </div>
            </div>

            <h5 className="text-xl">Widget Control</h5>

          <div className="text-[#b1b1b1] text-center text-sm">
                      <p>Reports provided are comprehensive overview </p>
                      <p>of important aspects of web analytics</p>
          </div>

          </div>


        </div>

        <div className="max-w-[55%] flex gap-x-5 m-auto items-center">
          <div className="flex gap-x-2">
            <span className="self-end">upto </span>
            <span className="text-8xl">45%</span>
          </div>
          <div>
            Increase your analytics efficiency by up to 45%. Unique algorithms provide insights from 
            data, reduce time for analysis and save time for making important, informed decisions.
          </div>
        </div>
        </div>


      </section>

      <section className="w-full p-5 rounded-[5rem] m-auto space-y-12 px-16 py-20 max-w-[85%] mx-auto">
        <div>
          <h2 className="text-9xl">Maximize <span className="text-[#b1b1b1]">efficiency</span> <br/ > With our initiative</h2>
        </div>
        <div className="flex justify-between">
          <div className="grid grid-cols-2">
              <div className="p-5 w-32 h-32 rounded-full bg-wht z-10 flex items-center justify-center">
                <Image
                  className="relative"
                  src="/energy.png"
                  alt=""
                  width={100}
                  height={50}
                  priority
                />
              </div>
              <div className="-ml-[10px] p-5 w-32 h-32 flex flex-col items-center justify-center rounded-full bg-accent">
                <p className="text-2xl">45%</p>
                <p className="text-sm text-center">system grow <br /> faster</p>
              </div>
          </div>
          <div className="bg-accent py-1 rounded-[3rem] max-h-[110px] max-w-[40%] overflow-hidden">
              <div className="overflow-hidden">
                  <span className="text-8xl whitespace-nowrap inline-block animate-marquee">analytics service</span>
              </div>
          </div>
        </div>

        <hr />

        <div className="flex justify-between">
          <p>
            Explore traffic sources, page behavior, conversions and more to gain deep insight <br />
            into your audience. With us, your business doesn&apos;t just adapt - it evolves.
          </p>
          <div className="space-x-3">
            <button className="bg-wht  text-sm rounded-xl py-3 px-8">Request a demo</button>
            <button className="bg-primary text-white text-sm rounded-xl py-3 px-8">Start for free</button>
          </div>
        </div>
      </section>

      <section className="bg-wht w-full relative rounded-[5rem] m-auto pl-16 pt-20 pb-20">
        <div className="space-y-12 mx-auto relative">
          <div className="grid grid-cols-3">
            <div className="col-span-1 ml-[120px]">
              <h3 className="text-3xl w-full">Turning data into real actions and ideas</h3>
              <div className="space-y-5 pt-16">
                <div className="bg-white px-5 py-3 rounded-3xl shadow flex justify-between items-center max-w-[60%] ">
                  <span className="text-sm">Instant insights</span> <button className="size-10 font-lg bg-wht rounded-full hover:shadow-xl">+</button>
                </div>
                <div className="bg-white px-5 py-3 rounded-3xl shadow flex justify-between items-center max-w-[60%] ">
                  <span className="text-sm">AI technology</span> <button className="size-10 font-lg bg-wht rounded-full hover:shadow-xl">+</button>
                </div>
                <div className="bg-white px-5 py-3 rounded-3xl shadow flex justify-between items-center max-w-[60%] ">
                  <span className="text-sm">Easy integration</span> <button className="size-10 font-lg bg-wht rounded-full hover:shadow-xl">+</button>
                </div>
              </div>

            </div>
            <div className="col-span-2 p-3 min-h-[1000px] z-10" style={{backgroundImage: "url('/devices.png')", backgroundSize: "contain", backgroundRepeat: 'no-repeat'}}></div>
          </div>
          <div className="absolute -bottom-56 text-[25dvw] font-bold w-full text-primary z-0" style={{fontStretch: "semi-expanded"}}>
            Ramos
          </div>
        </div>
      </section>

      <section className="w-full p-5 rounded-[5rem] m-auto space-y-12 px-16 py-20 max-w-[85%] mx-auto">
      <h2 className="text-9xl">We give you full  <br/ > <span className="text-[#b1b1b1]">control</span> over your data</h2>
      <div className="w-full grid grid-cols-2 gap-x-3">
        <div className="px-20 py-5 bg-wht rounded-2xl  border border-gray-200 flex flex-col gap-y-10 items-center w-full">
          <div className="flex w-full mx-auto items-center justify-center">
            <div className="w-[45%] h-[250px] bg-white rounded-2xl py-5 px-10 relative space-y-5 shadow text-center">
              <p>Conversion rate</p>
              <div className="relative bg-accent w-full rounded-xl p-5 text-center">
                <div className="absolute w-6 h-6 rounded-full p-3 bg-wht flex items-center -top-[10px] -left-[10px]"></div>
                <span className="text-6xl">2,3%</span>
              </div>
              <p>percentage of visitors</p>

            </div>
            <div className="w-[45%] h-[250px] bg-white rounded-2xl p-5 shadow mt-16 -ml-5 z-10 flex flex-col justify-between">
              <div>
                <p>Sales revenue</p>
                <p className="text-xl">$ 131,2K</p>
              </div>
              <div className="w-full grid grid-cols-3 gap-x-0.5">
                <div className="p-0.5 bg-green-400 rounded"></div>
                <div className="p-0.5 bg-yellow-400 rounded"></div>
                <div className="p-0.5 bg-green-400 rounded"></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full p-1 bg-accent"></span>
                  <span className="text-xs">Min price</span>
                  <span className="text-xs">1,200 $</span>

                </div>
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full p-1 bg-accent"></span>
                  <span className="text-xs">Min price</span>
                  <span className="text-xs">1,200 $</span>

                </div>
              </div>
              <hr />
              <div className="flex justify-between text-xs">
                <span>Engagement rate</span>
                <span>47,84%</span>
              </div>

            </div>

          </div>
          <div className="text-center max-w-[90%] space-y-3">
            <h4 className="text-xl">Improved customer service</h4>
            <p>Analytics helps optimize service processes by providing information on how 
              to improve interactions with customers and increase theri satisfaction.
            </p>
          </div>
        </div>
        <div className="px-10 py-5 bg-wht rounded-2xl flex border border-gray-200 flex-col gap-y-10 items-center w-full relative">

          <div className="flex justify-center mt-[90px] w-full relative mx-auto max-w-[80%]">
            <div className="w-full max-w-lg relative flex items-center justify-center m-auto">
              <div className="bg-wht p-3 pb-5 flex gap-x-10 rounded-xl shadow-lg w-full z-20 min-h-[220px]">
                <div className="flex flex-col justify-between">
                  <div className="flex gap-x-2">
                    <span className="size-4 bg-primary p-2 flex rounded"></span>
                    <span className="text-xs">Insights</span>
                  </div>
                  <div className="space-y-4">
                  <div>
                    <p className="text-xs pb-2 text-[#b1b1b1]">Total profit</p>
                    <p className="text-2xl">$ 264,2K</p>
                  </div>

                  <button className="bg-accent rounded-lg px-3 py-2 text-xs">Data visualization</button>
                  </div>

                </div>
                <div className="flex flex-1 bg-primary">

                </div>
              </div>
              <div className="bg-[#f4f4f4] rounded-xl shadow-lg absolute w-11/12 -top-[40px] z-10">
              <div className="flex gap-x-2 p-3 min-h-[50px]">
                    <span className="size-4 bg-primary p-2 flex rounded"></span>
                    <span className="text-xs">Insights</span>
              </div>
              </div>
              <div className="bg-[#eeeeee] p-4 rounded-xl shadow-lg absolute w-4/5 -top-[60px] z-0">
                <h2 className="text-lg font-bold">Third Card</h2>
              </div>
            </div>  
          </div>

          <div className="relative space-y-3 text-center max-w-[65%]">
            <h4 className="text-xl">Monitoring key indicators</h4>
            <p>Analytics platform allows business to track KPIs, an important tool for measuring success and achieving goals.</p>
          </div>
        </div>
      </div>
      </section>

      <section className="w-full flex flex-col  items-center justify-center p-5 m-auto space-y-6 px-16 pt-20 pb-32">
        <div className="bg-primary p-5 rounded-3xl cursor-pointer shadow-2xl">
        <Image
          className="relative"
          src="/ramos-logo-short.png"
          alt="Ramos short Logo"
          width={35}
          height={35}
          priority
        />

        </div>
        <h4 className="text-7xl">
          Get Started 
        </h4>

        <div className="text-[#b1b1b1] max-w-[25%] text-center">Turn information into advantage! Start using Ramos today. Sign up for free trial.</div>

        <div className="space-x-3">
            <button className="bg-wht  text-sm rounded-xl py-3 px-8">Request a demo</button>
            <button className="bg-primary text-white text-sm rounded-xl py-3 px-8">Start for free</button>
          </div>

      </section>


      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}


    </main>
    </>

  );
}
