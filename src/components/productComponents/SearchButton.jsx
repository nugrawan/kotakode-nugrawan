import { useState } from "react";
import Button from "../Button";

const Search = ({ color, size = '30', className, isBlog }) => {
    if (!isBlog) {
        return (
            <img className={className} src={`https://img.icons8.com/?size=${size}&id=7695&format=png&color=${color}`} alt="search" />
        )
    } else {
        return (
            <img height={20} width={20} src="https://img.icons8.com/ios-filled/50/000000/price-tag.png" alt="price-tag" />
        )
    }
}

export default function SearchButton({ text, placeholder, isBlog = false, placeholder2 }) {
    const [focus, setFocus] = useState(false);
    const [focus2, setFocus2] = useState(false);

    return (
        <div className='p-1 flex gap-3'>
            {
                !isBlog ?
                    <div className={`flex p-1 w-full gap-1 h-fit border rounded-md ${focus ? 'border-secondary' : 'border-text/70'}`}>
                        <Search isBlog={isBlog} className='p-1' size='20' color='000000' />
                        <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className='outline-none w-full text-sm' type="text" name="search" id="search" placeholder={placeholder} />
                    </div> :
                    <>
                        <div className={`flex p-[.4rem] w-full gap-1 h-fit border rounded-md ${focus ? 'border-secondary' : 'border-text/70'}`}>
                            <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className='outline-none w-full text-sm' type="text" name="search" id="search" placeholder={placeholder2} />
                        </div>
                        <div className={`flex p-[.4rem] w-full gap-1 h-fit border rounded-md ${focus2 ? 'border-secondary' : 'border-text/70'}`}>
                            <Search isBlog={isBlog} className='p-1' size='20' color='000000' />
                            <input onFocus={() => setFocus2(true)} onBlur={() => setFocus2(false)} className='outline-none w-full text-sm' type="text" name="search" id="search" placeholder={placeholder} />
                        </div>
                    </>
            }
            <Button className="bg-primary w-fit px-[1.2rem] text-white" text={text} icon={<Search className='mr-3' size='20' color='ffffff' />} />
        </div>
    )
}
