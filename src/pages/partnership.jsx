import { useState } from "react";
import Button from "../components/Button";
import { Card, CardText, CardTitle } from "../components/Card";
import { Heading, HeadingExplain, HeadingTitle, Section } from "../components/Heading";

export default function Partnership() {
    const [focus, setFocus] = useState(0)
    return (
        <>
            <Section className='pt-16'>
                <div className="max-w-fit">
                    <img width={600} height={500} src="https://www.kotakode.com/static/media/partnershipIlustration.45457fb3.svg" alt="mascot" />
                </div>
                <Heading className='max-w-[40%] ml-10 gap-0'>
                    <HeadingTitle size="text-lg">Kotakode Partnership</HeadingTitle>
                    <HeadingTitle size="text-[2.6rem]" className='font-bold text-black'>Bersama Membangun Talenta Digital di Indonesia</HeadingTitle>
                    <HeadingTitle size="text-lg" className='my-3'>Kotakode membuka peluang kolaborasi dengan berbagai institusi untuk mendukung ekosistem digital di Indonesia</HeadingTitle>
                    <button className='px-10 py-5 text-2xl hover:bg-green-300 bg-primary rounded-md font-bold text-white'>
                        Gabung Sekarang
                    </button>
                </Heading>
            </Section>
            <Section className='flex-col p-10'>
                <Heading align='center' className='mx-auto'>
                    <HeadingTitle size="text-4xl">Mengapa bermitra dengan Kotakode?</HeadingTitle>
                    <HeadingExplain className='mx-auto w-full my-5'>Bermitra dengan kami dapat berarti apa saja, mulai dari sponsor acara sederhana hingga kolaborasi jangka panjang. Bergabung dengan Kotakode memberikan manfaat nyata bagi mitra kami.</HeadingExplain>
                </Heading>
                <Heading align='center' className='mx-auto'>
                    <div className="flex gap-5">
                        <Card withShadow={false} className='flex-1 p-3'>
                            <img className="p-16 mx-auto" src="https://www.kotakode.com/static/media/socialMedia.5d209265.svg" alt="social" />
                            <CardTitle size="text-lg">Jangkau Ribuan Programmer Di Indonesia</CardTitle>
                            <CardText className='leading-8 mt-5'>Kotakode adalah tempat tujuan programmer Indonesia. Dengan bekerjasama dengan Kotakode, Anda dapat menjangkau puluhan ribu programmer Indonesia untuk meningkatkan acara Anda berikutnya.</CardText>
                        </Card>
                        <Card withShadow={false} className='flex-1 p-3'>
                            <img className="p-16 mx-auto" src="https://www.kotakode.com/static/media/expand.6b14540d.svg" alt="credibility" />
                            <CardTitle size="text-lg">Tingkatkan Kredibilitas Brand Anda</CardTitle>
                            <CardText className='leading-8 mt-5'>Kotakode adalah salah satu pemimpin di bidang teknologi Indonesia. Ketika Anda menjadi partner kami, brand Anda akan secara otomatis dipercayai oleh komunitas tech di Indonesia.</CardText>
                        </Card>
                    </div>
                </Heading>
            </Section>
            <Section>
                <Heading align='center' className={'mx-auto'}>
                    <HeadingTitle>Tipe Partnership</HeadingTitle>
                    <div className="flex gap-8 w-[70%] p-10 mx-auto">
                        <Card align='center' className='border-secondary border gap-5 border-t-8 rounded-sm' withShadow={false}>
                            <img className="p-5 mx-auto" src="https://www.kotakode.com/static/media/chatGroup.08dcde4d.svg" alt="community" />
                            <CardTitle>Community Partner</CardTitle>
                            <CardText className='p-3 leading-5'>Kotakode berkolaborasi dengan Bootcamp IT, KOMINFO, serta Institusi Pendidikan untuk memfasilitasi murid dalam proses belajar pemrograman.</CardText>
                            <Button size="font-semibold" className='text-primary text-[1.1rem] m-3 px-[.5rem] hover:opacity-100 border-white hover:border-primary hover:border' text="Gabung Sekarang" />
                        </Card>
                        <Card align='center' className='border-secondary border gap-5 border-t-8 rounded-sm' withShadow={false}>
                            <img className="p-5 mx-auto" src="https://www.kotakode.com/static/media/media.f625365d.svg" alt="community" />
                            <CardTitle>Media Partner</CardTitle>
                            <CardText className='p-3 leading-5'>Kotakode membuka peluang kolaborasi untuk mengadakan webinar, lomba, maupun promosi melalui marketing channel Kotakode.</CardText>
                            <Button size="font-semibold" className='text-primary text-[1.1rem] m-3 px-[.5rem] hover:opacity-100 border-white hover:border-primary hover:border' text="Gabung Sekarang" />
                        </Card>
                    </div>
                </Heading>
            </Section>
            <Section>
                <Heading align='center' className='mx-auto gap-12'>
                    <HeadingTitle size="text-4xl">Community Partner</HeadingTitle>
                    <HeadingExplain className='w-full mx-auto'>Kotakode berkolaborasi dengan Perusahaan Online IT Training, Pemerintah, Institusi Pendidikan, organisasi non-profit untuk memfasilitasi murid dalam belajar pemrograman.</HeadingExplain>
                    <div>
                        <img src="https://www.kotakode.com/static/media/logoCompart.4f6afde7.png" alt="partners" />
                    </div>
                </Heading>
            </Section>
            <Section>
                <Heading className='mx-auto w-full' align='center'>
                    <HeadingTitle size="text-4xl">Apa yang orang katakan</HeadingTitle>
                    <div className="grid grid-cols-3 p-14">
                        {
                            users.map((user, index) => (
                                <div key={index} onClick={() => setFocus(index)}>
                                    <Card className={`rounded-none h-full flex flex-col justify-between cursor-pointer py-10 px-5 ${focus === index ? 'text-white bg-primary' : ''}`} withShadow={false}>
                                        <div>
                                            <img src={focus === index ? `https://www.kotakode.com/static/media/quote.db4d669f.svg` : 'https://www.kotakode.com/static/media/greenQuote.1d424d67.svg'} alt="koma" />
                                            <CardText className='py-10'>{user.comments}</CardText>
                                        </div>
                                        <div>
                                            <CardTitle size="text-md" className='mb-0' >{user.name}</CardTitle>
                                            <CardText className='font-normal'>{user.position}</CardText>
                                        </div>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                </Heading>
            </Section>
            <Section className='my-[0px] bg-cover bg-no-repeat py-0 mt-10 px-0 bg-[url("https://www.kotakode.com/static/media/KokoPeek.1b8a2fba.svg")] h-screen bg-center'>
                <Heading align='center' className='w-[50%] mx-auto text-white mt-32'>
                    <HeadingTitle size="text-[2.5rem]" className=''>Tertarik untuk bergabung?</HeadingTitle>
                    <HeadingExplain className='w-full'>Tiap harinya, kami selalu memberikan yang terbaik untuk pengguna setia Kotakode. Mulai dari Aplikasi, Teknologi, dan Komunitas. Bergabunglah bersama kami untuk menyediakan ekosistem IT terbaik untuk anak bangsa.</HeadingExplain>
                    <button className='px-6 max-w-fit mx-auto py-3 text-md hover:bg-green-300 bg-primary rounded-md font-semibold text-white'>
                        GABUNG SEKARANG
                    </button>
                </Heading>
            </Section>
        </>
    )
}

const users = [
    {
        name: 'Norman Ganto',
        position: 'Country Manager at Progate Indonesia',
        comments: 'Finding a great partnership is really hard. Not only it requires commitment to the same goals, but also influence in making it happen internally. We\'ve been working with Kotakode for a few months now and It has been an absolute pleasure.'
    },
    {
        name: 'Jati Arif H',
        position: 'Admin & Marketing Supervisor at Refactory.id',
        comments: 'KotaKode cukup professional dan responsif, bahkan terbuka dengan peluang kerjasama baru dengan Refactory. Kami berharap dapat terus bersinergi dalam memberikan manfaat bagi seluruh pegiat IT khususnya Programmer di Indonesia.'
    },
    {
        name: 'Setyo Purwaningsih',
        position: 'Head of Teacher at Timedoor Coding Academy',
        comments: 'KotaKode adalah platform yang baik untuk berbagi portofolio coding siswa kami, mereka juga bisa berbagi dan saling mengomentari project masing-masing, KotaKode mendukung mereka belajar dan memperluas networking mereka baik dengan sesama programmer newbie ataupun programmer profesional'
    },
]
