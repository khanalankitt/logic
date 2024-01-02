"use client"
import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
const details = {
    home:{classname:"nav-li home",link:"/",name:"<HOME/>"},
    and:{classname:"nav-li and",link:"/and",name:"AND"},
    or:{classname:"nav-li or",link:"/or",name:"OR"},
    not:{classname:"nav-li not",link:"/not",name:"NOT"},
    nand:{classname:"nav-li nand",link:"/nand",name:"NAND"},
    nor:{classname:"nav-li nor",link:"/nor",name:"NOR"},
    xor:{classname:"nav-li xor",link:"/xor",name:"XOR"},
    xnor:{classname:"nav-li xnor",link:"/xnor",name:"XNOR"},
}
// components/ThemeToggle.js


export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if there's a stored theme preference in local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);

    // Apply the new theme to the entire document body
    document.body.classList.toggle('dark-theme', isDarkMode);
  };

  return (
    <Image height={30} width={30} src="/dark.png" alt="darkIcon" className="darkimage" onClick={toggleTheme} style={{
        marginLeft:"10px",
        marginTop:"5px",
        cursor:"pointer"
    }}/>
  );
};


export default function NavBar(){
    return(
        <>
           <nav>
                <ul>
                    {Object.values(details).map((item,index) => (
                      <li key={index} className={item.classname}>
                        <Link href={item.link}>
                            {item.name}
                        </Link>
                      </li>
                    ))}
                        <li>
                            <ThemeToggle/>
                        </li>
                        <li>
                            {/* <img src="dark.png" alt="darkIcon"
                                style={{
                                    height:"30px",
                                    width:"30px",
                                    marginLeft:"10px",
                                    marginTop:"5px",
                                    cursor:"pointer"
                                }}
                            /> */}
                        </li>

                </ul>
            </nav>
        </>
    );
}