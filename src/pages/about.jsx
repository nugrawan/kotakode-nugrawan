import { Heading, HeadingTitle, Section } from "../components/Heading"
import { Card, CardText, CardTitle } from "../components/Card"

const About = () => {
  return (
    <>
      <Section className="p-0 flex-col w-full my-0">
        <Heading align="center" className="bg-cover rounded-3xl w-full mt-10 p-[6rem] h-[70vh] bg-no-repeat bg-[url('https://www.kotakode.com/static/media/BackgroundFAQ.82a9976b.png')]">
          <p className="border-t-4 w-32 border-secondary mx-auto"></p>
          <HeadingTitle className="text-white text-[2.5rem]">Dukung kami dalam menciptakan ekosistem yang inklusif bagi programmer di seluruh Indonesia</HeadingTitle>
        </Heading>
        <Card align="center" className="w-[65%] py-10 px-10 rounded-md -mt-10 full-shadow mx-auto bg-white">
          <CardTitle className="text-4xl font-semibold p-3">Tentang Kotakode</CardTitle>
          <CardText>Kotakode merupakan platform komunitas bagi para pegiat IT di Indonesia dimana programmer dapat belajar dan berbagi wawasan seputar dunia IT terkini untuk mendukung memberikan pertumbuhan perekonomian di Indonesia.</CardText>
        </Card>
      </Section>
      <Section>
        <Heading align="center" className="mx-auto">
          <HeadingTitle>Tim Kotakode</HeadingTitle>
        </Heading>
      </Section>
    </>
  )
}

export default About
