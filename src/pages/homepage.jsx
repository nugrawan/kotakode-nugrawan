import Button from '../components/Button'
import { Card, CardText, CardTitle } from '../components/Card';
import { Heading, HeadingExplain, HeadingTitle, Section } from '../components/Heading';
import { statistic, techs, partners } from '../data/home'

const Home = () => {
  const flexCenter = 'flex items-center'
  return (
    <>
      <Section className="flex-col mt-36">
        <div className='flex'>
          <Heading>
            <HeadingTitle>Jadilah Bagian dari Komunitas Tech Terbesar di Indonesia</HeadingTitle>
            <HeadingExplain>Ikutan diskusi forum tanya jawab, tulis blog dan Membangun portofolio semua di Kotakode</HeadingExplain>
            <div className={`gap-3 ${flexCenter}`}>
              <input className='border px-3 py-3 border-text/70 outline-none focus:border-secondary rounded-sm text-sm' type="email" name="email" placeholder="Masukkan Email Kamu" id="email" />
              <Button text="Daftar" className="bg-secondary text-white" />
            </div>
            <div className='flex gap-7 mt-14'>
              {
                statistic.map((item, index) => (
                  <Card align="center" key={index} className='max-w-[8rem] bg-smoothSecondary'>
                    <CardTitle className="text-[2.1rem] text-black">{item.value}</CardTitle>
                    <CardText className="text-xs">{item.title}</CardText>
                  </Card>
                ))
              }
            </div>
          </Heading>
          <div>
            <img className='w-fit' src="https://www.kotakode.com/static/media/globe.75274cb3.gif" alt="Hero" />
          </div>
        </div>
      </Section>
      <Section>
        <Card className="bg-smoothPrimary flex gap-10 p-8 pb-14">
          <div className='flex flex-col justify-between gap-10'>
            <Card className={`bg-white ${flexCenter} gap-3 p-6`}>
              <div className='p-3 w-[100%]'>
                <img src="https://www.kotakode.com/static/media/illustrasi-landing-2-min.7e571b39.png" alt="image" />
              </div>
              <div>
                <CardTitle>Jawaban cepat, tepat & gratis</CardTitle>
                <CardText className="text-sm">Dapatkan jawaban dalam hitungan menit dari ribuan programmer lainnya.</CardText>
              </div>
            </Card>
            <Card className={`bg-white ${flexCenter} gap-3 p-6`}>
              <div className='p-3 w-[100%]'>
                <img src="https://www.kotakode.com/static/media/illustrasi-landing-3-min.827f5eb7.png" alt="image" />
              </div>
              <div>
                <CardTitle>Konsep Gamifikasi</CardTitle>
                <CardText className="text-sm">Dapatkan badge menarik yang akan meningkatkan personal branding kamu sebagai seorang programmer.</CardText>
              </div>
            </Card>
          </div>

          <Card className="bg-white p-6" align="center" >
            <div className='p-5 w-[80%] mx-auto'>
              <img src="https://www.kotakode.com/static/media/illustrasi-landing-4-min.b38b89e3.png" alt="image" />
            </div>
            <div>
              <CardTitle>Bangun Online Portofolio</CardTitle>
              <CardText className="text-sm">Portofolio ibaratkan sebuah aset yang berharga bagi setiap orang. Semakin kamu aktif di dalam forum, semakin membuktikan bahwa kamu adalah programmer yang berkualitas.</CardText>
            </div>
          </Card>

          <Heading className="text-white text-left">
            <HeadingTitle>Mengapa perlu menggunakan Kotakode?</HeadingTitle>
            <HeadingExplain className="text-lg w-full bg-right bg-[url('https://www.kotakode.com/static/media/orangeDot.976c60df.svg')] bg-no-repeat">Ibaratkan sebuah kota dengan penduduk para programmer, Kotakode memberikan fasilitas guna mensejahterakan kehidupan penduduknya.</HeadingExplain>
          </Heading>
        </Card>
      </Section>
      <Section>
        <Heading className="w-[50%] my-auto mr-20 py-10 bg-no-repeat bg-[url('https://www.kotakode.com/static/media/greenDot.7e463379.svg')]">
          <HeadingTitle>Satu Platform, Banyak Solusi</HeadingTitle>
          <p>Kotakode memfasilitasi dengan memberikan berbagai fitur yang menarik dan terbaik untuk mengembangkan ekosistem IT anak bangsa.</p>
        </Heading>
        <div className='flex flex-col gap-10 p-10'>
          <Card className={`${flexCenter} w-[50%] gap-5 py-5 self-end full-shadow`}>
            <div className='p-5 border-4 -ml-20 bg-white border-primary rounded-full w-[125%]'>
              <img src="https://www.kotakode.com/static/media/landingGraphic4.1ed65e42.svg" alt="image" />
            </div>
            <div>
              <CardTitle className="text-[1.5rem]">Online Forum</CardTitle>
              <CardText className="text-sm mb-5">Kotakode dapat menjawab pertanyaan dan membantu programmer dalam memberikan jawaban yang berkualitas</CardText>
              <div>
                <Button text="Tanya Sekarang" className="bg-secondary px-7 py-3 font-bold text-white" />
              </div>
            </div>
          </Card>
          <Card className={`${flexCenter} w-[50%] gap-5 py-5 self-center full-shadow`}>
            <div className='py-7 px-5 border-4 -ml-20 bg-white border-primary rounded-full w-[125%]'>
              <img src="https://www.kotakode.com/static/media/landingGraphic5.16f83186.svg" alt="image" />
            </div>
            <div>
              <CardTitle className="text-[1.5rem]">Microblogging</CardTitle>
              <CardText className="text-sm mb-5">Kotakode menyediakan wadah bagi programmer untuk berbagi wawasan terkait info terkini di bidang IT</CardText>
              <div>
                <Button text="Tulis Sekarang" className="bg-secondary px-7 py-3 font-bold text-white" />
              </div>
            </div>
          </Card>
          <Card className={`${flexCenter} w-[50%] gap-5 py-5 self-end full-shadow`}>
            <div className='py-6 p-5 border-4 -ml-20 bg-white border-gray-300 rounded-full w-[125%]'>
              <img src="data:image/png;base64,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" alt="image" />
            </div>
            <div>
              <CardTitle className="text-[1.5rem]">Job Hiring (Coming Soon)</CardTitle>
              <CardText className="text-sm mb-5">Kotakode membantu rekruiter dalam mencari talent terbaik yang memenuhi standar perusahaan</CardText>
              <div>
                <Button text="Cari Kerja" className="bg-gray-600 px-7 py-3 font-bold text-white" />
              </div>
            </div>
          </Card>
        </div>
      </Section>
      <Section className="w-full text-center bg-cover flex-col bg-[url('https://www.kotakode.com/static/media/telegramBG.26676839.svg')]">
        <div className='mx-auto p-10 mt-20 text-center'>
          <img className='w-[70%] mx-auto' src="https://www.kotakode.com/static/media/telegram.f8b93910.svg" alt="telegram" />
        </div>
        <Heading className="text-center gap-5 mx-auto w-full">
          <HeadingTitle className="text-[2rem]">Gabung Komunitas Telegram Kotakode</HeadingTitle>
          <HeadingExplain className="mx-auto text-lg w-full">Kotakode berkolaborasi dengan berbagai pioneer yang inovatif untuk bersama mencapai tujuan yang besar</HeadingExplain>
          <Button text="Ikutan Telegram" className="bg-secondary mx-auto px-7 w-fit py-3 font-bold text-white" />
        </Heading>
      </Section>
      <Section>
        <Heading className="w-full" align="center">
          <HeadingTitle className="w-[60%] mx-auto">Dapatkan Bantuan dari Ribuan Ahli dan Professional Programmer di Seluruh Indonesia</HeadingTitle>
          <HeadingExplain className="mx-auto my-5 text-xl w-full">Dari Berbagai Bahasa Pemrograman, Framework, Tools Coding, dan Contoh Pengembangan Proyek</HeadingExplain>
          <div className={`${flexCenter} justify-center flex-wrap margin-auto gap-3 px-10`}>
            {
              techs.map((item, index) => (
                <div key={index} className='mt-3'>
                  <Card className={`bg-white ${flexCenter} gap-2 rounded-md border-2 justify-center border-primary `} key={index}>
                    <img className='h-16 w-16' src={item.image} alt="tech" />
                  </Card>
                  <p className='text-center my-3'>{item.name}</p>
                </div>
              ))
            }
          </div>
          <Button text="Ajukan Pertanyaan" className="bg-secondary mx-auto px-7 w-fit py-3 font-bold text-white" />
        </Heading>
      </Section>
      <Section>
        <Heading align="center" className="w-full">
          <HeadingTitle>Diliput Oleh</HeadingTitle>
          <div className='flex mt-10 justify-around gap-10 items-center'>
            {
              partners.map((partner, index) => (
                <div key={index} className='max-w-32'>
                  <img src={partner} alt="partner" />
                </div>
              ))
            }
          </div>
        </Heading>
      </Section>
    </>
  );
};

export default Home;
