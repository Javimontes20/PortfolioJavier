import React from "react";
import Header from "../components/Header";
import { WavyBackground } from "../components/ui/wavy-background";
import Projects from "../components/projects";




function Main() {
    return (
        <>
            <WavyBackground
                waveWidth={60}
                blur={20}
                speed="fast"
                waveOpacity={0.3}
                colors={["#ff4c6a", "#ff8e3c", "#f1c40f"]}>
                <div className="relative z-10">
                    {/* Aquí va todo el contenido encima del fondo */}
                    <Header />
                    <Projects />
                </div>
            </WavyBackground>

        </>
       
    )
    
}   
export default Main;