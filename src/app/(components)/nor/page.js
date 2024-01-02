import Gate from "../gate/page";
const details = {
    name:"NOR GATE",
    src:"/nor.png",
    output:[1,0,0,0],
    description:`
    A NOR gate is another basic digital logic gate,
     standing for "NOT-OR." It produces an output that
      is the complement of the logical OR operation.
       In simpler terms, a NOR gate produces a low or 
       false output only when both of its inputs are 
       low or false;
     otherwise, the output is high or true.`,
     symbol:"(A+B)'"
}
export default function NOR(){
    return (
        <>
            <Gate {...details}/>
        </>
    );
}