import Gate from "../gate/page";
const details = {
    name:"OR GATE",
    src:"or.png",
    output:[0,1,1,1],
    description:`
    An OR gate is a fundamental digital logic gate that
     performs a logical OR operation. In simple terms, an OR
      gate produces an output signal (often referred to as the 
        result or the output state) if at least 
    one of its input signals is active or true.`,    
    symbol:"A+B"
}
export default function OR(){
    return (
        <>
            <Gate {...details}/>
        </>
    );
}