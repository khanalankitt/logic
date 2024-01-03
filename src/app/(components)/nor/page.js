import Gate from "../gate/page";
const details = {
    name:"NOR GATE",
    src:"/nor.png",
        i:1,
        ii:0,
        iii:0,
        iv:0,
    description:`
    A NOR gate is another basic digital logic gate,
     standing for "NOT-OR." It produces an output that
      is the complement of the logical OR operation.
       In simpler terms, a NOR gate produces a high or 
       true output only when both of its inputs are 
       low or false;
     otherwise, the output is low or false.`,
     symbol:"(A+B)'"
}
export default function NOR(){
    return (
        <>
            <Gate {...details}/>
        </>
    );
}
