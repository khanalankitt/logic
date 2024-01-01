import Link from "next/link";
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
                            <img src="dark.png" alt="darkIcon"
                                style={{
                                    height:"30px",
                                    width:"30px",
                                    marginLeft:"10px",
                                    marginTop:"5px",
                                    cursor:"pointer"
                                }}
                            />
                        </li>

                </ul>
            </nav>
        </>
    );
}