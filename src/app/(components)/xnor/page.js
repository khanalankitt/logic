import Gate from "../gate/page";
const details = {
    name:"X-NOR GATE",
    src:"/xnor.png",
    output:[1,0,0,1],
    description:`
        An XNOR gate, also known as 
        "exclusive NOR" or "equivalence gate," is a digital
         logic gate that produces a high or true output only 
         when the number of true inputs is even. In other words, 
         the output is true if both inputs are the same 
         (both true or both false), and it is false if
         the inputs are different (one true and one false).
    `,
    symbol:"(A⊕B)'"

}
export default function XNOR(){
    return (
        <>
            <Gate  {...details}/>
        </>
    );
}