import { HeadingExplain, HeadingTitle } from '../Heading'

export default function ProductHeading({ title, summary, withButton = true, isBlog = false }) {
    return (
        <>
            <div className='flex justify-between items-center w-full'>
                <HeadingTitle>{title}</HeadingTitle>
                {
                    withButton ?
                        <button className='flex h-fit  p-3 hover:opacity-60 gap-3 bg-primary justify-center items-center text-[1rem] rounded-md font-bold text-white'>
                            <img width="30" height="30" src="https://img.icons8.com/sf-black-filled/64/ffffff/pencil.png" alt="pencil" />
                            Buat Pertanyaan
                        </button> :
                        isBlog ?
                            <div className='flex gap-3'>
                                <button className='flex h-fit px-3 py-[.6rem] hover:bg-primary hover:text-white hover:opacity-60 gap-3 border-primary border justify-center items-center text-[1rem] rounded-md font-bold text-primary'>
                                    <img width="25" height="25" src="https://img.icons8.com/?size=80&id=2939&format=png&color=14a359" alt="pencil" />
                                    Dashboard
                                </button>
                                <button className='flex h-fit px-3 py-[.6rem] hover:opacity-60 gap-3 bg-primary justify-center items-center text-[1rem] rounded-md font-bold text-white'>
                                    <img width="27" height="27" src="https://img.icons8.com/sf-black-filled/64/ffffff/pencil.png" alt="pencil" />
                                    Buat Blog
                                </button>
                            </div> : ''
                }
            </div>
            <HeadingExplain className="w-full mb-3">{summary}</HeadingExplain>
        </>
    )
}
