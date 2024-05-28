import Button from "../components/Button";
import { Card, CardTitle } from "../components/Card";
import { Heading, HeadingExplain, HeadingTitle, Section } from "../components/Heading";

export default function Events() {
    return (
        <>
            <Section className="p-[0px] flex-col w-full my-[0px]">
                <Heading align="center" className="bg-cover rounded-3xl w-full mt-10 pt-28 bg-center p-[6rem] h-[80vh] bg-no-repeat bg-[url('https://www.kotakode.com/static/media/speakers-hero.4a89b057.png')]">
                    <div className="w-[50%] mx-auto">
                        <HeadingTitle className="text-white text-[2.5rem] flex items-center justify-center">KOTAKODE<Button text='LIVE' className='bg-[#d62929] ml-3 px-[1rem] border-none' size="text-2xl" /></HeadingTitle>
                        <HeadingTitle size="text-2xl" className="text-white font-semibold my-8">Dapatkan wawasan seputar pemrograman melalui webinar Kotakode</HeadingTitle>
                        <button className='px-10 py-5 text-2xl hover:bg-green-300 bg-primary rounded-md font-bold text-white'>
                            Lihat Daftar Webinar
                        </button>
                        <p className="text-sm font-bold underline mt-5 text-white">Nominasikan Pembicara</p>
                    </div>
                </Heading>
                <Heading className='my-16 w-full' align='center'>
                    <div>
                        <HeadingTitle size="text-4xl">Acara Yang Akan Datang</HeadingTitle>
                        <HeadingExplain className="text-xl mx-auto opacity-70 my-5">Ayo segera daftar di acara terbaru dari Kotakode dan dapatkan wawasan menarik seputar pemrograman!</HeadingExplain>
                        <HeadingTitle size="text-2xl p-3 text-primary">Tunggu Acara Berikutnya...</HeadingTitle>
                    </div>
                    <div className="mt-20 w-[65%] mx-auto">
                        <HeadingTitle size="text-4xl">Acara Sebelumnya</HeadingTitle>
                        <HeadingExplain className="text-xl mx-auto opacity-70 my-5">Belum sempat mengikuti acara dari Kotakode sebelumnya? Tenang saja kalian masih bisa menontonnya melalui Youtube channel Kotakode! Jangan lupa subscribe juga ya!</HeadingExplain>
                    </div>
                    <div className="grid grid-cols-3 gap-10 w-[70%] mx-auto">
                        {
                            [1, 2, 3, 4, 5, 6].map((item, index) => (
                                <Card withShadow={false} key={index} className='hover:underline cursor-pointer hover:shadow-2xl'>
                                    <img src="https://storage.googleapis.com/kotakode-prod-public/images/d662f300-8fc2-4bfa-8138-2635ea5ddeb5-kotatalks.jpeg" alt="event" />
                                    <div className="flex gap-5 mt-3">
                                        <p className="text-xl opacity-80 w-[15%] border-black border-y py-2 h-fit font-semibold ">Jan 30</p>
                                        <div>
                                            <CardTitle size="text-lg">KotaTalks 31: How to Kickstart your Tech Career with Kotakode Academy</CardTitle>
                                            <ul className="tfont-medium text-gray-500 text-sm flex flex-col gap-2">
                                                <li className="flex gap-2 items-center"><img src="https://img.icons8.com/?size=15&id=EPWi0qK2GM93&format=png&color=14a359" alt="date" />Minggu, 30 Januari 2022</li>
                                                <li className="flex gap-2 items-center"><img src="https://img.icons8.com/?size=15&id=10034&format=png&color=14a359" alt="clock" />14.00 WIB</li>
                                                <li className="flex gap-2 items-center"><img src="https://img.icons8.com/?size=15&id=7880&format=png&color=14a359" alt="location" />Live at Kotakode Youtube Channel</li>
                                                <li className="flex gap-2 items-center"><img src="https://img.icons8.com/?size=15&id=22185&format=png&color=14a359" alt="payment" />Free</li>
                                                <li className="flex gap-2 items-center"><img src="https://img.icons8.com/?size=15&id=85546&format=png&color=14a359" alt="chatbox" />Event tanya jawab</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        }
                    </div>
                </Heading>
            </Section>
        </>
    )
}
