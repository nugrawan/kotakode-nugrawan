import { tagsItems } from "../../../data/products/tags";
import { Heading } from "../../Heading";
import ProductHeading from "../ProductHeading";
import SearchButton from "../SearchButton";

export default function tags() {
    return (
        <>
            <Heading className='w-[48rem] pr-10'>
                <ProductHeading withButton={false} title='Tags' summary='Gunakan tags untuk mengkategorikan pertanyaan kamu dengan pertanyaan yang mirip dengan orang lain.' />
                <SearchButton placeholder='Ketik disini untuk mencari tags...' text='Telusuri' />
                <div className="grid grid-cols-4 py-24 gap-4 mt-5 border-t">
                    {
                        tagsItems.map((tag, index) => (
                            <a href="#" key={index} className="p-3 hover:shadow-md hover:-translate-y-1 border rounded-md">
                                <p className='bg-primary/20 inline text-sm px-2 py-1 hover:bg-primary/40 rounded-sm'>#{tag.name}</p>
                                <p className="my-3 text-ellipsis line-clamp-4">{tag.text}</p>
                                <p className="text-xs opacity-80">{tag.asks} Pertanyaan • {tag.blogs} Blogs</p>
                            </a>
                        ))
                    }
                </div>
            </Heading>
        </>
    )
}
