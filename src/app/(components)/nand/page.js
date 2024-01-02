import Gate from "../gate/page";
const details = {
    name:"NAND GATE",
    src:"/nand.png",
    output:[1,1,1,0],
    description:`
    A NAND gate is another basic digital 
    logic gate that stands for "NOT-AND."
     It produces an output that is the complement
      of the logical AND operation. In simple terms,
       a NAND gate produces a low or false output only
        when both of its inputs are high or true; otherwise,
     the output is high or true. `,
     symbol:"(A.B)'"
}
export default function NAND(){
    return (
        <>
            <Gate {...details}/>
        </>
    );
}