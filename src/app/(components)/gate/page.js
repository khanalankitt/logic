"use client"
import {useState} from 'react';
import { usePathname } from 'next/navigation'
export default function Gate(props){
    const pathName = usePathname();
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
const [res,setResult] = useState("R");
    function handleClickA(){
        setA((prevA) => (prevA === 0 ? 1 : 0));
        setResult(
            pathName == '/and' ? a & b :
            pathName == '/or' ? a | b :
            pathName == '/nand' ? !(a & b) :
            pathName == '/nor' ? !(a | b) :
            pathName == '/xor' ? (a !== b ? 1 : 0) :
            pathName == '/xnor' ? (a !== b ? 0 : 1) :
            (console.log("Error"), null)
          );
          console.log(`${a} ${b} ${res}`)
    }
    function handleClickB(){
        setB((prevB) => (prevB === 0 ? 1 : 0));
        setResult(
            pathName == '/and' ? a & b :
            pathName == '/or' ? a | b :
            pathName == '/nand' ? !(a & b) :
            pathName == '/nor' ? !(a | b) :
            pathName == '/xor' ? (a !== b ? 1 : 0) :
            pathName == '/xnor' ? (a !== b ? 0 : 1) :
            console.log("Error")
            );
          console.log(`${a} ${b} ${res}`)

        }
    return(
        <>
            <div className="gateContainer">
                <h1 style={{
                    marginTop:"10px"
                }}>{props.name}</h1>
                <div className="upper">
                    <div className="image">
                        <b>
                            <p style={{
                                color:"#2f1c6a"
                            }}>LOGIC SYMBOL</p>
                        </b>
                        <img
                            src={props.src} alt="gate"
                            style={{zIndex:-1}}
                        />
                    </div>
                    <div className="table">
                        <b>
                            <p style={{
                                color:"#2f1c6a"
                            }}>TRUTH TABLE</p>
                        </b>
                        <table cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>A</th>
                                    <th>B</th>
                                    <th style={{
                                        width:"70px"
                                    }}>
                                        {props.symbol}                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody>                            
                                <tr>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>{props.output[0]}</td>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>{props.output[1]}</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>{props.output[2]}</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>{props.output[3]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <hr /> */}
                <div className="middle">
                    <div className="text">
                        <b>
                            <h2 style={{
                                marginBottom:"10px",
                                color:"#2f1c6a"
                            }}>
                                Visualizer
                            </h2>
                        </b>
                        <p>
                            Experiment,visualize and understand the logic gate by yourself. <br />
                            Click the buttons to generate the corresponding output.
                        </p>
                    </div>
                    <div className="game">
                        <div className="left">
                            <button onClick={handleClickA}>{a}</button><br />
                            <button onClick={handleClickB}>{b}</button>
                        </div>
                        <p style={{fontSize:"30px",marginLeft:"10px"}}>
                            ➜
                        </p>
                        <div className="right">
                            <div className="span">
                                {res}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <hr /> */}
                <div className="lower">
                    <p>
                        <b style={{
                                color:"#2f1c6a"
                            }}>Description:</b><br />
                       {props.description}
                    </p>
                </div>
            </div>
        </>
    );
}