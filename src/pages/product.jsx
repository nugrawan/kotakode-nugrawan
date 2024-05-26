import { Heading, HeadingExplain, HeadingTitle, Section } from '../components/Heading';
import Button from '../components/Button';
import { Card, CardText, CardTitle } from '../components/Card';
import { useState } from 'react';
import { list, options, forums } from '../data/products';

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
                            <a key={index} className='w-full cursor-pointer py-1 font-normal px-5 my-1 rounded-md hover:bg-smoothPrimary/60'>
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
                    <HeadingExplain className="w-full mb-3">Tempat berkomunikasi para programmer dengan cara mengajukan atau menjawab sebuah pertanyaan</HeadingExplain>
                    <div className='p-1 flex gap-3'>
                        <div className={`flex p-1 w-full gap-1 h-fit border rounded-md ${focus ? 'border-secondary' : 'border-text/70'}`}>
                            <Search className='p-1' size='20' color='000000' />
                            <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className='outline-none w-full text-sm' type="text" name="search" id="search" placeholder='Ketik disini untuk mencari pertanyaan...' />
                        </div>
                        <Button className="bg-primary w-fit px-[1.2rem] text-white" text='Telusuri' icon={<Search className='mr-3' size='20' color='ffffff' />} />
                    </div>
                    <div className='my-5'>
                        <div className='flex text-center gap-3 font-medium border-b'>
                            {
                                forums.map((item, index) => (
                                    <div key={index}>
                                        <Button className='font-[500] hover:opacity-[1] rounded-b-none hover:bg-primary/20 px-[1.2rem] py-1 border-b-[3px] hover:border-b-primary border-white' text={item} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex gap-5 mt-5 flex-col'>
                            <a href="#" className='hover:full-shadow'>
                                <Card className='flex hover-shadow p-[1.5rem]'>
                                    <div className='flex h-full flex-col px-5 gap-16 justify-between'>
                                        <div className='text-center'>
                                            <div className='p-1'>
                                                <CardTitle className='mb-[0px] font-semibold'>0</CardTitle>
                                                <CardText className='text-xs'>Suka</CardText>
                                            </div>
                                            <div className='p-1'>
                                                <CardTitle className='mb-[0px] font-semibold'>0</CardTitle>
                                                <CardText className='text-xs'>Jawaban</CardText>
                                            </div>
                                        </div>
                                        <div className='flex gap-2 text-xs text-center justify-center items-center'>
                                            <img src="https://img.icons8.com/?size=25&id=60022&format=png&color=757575" alt="eye" />
                                            <p>256</p>
                                        </div>
                                    </div>
                                    <div>
                                        <CardTitle>edit php tidak bisa tersimpan</CardTitle>
                                        <CardText className='text-ellipsis line-clamp-2'>{`<?php if (isset($_GET['kode'])) { $sql_cek = "SELECT * FROM 'tb_kasus', tb_pelapor, tb_korban, tb_pelaku WHERE id_kasus='" . $_GET['kode'] . "'"; $qu`}</CardText>
                                        <div className='flex mt-3'>
                                            <p className='bg-primary/20 border-none text-sm px-2 py-1 rounded-sm'> #php</p>
                                        </div>
                                        <div className='w-full flex flex-col items-end justify-center'>
                                            <p className='text-sm opacity-70'>Aktivitas terakhir 9 bulan yang lalu</p>
                                            <div className='p-2 text-sm font-bold flex items-center gap-2'>
                                                <p className='bg-primary/20 px-1 h-fit rounded-sm'>lvl.0</p>
                                                <p>aziznurulhidayat</p>
                                                <p className='px-4 py-2 rounded-full bg-pink-200 font-normal'>A</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </a>
                        </div>
                    </div>
                </Heading >
                <Heading className='max-w-[25%]'>
                    <Card className='shadow-md mt-64 p-3 rounded-md'>
                        <CardTitle className='flex items-center gap-3 text-md pb-5 border-b'><img className='w-5 h-5' src="https://img.icons8.com/?size=25&id=7873&format=png&color=14a359" alt="pin" /> Selamat Datang!</CardTitle>
                        <div className='forum-right'>
                            <CardText>Ikuti <a href='#'>facebook</a> , <a href='#'>telegram</a> dan <a href='#'>instagram</a> kami untuk update terbaru.</CardText>
                            <CardText className='my-5'>Setelah membuat pertanyaan, kamu bisa copy-paste link pertanyaan kamu ke grup <a>Telegram</a> atau <a>FB</a> untuk mengasih tahu para member di grup tersebut</CardText>
                            <CardText>Ada yang tidak dimengerti? <a>FAQ</a>.</CardText>
                        </div>
                    </Card>
                    <Card>
                        <CardTitle className='flex items-center gap-3 text-md pb-3 border-b'><img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=102261&format=png&color=14a359" alt="pin" />User Teraktif</CardTitle>
                        <select className='w-full cursor-pointer m-2 px-3 py-3 border font-bold bg-white border-primary rounded-md outline-none hover:bg-primary text-primary hover:opacity-70 text-sm hover:text-white' name="users" id="users">
                            {
                                options.map((item, index) => (
                                    <option key={index} className='text-base font-medium bg-white text-text' value="daily">
                                        <a className='w-full' href="#">{item}</a>
                                    </option>
                                ))
                            }
                        </select>
                    </Card>
                </Heading>
            </Section >

        </>
    )
}

export default Product
