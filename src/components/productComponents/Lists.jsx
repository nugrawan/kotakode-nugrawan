import { useContext } from "react"
import Button from "../Button"
import { ProductContext } from "../../context/ProductContext"

export function ProductList({ list }) {
    const { activeProductsIndex, setActiveProductsIndex, } = useContext(ProductContext)
    return (
        <div className='max-w-[16%] pl-[80px] sticky top-[113px] mb-10 z-10'>
            <ul className='border-y flex flex-col mt-8 py-2'>
                {
                    list.map((item, index) => (
                        <a onClick={() => setActiveProductsIndex(index)} key={index} className={`w-full cursor-pointer py-[1.5px] px-5 my-1 rounded-md hover:bg-smoothPrimary/40 ${activeProductsIndex === index ? 'bg-smoothPrimary font-bold' : 'font-normal'}`}>
                            {item}
                        </a>
                    ))
                }
            </ul>
        </div>
    )
}

export function ForumList({ forums }) {
    const { activeIssuesIndex, setActiveIssuesIndex } = useContext(ProductContext)

    return (
        <div className='flex text-center gap-3 font-medium border-b'>
            {
                forums.map((item, index) => (
                    <div key={index}>
                        <Button size="font-medium" onClick={() => setActiveIssuesIndex(index)} className={`hover:opacity-[1] rounded-b-none hover:bg-primary/20 px-[1.2rem] py-1 border-b-[3px] hover:border-b-primary hover:font-bold border-white ${activeIssuesIndex === index ? 'border-b-primary font-[800]' : ''} `} text={item} />
                    </div>
                ))
            }
        </div>
    )
}

export function LeaderboardList({ forums }) {
    const { activeLeaderboardIndex, setActiveLeaderboardIndex } = useContext(ProductContext)

    return (
        <div className='flex text-center gap-3 font-medium border-b'>
            {
                forums.map((item, index) => (
                    <div key={index}>
                        <Button size="font-medium" onClick={() => setActiveLeaderboardIndex(index)} className={`hover:opacity-[1] rounded-b-none hover:bg-primary/20 px-[1.2rem] py-1 border-b-[3px] hover:border-b-primary hover:font-bold border-white ${activeLeaderboardIndex === index ? 'border-b-primary font-[800]' : ''} `} text={item} />
                    </div>
                ))
            }
        </div>
    )
}
