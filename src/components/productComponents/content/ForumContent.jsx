// Components
import { useContext } from "react";
import { Heading } from "../../Heading";
import { ForumAside } from "../Asides";
import { Issues } from "../Issues";
import { ForumList } from "../Lists";
import ProductHeading from "../ProductHeading";
import { ProductContext } from "../../../context/ProductContext";
import SearchButton from "../SearchButton";

// DATA
import { forums, options } from "../../../data/products/products";
import { newIssues, activeIssues, notAnswerIssues } from '../../../data/products/issues'

export default function Forum() {
    const { activeIssuesIndex } = useContext(ProductContext);

    return (
        <>
            <Heading>
                <ProductHeading title='Forum' summary='Tempat berkomunikasi para programmer dengan cara mengajukan atau menjawab sebuah pertanyaan' />
                <SearchButton placeholder='Ketik disini untuk mencari pertanyaan...' text='Telusuri' />
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
                <ForumAside options={options} />
            </Heading>
        </>
    )
}
