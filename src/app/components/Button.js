"use client"

import { useRouter } from "next/navigation";
const Button = ({children}) => {
    const router = useRouter()
    const handleClick = ()=>{
       router.push("/dashboard/analytics")
    }
    return (
        <div>
            <button onClick={handleClick} className='bg-blue-500 mt-6 py-2 px-5 rounded text-gray-50'>{children}</button>
        </div>
    );
};

export default Button;