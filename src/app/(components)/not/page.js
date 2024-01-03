"use client"
import {useState,useEffect} from 'react';
import Image from 'next/image';
export default function NOT(){
    const [value,setValue] = useState(1);
    const [Bvalue,BsetValue] = useState(0);
    const [spanColor,setSpanColor] = useState("#d3f7ce");
    const [buttonColor,setButtonColor] = useState("#f7c6c5");
    function handleClick(){
        setValue(value === 0 ? 1 : 0);
        BsetValue(Bvalue === 0 ? 1 : 0);
        setSpanColor(spanColor === "#d3f7ce" ? "#f7c6c5" : "#d3f7ce");
        setButtonColor(buttonColor === "#f7c6c5" ? "#d3f7ce" : "#f7c6c5");
    }
    return(
        <>
            <div className="gateContainer">
                <h1 style={{
                    marginTop:"10px"
                }}>NOT GATE</h1>
                <div className="upper">
                    <div className="not-image image">
                            <p className="not-p" >
                                <b>
                                    LOGIC SYMBOL
                                </b>
                            </p>
                        <Image height={200} width={180} className="img-not" id="img-not"
                            src="/not.png" alt="gate"
                            style={{
                                marginTop:"-10px",
                                zIndex:-1,
                                height:`${ useEffect(()=> {
                                    window.innerWidth > 425 ? '180px' : '150px'
                                    return;
                                },[])  }`,
                                objectFit:"cover"
                            }}
                        />
                    </div>
                    <div className="table">

                            <p className="not-tableP">
                                <b>
                                    TRUTH TABLE
                                </b>
                            </p>
                        <table cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>A</th>
                                    <th style={{
                                        width:"80px"
                                    }}>(A)&apos;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="middle">
                    <div className="text">
                            <h2 className="h2-middle" style={{
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
                            <button onClick={handleClick} style={{
                                marginTop:"20px",
                                height:"70px",
                                width:"70px",
                                marginRight:"10px",
                                fontSize:"30px",
                                background:`${buttonColor}`
                            }}>{Bvalue}</button><br />
                        </div>
                        <p style={{fontSize:"30px",marginLeft:"10px"}}>
                            ➜
                        </p>
                        <div className="right">
                            <div className="span" style={{
                                background:`${spanColor}`
                            }}>
                                {value}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower">
                    <h2 className="not-h2-lower">
                        <b>
                            Description:
                        </b><br />
                    </h2>
                    <p>
                        {`A NOT gate, also known as an inverter,
                          is another fundamental digital logic gate. 
                          Its primary function is to produce the opposite 
                          (complement) of its input signal. In other words,
                           if the input is high or true,
                          the output is low or false, and vice versa.`}
                    </p>
                </div>
            </div>
        </>
    );
}