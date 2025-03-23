
function Projects() {
    // Datos de las tarjetas
    

    return (
        <>
            <div  id="projects" className=" w-full h-100 flex flex-col text-center mt-10 text-white ">
                <h1 className="dotgothic16-regular text-center p-4 align-items-center mb-5">Projects</h1>
                {/* Aquí pasamos 'cards' como props a FocusCards */}
                <div className="manrope-regular">
                    <WobbleCardDemo />

                    
                </div>
                
            </div>
        </>
    );
}

export default Projects;
import React from "react";
import { WobbleCard } from "../components/ui/wobble-card"; // Ajusta la ruta si es necesario

export function WobbleCardDemo() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] bg-no-repeat bg-transparent"
                className="">
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                       FootballShop FootballJs
                    </h2>
                    <p className="mt-4 text-left text-base/6 text-neutral-200">
                        FootballShop JS is an interactive football store built with JavaScript, HTML, and CSS, where users can browse, add, and remove products from the cart, with real-time price updates, all through DOM manipulation.
                    </p>
                </div>
                <img
                    src="public/FootballJs.png"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute right-0 lg:-right-20 top-10 filter object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                   Rovers Burguer
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    Rovers Burger Shop is a responsive website built with HTML and CSS, designed to showcase a burger restaurant’s menu and services. It features an interactive menu, animations, and is optimized for all devices.
                </p>
            </WobbleCard>
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[400px] lg:min-h-[500px] xl:min-h-[300px] bg-transparent"
            >
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        CRM-People
                    </h2>
                    <p className="mt-4 max-w-full lg:max-w-[35rem] text-left text-base/6 text-neutral-200">
                        CRM People is a web platform designed to manage employees efficiently,
                        following the CRUD (Create, Read, Update, Delete) principles. It allows user
                        registration and enables the addition, modification, and removal of employee
                        data, all through a responsive and intuitive interface. Built with React and
                        Tailwind CSS, it integrates external APIs for employee data management.
                    </p>
                </div>
                <img
                    src="public/crm.png"
                    width={600}
                    height={600}
                    alt="CRM People demo image"
                    className="absolute right-4 bottom-0 filter object-contain rounded-2xl"
                />
            </WobbleCard>
        </div>
    );
}
