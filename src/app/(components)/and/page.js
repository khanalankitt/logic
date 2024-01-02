import Gate from "../gate/page";
const details = {
    name:"AND GATE",
    src:"/and.png",
    output:[0,0,0,1],
    description:`An AND gate is a basic digital logic gate 
    that performs a logical conjunction, meaning it outputs 
    a true (or high) signal only when both of its inputs are
     true. The AND gate has two or more inputs and a single 
     output. The output is true only
     if all of its inputs are true; otherwise, it is false.`,
     symbol:"A.B"
}
export default function AND(){
    return (
        <>
            <Gate {...details}/>
        </>
    );
}