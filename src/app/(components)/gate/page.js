"use client"
import {useState} from 'react';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
export default function Gate(props){
    const pathName = usePathname();
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
    const [res,setResult] = useState("R");
    const [aColor,setColorA] = useState("#f7c6c5");
    const [bColor,setColorB] = useState("#f7c6c5");
    const [spanColor,setSpanColor] = useState("#f4f5ff")
    function handleClickA() {
        setA((prevA) => {
            const newA = prevA === 0 ? 1 : 0;
            updateResult(newA, b);
            newA == 0 ? setColorA("#f7c6c5") : setColorA("#d3f7ce");
            return newA;
        });
    }
    
    function handleClickB() {
        setB((prevB) => {
            const newB = prevB === 0 ? 1 : 0;
            updateResult(a, newB);
            newB == 0 ? setColorB("#f7c6c5") : setColorB("#d3f7ce");
            return newB;
        });
    }
    
    function updateResult(inputA, inputB) {
        let result;
        switch (pathName) {
            case '/and':
                result = inputA & inputB;
                break;
            case '/or':
                result = inputA | inputB;
                break;
            case '/nand':
                result = inputA === 0 || inputB === 0 ? 1 : 0;  
                break;
            case '/nor':
                result = inputA === 0 && inputB === 0 ? 1 : 0;  
                break;
            case '/xor':
                result = inputA !== inputB ? 1 : 0;
                break;
            case '/xnor':
                result = inputA === inputB ? 1 : 0;
                break;
            default:
                console.log("Error");
                return;
        }
        result == 0 ? setSpanColor("#f7c6c5") : setSpanColor("#d3f7ce");
        setResult(result);
    }
    
    return(
        <>
            <div className="gateContainer">
                <h1 style={{
                    marginTop:"10px"
                }}>{props.name}</h1>
                <div className="upper">
                    <div className="image">
                            <p className="logic-p"> 
                                <b>
                                    LOGIC SYMBOL
                                </b>
                            </p>

                        <Image width={180} height={200} className="gate-img"
                            src={props.src} alt="gate" 
                            style={{zIndex:-1}}
                        />
                    </div>
                    <div className="table">
                            <p className="table-p" >
                                <b>
                                    TRUTH TABLE
                                </b>
                            </p>
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
                            <h2 className="visualizer-h2" style={{
                                marginBottom:"10px",
                            }}>
                                <b>
                                    Visualizer
                                </b>
                            </h2>
                        <p>
                            Experiment,visualize and understand the logic gate by yourself. <br />
                            Click the buttons to generate the corresponding output.
                        </p>
                    </div>
                    <div className="game">
                        <div className="left">
                            <button style={{
                                background:`${aColor}`
                            }} onClick={handleClickA}>{a}</button><br />
                            <button  style={{
                                background:`${bColor}`
                            }}  onClick={handleClickB}>{b}</button>
                        </div>
                        <p style={{fontSize:"30px",marginLeft:"10px"}}>
                            ➜
                        </p>
                        <div className="right">
                            <div className="span"  style={{
                                background:`${spanColor}`
                            }} >
                                {res}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <hr /> */}
                <div className="lower">
                    <h2 className="description-h2">
                        <b>
                            Description:
                        </b>
                    </h2>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </>
    );
}