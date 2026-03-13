"use client";

import { useState } from "react";
{/* import Countdown from "./Countdown"; */}

export default function CountdownPage() {
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div className="bg-black flex flex-col items-center justify-center gap-4">
            {/*<Countdown isRunning={isRunning} /> */}
            <button
                {/* onClick={() => setIsRunning(!isRunning)} */}
                className="px-6 py-3 bg-white text-black rounded-lg font-bold text-lg"
            >
                {isRunning ? "Reset" : "Start"}
            </button>
        </div>
    );
}