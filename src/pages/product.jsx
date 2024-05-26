import { Heading, HeadingExplain, HeadingTitle, Section } from '../components/Heading';
import Button from '../components/Button';
import { Card, CardText, CardTitle } from '../components/Card';
import { useState } from 'react';
import { list, options } from '../data/products';

const Search = ({ color, size = '30', className }) => {
    return (
        <img className={className} src={`https://img.icons8.com/?size=${size}&id=7695&format=png&color=${color}`} alt="search" />
    )
}
const Product = () => {
    const [focus, setFocus] = useState(false)
    return (
        <>
            <div className='max-w-[30%] min-h-screen pl-[80px] fixed'>
                <ul className='border-y flex flex-col mt-8 py-2'>
                    {
                        list.map((item, index) => (
                            <a key={index} className='w-full font-normal px-5 my-2 py-1 rounded-md hover:bg-smoothPrimary/60'>
                                {item}
                            </a>
                        ))
                    }
                </ul>
            </div>
            <Section className="ml-48 gap-10 max-w-fit">
                <Heading>
                    <div className='flex justify-between w-full'>
                        <HeadingTitle>Forum</HeadingTitle>
                        <button className='flex h-fit p-3 hover:opacity-60 gap-3 bg-primary justify-center items-center text-[1rem] rounded-md font-bold text-white'>
                            <img width="30" height="30" src="https://img.icons8.com/sf-black-filled/64/ffffff/pencil.png" alt="pencil" />
                            Buat Pertanyaan
                        </button>
                    </div>
                    <HeadingExplain className="w-full">Tempat berkomunikasi para programmer dengan cara mengajukan atau menjawab sebuah pertanyaan</HeadingExplain>
                    <div className='p-1 flex gap-3'>
                        <div className={`flex p-1 w-full gap-1 h-fit border rounded-md ${focus ? 'border-secondary' : 'border-text/70'}`}>
                            <Search className='p-1' size='20' color='000000' />
                            <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className='outline-none w-full text-sm' type="text" name="search" id="search" placeholder='Ketik disini untuk mencari pertanyaan...' />
                        </div>
                        <Button className="bg-primary w-fit px-[1.2rem] text-white" text='Telusuri' icon={<Search className='mr-3' size='20' color='ffffff' />} />
                    </div>
                </Heading>
                <Heading className='max-w-[25%]'>
                    <Card className='shadow-md mt-64 p-3 rounded-md'>
                        <CardTitle className='flex items-center gap-3 text-md pb-5 border-b border'><img className='w-5 h-5' src="https://img.icons8.com/?size=25&id=7873&format=png&color=14a359" alt="pin" /> Selamat Datang!</CardTitle>
                        <div className='forum-right'>
                            <CardText>Ikuti <a href='#'>facebook</a> , <a href='#'>telegram</a> dan <a href='#'>instagram</a> kami untuk update terbaru.</CardText>
                            <CardText className='my-5'>Setelah membuat pertanyaan, kamu bisa copy-paste link pertanyaan kamu ke grup <a>Telegram</a> atau <a>FB</a> untuk mengasih tahu para member di grup tersebut</CardText>
                            <CardText>Ada yang tidak dimengerti? <a>FAQ</a>.</CardText>
                        </div>
                    </Card>
                    <Card>
                        <CardTitle className='flex items-center gap-3 text-md pb-3 border-b border'><img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=102261&format=png&color=14a359" alt="pin" />User Teraktif</CardTitle>
                        <select className='w-full m-2 px-3 py-3 border font-bold bg-white border-primary rounded-md outline-none hover:bg-primary text-primary hover:opacity-70 text-sm hover:text-white' name="users" id="users">
                            {
                                options.map((item, index) => (
                                    <option key={index} className='text-base bg-white text-text' value="daily">
                                        <a className='p-3' href="#">{item}</a>
                                    </option>
                                ))
                            }
                        </select>
                    </Card>
                </Heading>
            </Section>

        </>
    )
}

export default Product
