import { tags } from "../../data/products/products";
import { Card, CardText, CardTitle } from "../Card";


export function ForumAside({ options }) {
    return (
        <>
            <Card className='shadow-md mt-72 p-3 rounded-md'>
                <CardTitle size="text-md" className='flex items-center font-semibold gap-3 pb-5 border-b'><img className='w-5 h-5' src="https://img.icons8.com/?size=25&id=7873&format=png&color=14a359" alt="pin" /> Selamat Datang!</CardTitle>
                <div className='forum-right text-md'>
                    <CardText>Ikuti <a href='#'>facebook</a> , <a href='#'>telegram</a> dan <a href='#'>instagram</a> kami untuk update terbaru.</CardText>
                    <CardText className='my-5'>Setelah membuat pertanyaan, kamu bisa copy-paste link pertanyaan kamu ke grup <a>Telegram</a> atau <a>FB</a> untuk mengasih tahu para member di grup tersebut</CardText>
                    <CardText>Ada yang tidak dimengerti? <a>FAQ</a>.</CardText>
                </div>
            </Card>
            <Card>
                <CardTitle size="text-md" className='flex items-center gap-3 pb-3 border-b'><img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=102261&format=png&color=14a359" alt="pin" />User Teraktif</CardTitle>
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
        </>
    )
}
export function BlogAside() {
    return (
        <>
            <Card className='shadow-md mt-72 p-3 rounded-md'>
                <CardTitle size="text-md" className='flex items-center font-semibold gap-1 pb-5 border-b'><p className='w-5 h-5 text-primary font-bold text-xl' alt="pin">#</p>Tag Populer</CardTitle>
                <div className='text-md'>
                    {
                        tags.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))
                    }
                </div>
            </Card>
        </>
    )
}
