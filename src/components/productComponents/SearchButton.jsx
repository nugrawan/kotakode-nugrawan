import { useState } from "react";
import Button from "../Button";

const Search = ({ color, size = '30', className }) => {
    return (
        <img className={className} src={`https://img.icons8.com/?size=${size}&id=7695&format=png&color=${color}`} alt="search" />
    )
}

export default function SearchButton({ text, placeholder }) {
    const [focus, setFocus] = useState(false);

    return (
        <div className='p-1 flex gap-3'>
            <div className={`flex p-1 w-full gap-1 h-fit border rounded-md ${focus ? 'border-secondary' : 'border-text/70'}`}>
                <Search className='p-1' size='20' color='000000' />
                <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className='outline-none w-full text-sm' type="text" name="search" id="search" placeholder={placeholder} />
            </div>
            <Button className="bg-primary w-fit px-[1.2rem] text-white" text={text} icon={<Search className='mr-3' size='20' color='ffffff' />} />
        </div>
    )
}
