import "./style.css"
import Footer from './(components)/footer/page'
import Image from "next/image"
export default function Home() {
  return (
    <>
        <h1 className="h1-header" style={{textAlign:"center",marginTop:"10px"}}>
          Logic Gate Visualizer
        </h1>
        <div className="homeContent">
        <p>
        Logic gates are fundamental building blocks of digital
         circuits and are used to perform logical operations on
          binary inputs. These gates are the basic components that 
          form the foundation of digital systems, such as computers
           and other electronic devices.
         There are several types of logic gates, each performing a 
         specific logical operation.
        </p>
        <ul style={{
          padding:"10px 30px",
          lineHeight:"25px",
        }}>
          <li>AND GATE</li>
          <li>OR GATE</li>
          <li>NOT GATE</li>
          <li>NAND GATE</li>
          <li>NOR GATE</li>
          <li>XOR GATE</li>
          <li>XNOR GATE</li>
        </ul>
        <h1 className="reasons-h1">Reasons Why Logic Gates are Used in Digital Circuits</h1>
        <ul style={{
          columns: 2,
          lineHeight:"30px",
          listStyleType: "none",
          marginTop:"10px",
          fontSize:"17px"


        }}>
            <li> <b>1.</b> Digital Information Processing</li>
            <li> <b>2.</b> Boolean Logic Implementation</li>
            <li> <b>3.</b> Circuit Building Blocks </li>
            <li> <b>4.</b> Information Storage </li>
            <li> <b>5.</b> Control Signals</li>
            <li> <b>6.</b> Data Manipulation</li>
            <li> <b>7.</b> Signal Processing</li>
            <li> <b>8.</b> Automation and Decision Making</li>
            <li> <b>9.</b> Reliability and Reproducibility</li>
            <li> <b>10</b>. Miniaturization and Integration </li>
        </ul>
        </div>
        <Footer/>
    </>
  )
}
