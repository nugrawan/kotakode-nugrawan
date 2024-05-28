// Components
import { useContext } from "react";
import { Heading, HeadingExplain, HeadingTitle } from "../../Heading";
import { BlogAside } from "../Asides";
import { BlogList } from "../Lists";
import ProductHeading from "../ProductHeading";
import { ProductContext } from "../../../context/ProductContext";
import SearchButton from "../SearchButton";

// DATA
import { blogs } from "../../../data/products/products";

export default function BlogContent() {
    const { activeBlogIndex } = useContext(ProductContext);

    return (
        <>
            <Heading>
                <ProductHeading isBlog={true} withButton={false} title='Blog' summary='Tempat santai bagi programmer untuk menjelajah hal seputar pemrograman dalam bentuk sumber referensi bacaan, tutorial coding/proyek IT, serta berita terbaru terkait framework coding.' />
                <SearchButton isBlog={true} placeholder='Cari berdasarkan tags...' placeholder2='Cari Berdasarkan Keyword...' text='Telusuri' />
                <div className='my-5'>
                    <BlogList blogs={blogs} />
                    <div className='flex gap-5 mt-5 flex-col'>
                        {
                            activeBlogIndex === 0 ? <NotFoundBlog />
                                : activeBlogIndex === 1 ? <NotFoundBlog />
                                    : activeBlogIndex === 2 ? <NotFoundBlog />
                                        : activeBlogIndex === 3 ? <NotFoundBlog />
                                            : activeBlogIndex === 4 ? <NotFoundBlog /> : ''

                        }
                    </div>
                </div>
            </Heading>
            <Heading className='max-w-[24%]'>
                <BlogAside />
            </Heading>
        </>
    )
}

function NotFoundBlog() {
    return (
        <div className="flex p-5 pt-14">
            <img className="w-full p-5" src="https://www.kotakode.com/static/media/koko-pusing.75a998ca.svg" alt="mascot" />
            <div className="p-5 w-full">
                <HeadingTitle className='text-[1.5rem] font-medium'>Belum menemukan blog yang ingin kamu cari?</HeadingTitle>
                <HeadingExplain className='text-lg my-4 w-full'>Coba melakukan pencarian dengan menggunakan kata kunci terkait di forum Kotakode.</HeadingExplain>
                <button className='px-10 py-5 text-2xl hover:opacity-60 bg-primary rounded-md font-bold text-white'>
                    Pergi Ke Forum
                </button>
            </div>
        </div>
    )
}
