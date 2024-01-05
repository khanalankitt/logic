import Image from "next/image";
export default function Loading(){
    return (
        <div className="loading-container">
            <Image
                className="loadingPng" 
                height={200}
                width={200}
                src="/loading.png"  
            />
        </div>
    );
}
