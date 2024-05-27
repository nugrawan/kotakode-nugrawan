// Components
import { useContext } from "react";
import { Heading } from "../../Heading";
import { BlogAside } from "../Asides";
import { Issues } from "../Issues";
import { ForumList } from "../Lists";
import ProductHeading from "../ProductHeading";
import { ProductContext } from "../../../context/ProductContext";
import SearchButton from "../SearchButton";

// DATA
import { forums } from "../../../data/products/products";
import { newIssues, activeIssues, notAnswerIssues } from '../../../data/products/issues';

export default function BlogContent() {
    const { activeIssuesIndex } = useContext(ProductContext);

    return (
        <>
            <Heading>
                <ProductHeading isBlog={true} withButton={false} title='Blog' summary='Tempat santai bagi programmer untuk menjelajah hal seputar pemrograman dalam bentuk sumber referensi bacaan, tutorial coding/proyek IT, serta berita terbaru terkait framework coding.' />
                <SearchButton placeholder='Cari Berdasarkan Keyword...' text='Telusuri' />
                <div className='my-5'>
                    <ForumList forums={forums} />
                    <div className='flex gap-5 mt-5 flex-col'>
                        {
                            (activeIssuesIndex === 0 ? newIssues : activeIssuesIndex === 1 ? activeIssues : notAnswerIssues).map((issue, index) => (
                                <Issues key={index} issue={issue} />
                            ))
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
