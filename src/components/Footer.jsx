const products = ["pertanyaan", "Blog", "Pengguna", "Events", "Partnership"]
const companies = ["About", "FAQ", "Rules", "Legal"]
const social = [
    'https://img.icons8.com/?size=100&id=8808&format=png&color=ffffff',
    'https://img.icons8.com/?size=100&id=85154&format=png&color=ffffff',
    'https://img.icons8.com/?size=100&id=8824&format=png&color=ffffff',
    'https://img.icons8.com/?size=100&id=8818&format=png&color=ffffff'
]

const Footer = () => {
    return (
        <div className="bg-[#1f2329] w-full border-t-2 border-white px-20 text-[#b2b9bf] p-5 pt-16 font-quicksand font-bold">
            <div className="container mb-5 mx-auto flex justify-around">
                <section className="flex flex-col gap-5">
                    <h3>BAGIAN DARI:</h3>
                    <div className="flex gap-5 items-center">
                        <img className="w-28 rounded-md bg-white" src="https://www.kotakode.com/static/media/block71.f06f3442.svg" alt="Block71" />
                        <img className="w-52 h-fit bg-white" src="https://www.kotakode.com/static/media/Google_for_Startups_logo.3a4b3b10.svg" alt="Google startups" />
                    </div>
                </section>
                <section>
                    <h3>PRODUK</h3>
                    <ul className="flex flex-col gap-2 mt-5 font-normal opacity-80">
                        {
                            products.map((product, index) => (
                                <li key={index}><a href="#">{product}</a></li>
                            ))
                        }
                    </ul>
                </section>
                <section>
                    <h3>PERUSAHAAN</h3>
                    <ul className="flex flex-col gap-2 mt-5 font-normal opacity-80">
                        {
                            companies.map((product, index) => (
                                <li key={index}><a href="#">{product}</a></li>
                            ))
                        }
                    </ul>
                </section>
                <section>
                    <h3>HUBUNGI KAMI</h3>
                    <ul className="flex flex-col gap-2 mt-5 font-normal opacity-80">
                        <li><a href="#">petertanugraha@kotakode.com</a></li>
                        <li className="flex gap-2">
                            {
                                social.map((social, index) => (
                                    <a key={index} href="#">
                                        <img className="w-5 color-white" src={social} alt="socialLogo" />
                                    </a>
                                ))
                            }
                        </li>
                    </ul>
                </section>
            </div>
            <div className="text-center p-3 font-normal text-sm flex flex-col gap-2">
                <p>PT. Kota Digital Nusantara</p>
                <p>Copyright 2020 Kotakode. All rights reserved</p>
                <p>Made with ❤️   in 🇮🇩</p>
            </div>
        </div>
    );
};

export default Footer;
