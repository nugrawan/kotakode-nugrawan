// COMPONENTS
import { useContext } from 'react';
import { Section } from '../components/Heading';
// import ProductHeading from '../components/productComponents/ProductHeading';
// import { Issues } from '../components/productComponents/content/Issues';
// import { ForumAside } from '../components/productComponents/Asides';
import { ProductList } from '../components/productComponents/Lists';
// import { ProductContext } from '../context/ProductContext';
// import { Card, CardText, CardTitle } from '../components/Card';
import Forum from '../components/productComponents/content/ForumContent';
import Tags from '../components/productComponents/content/TagsContent';

// DATA
import { list } from '../data/products/products';
import { ProductContext } from '../context/ProductContext';
import DashboardContent from '../components/productComponents/content/LeaderboardContent';
import BlogContent from '../components/productComponents/content/BlogsContent';

const Product = () => {
    const { activeProductsIndex } = useContext(ProductContext)

    return (
        <>
            <ProductList list={list} />
            <Section className="ml-48 p-0 my-0 -mt-40 gap-10 max-w-fit">
                {
                    activeProductsIndex === 0 ? <Forum /> :
                        activeProductsIndex === 1 ? <Tags /> :
                            activeProductsIndex === 2 ? <DashboardContent /> :
                                activeProductsIndex === 3 ? <BlogContent /> : <p>None</p>
                }
            </Section >
        </>
    )
}

export default Product
