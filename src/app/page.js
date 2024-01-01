import Header from "./(components)/header/page"
import "./style.css"
export default function Home() {
  return (
    <>
      <Header/>
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
        <h1>Reasons Why Logic Gates are Used in Digital Circuits</h1>
        <ul style={{
          columns: 2,
          lineHeight:"30px",
          listStyleType: "none",
          marginTop:"10px",
          fontSize:"17px"


        }}>
            <li>1. Digital Information Processing</li>
            <li>2. Boolean Logic Implementation</li>
            <li>3. Circuit Building Blocks </li>
            <li>4. Information Storage </li>
            <li>5. Control Signals</li>
            <li>6. Data Manipulation</li>
            <li>7. Signal Processing</li>
            <li>8. Automation and Decision Making</li>
            <li>9. Reliability and Reproducibility</li>
            <li>10. Miniaturization and Integration </li>
        </ul>
        </div>
    </>
  )
}
