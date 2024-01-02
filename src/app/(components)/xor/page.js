import Gate from "../gate/page";
const details = {
    name:"XOR GATE",
    src:"/xor.png",
    output:[0,1,1,0],
    description:`An XOR gate, which stands for 
    "exclusive OR," is a digital logic gate that 
    produces a high or true output only when the
     number of true inputs is odd. In other words,
      the output is true if the number of true inputs
       is 1 or 3, and it is false
     if the number of true inputs is 0, 2, or 4.`,
     symbol:"A⊕B"

}
export default function XOR(){
    return (
        <>
            <Gate {...details}/>
        </>
    );
}