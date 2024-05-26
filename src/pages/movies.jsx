import { Heading, HeadingTitle, Section } from "../components/Heading";
import { CardTitle } from "../components/Card";
import { getData } from "../data/movies";
import { useState, useEffect } from 'react';

const Movies = () => {
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setPopular(await getData('https://api.themoviedb.org/3/movie/popular'));
                setTrending(await getData('https://api.themoviedb.org/3/trending/all/day'));
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return (
            <div className="flex bg-[#1f2329] items-center justify-center w-full h-screen" >
                <div className="flex justify-center items-center space-x-1 text-sm text-white">
                    <svg fill='none' className="w-10 font-semibold h-10 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                        <path clipRule='evenodd'
                            d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                            fill='currentColor' fillRule='evenodd' />
                    </svg>
                    <div className="text-xl font-semibold">Loading ...</div>
                </div>
            </div>
        )
    }
    if (error) return <p className="w-full h-screen flex items-center justify-center text-2xl font-semibold">{error}</p>;

    return (
        <>
            <Section className='my-[0px] px-[0px]'>
                <Heading className='w-full'>
                    <div className="bg-[#1f2329] text-white p-20">
                        <HeadingTitle className='text-[2rem]'>Today&apos;s Trending</HeadingTitle>
                        <div className="grid grid-cols-8 gap-5 p-3 w-full">
                            {
                                trending.map((movie, index) => (
                                    <a href={movie.title || movie.name} key={index}>
                                        <div className="rounded-md overflow-hidden object-cover h-48 w-32">
                                            {
                                                movie.poster_path ?
                                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
                                                    : <div className="w-full h-full bg-gray-500"></div>
                                            }
                                        </div>
                                        <div>
                                            <CardTitle className="text-base overflow-hidden mt-2">{movie.title || movie.name}</CardTitle>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="text-[#1f2329] bg-white p-20">
                        <HeadingTitle className='text-[2rem]'>Popular Movies</HeadingTitle>
                        <div className="grid grid-cols-8 gap-5 p-3 w-full">
                            {
                                popular.map((movie, index) => (
                                    <a href={movie.title || movie.name} key={index}>
                                        <div className="rounded-md overflow-hidden object-cover h-48 w-32">
                                            {
                                                movie.poster_path ?
                                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
                                                    : <div className="w-full h-full bg-gray-500"></div>
                                            }
                                        </div>
                                        <div>
                                            <CardTitle className="text-base overflow-hidden mt-2">{movie.title || movie.name}</CardTitle>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </Heading>
            </Section>
        </>
    );
};

export default Movies