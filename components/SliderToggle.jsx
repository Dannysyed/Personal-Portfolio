import { motion } from "framer-motion";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
    "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-1 md:py-1.5 transition-colors relative z-10 ";

const SliderDayAndNight = () => {
    const [selected, setSelected] = useState("light");
    return (
        <div
            className={`grid  place-content-end transition-colors ${selected === "light" ? "bg-transparent" : "bg-transparent-900"
                }`}
        >
            <SliderToggle selected={selected} setSelected={setSelected} />
        </div>
    );
};

const SliderToggle = ({ selected, setSelected }) => {
    return (
        <div className="relative flex w-fit items-center rounded-full">
            <button
                className={`${TOGGLE_CLASSES} ${selected === "light" ? "text-white" : "text-slate-300"
                    }`}
                onClick={() => {
                    setSelected("light");
                }}
            >
                <FiSun className="relative z-10 text-lg md:text-sm" />

                <span className="hidden sm:hidden relative z-10 md:block">Light</span>
            </button>
            <button
                className={`${TOGGLE_CLASSES} ${selected === "dark" ? "text-white" : "text-slate-800"
                    }`}
                onClick={() => {
                    setSelected("dark");
                }}
            >
                <FiMoon className="relative z-10 text-lg md:text-sm" />
                <span className="hidden sm:hidden relative z-10 md:block">Dark</span>
            </button>
            <div
                className={`absolute inset-0 z-0 flex ${selected === "dark" ? "justify-end" : "justify-start"
                    }`}
            >
                <motion.span
                    layout
                    transition={{ type: "spring", damping: 15, stiffness: 250 }}
                    className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
                />
            </div>
        </div>
    );
};

export default SliderDayAndNight;