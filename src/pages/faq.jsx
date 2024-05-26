import { Card, CardTitle } from '../components/Card';
import { Heading, HeadingExplain, HeadingTitle, Section } from '../components/Heading'
const Faq = () => {
    const faq = [
        {
            question: 'Apa itu Kotakode?',
            answer: 'Kamu hanya perlu bergabung di dalam group telegram / whatsapp / discord Kotakode dengan cara mengisi formulir pendaftaran anggota yang telah disediakan oleh admin. Selain itu, kalian juga dapat bergabung dengan cara mengisi form pendaftaran yang terdapat di dalam halaman website Kotakode.'
        },
        {
            question: 'Bagaimana cara melakukan pendaftaran akun di Kotakode?',
            answer: 'Kamu dapat membagikan tulisan di dalam Kotakode dengan cara mengisi formulir pendaftaran blog yang telah disediakan oleh admin. Pastikan kalian telah mengisi informasi yang diperlukan serta tulisan yang akan dibagikan harus sesuai dengan tema yang diinginkan oleh admin.'
        },
        {
            question: 'Bagaimana cara membuat pertanyaan di Kotakode?',
            answer: 'Kamu dapat membagikan portofolio di dalam Kotakode dengan cara mengisi formulir pendaftaran portofolio yang telah disediakan oleh admin. Pastikan kalian telah mengisi informasi yang diperlukan, serta portofolio yang akan dibagikan harus sesuai dengan tema yang diinginkan oleh admin.'
        },
    ]

    return (
        <>
            <Section className="p-[0px] flex-col w-full my-[0px]">
                <Heading align="center" className="bg-cover text-white text-center rounded-3xl w-full mt-10 pt-52 p-[6rem] h-[80vh] bg-no-repeat bg-[url('https://www.kotakode.com/static/media/BackgroundFAQ.82a9976b.png')]">
                    <p className="border-t-4 w-32 border-secondary mx-auto"></p>
                    <HeadingTitle className="text-[2.5rem]">Pertanyaan & Jawaban terkait Kotakode</HeadingTitle>
                    <HeadingExplain className="text-2xl w-full mx-auto">Punya pertanyaan seputar produk dan layanan Kotakode? Temukan berbagai informasi yang tersedia di bawah ini.</HeadingExplain>
                </Heading>
                <Card align="center" className="rounded-lg p-1 -mt-5 mx-auto bg-white">
                    <CardTitle className="px-12 py-1 mb-0 text-gray-500 font-extrabold">FAQ</CardTitle>
                </Card>
            </Section>
            <Section>
                <Heading align='center' className="w-full ">
                    <div className="flex mx-auto flex-col text-left gap-5">
                        {faq.map((item, index) => (
                            <div key={index} className='border-b py-3 border-black w-[80%] mx-auto flex justify-between gap-5'>
                                <h3 className="text-2xl font-bold">{item.question}</h3>
                                <button>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#757575" size="24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(117, 117, 117)' }}>
                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </Heading>
            </Section>
        </>
    )
}

export default Faq;
