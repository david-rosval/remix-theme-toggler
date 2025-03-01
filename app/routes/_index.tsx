import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { useRequestInfo } from "~/utils/request-info";
import { ThemeSwitch } from "./resources.theme-switch";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const toggleTheme = () => {
  
}


export default function Index() {
  const { userPrefs } = useRequestInfo()

  const [toggleButtonHover, setToggleButtonHover] = useState(false)
  return (
    <div className="flex justify-center items-center h-dvh ">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-3xl font-semibold">Theme toggler</h1>
        <ThemeSwitch userPreference={userPrefs.theme} />
        <button
          onClick={toggleTheme}
          className="border rounded-lg p-3 transition-transform ease-in-out active:scale-95 overflow-hidden relative flex items-center"
          onMouseEnter={() => setToggleButtonHover(true)}
          onMouseLeave={() => setToggleButtonHover(false)}
        >
          <div style={{
            transform: toggleButtonHover ? "translate(10rem)" : ""
          }} className="bg-blue-500 h-12 w-40 absolute left-[-10rem] transition-transform ease-in-out duration-500" />
          <p className="z-10">Toggle Theme</p>
        </button>
      </div>
    </div>
  );
}


