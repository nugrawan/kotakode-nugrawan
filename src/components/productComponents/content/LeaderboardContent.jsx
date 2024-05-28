import { Heading, HeadingExplain, HeadingTitle } from "../../Heading";
import { LeaderboardHead, LeaderboardItems } from "../LeaderboardComponents";
import { LeaderboardList } from "../Lists";
import ProductHeading from "../ProductHeading";
import SearchButton from "../SearchButton";

import { leaderboard } from "../../../data/products/products";
import { leaderboardNewUsers, leaderboardUsers } from "../../../data/products/leaderboard";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

export default function DashboardContent() {
    const { activeLeaderboardIndex } = useContext(ProductContext);

    return (
        <>
            <Heading className='w-[760px] pr-10'>
                <ProductHeading withButton={false} title='Leaderboard' summary='Halaman untuk mencari user di Kotakode dan melihat ranking kredibilitas.' />
                <SearchButton placeholder='Ketik disini untuk mencari user...' text='Telusuri' />
                <div className='my-5'>
                    <LeaderboardList leaderboard={leaderboard} />
                    <div className='mt-28'>
                        <LeaderboardHead />
                        <>
                            {
                                activeLeaderboardIndex === 0 ?
                                    leaderboardUsers.map((item, index) => (
                                        <LeaderboardItems isScore={true} key={index} item={item} index={index} />
                                    )) :
                                    activeLeaderboardIndex === 1 ?
                                        <BestWeek /> :
                                        activeLeaderboardIndex === 2 ?
                                            leaderboardNewUsers.map((item, index) => (
                                                <LeaderboardItems key={index} item={item} index={index} />
                                            )) : ''
                            }
                        </>
                    </div>
                </div>
            </Heading>
        </>
    )
}

function BestWeek() {
    return (
        <div className="flex p-5 pt-14">
            <img className="w-full p-5" src="https://www.kotakode.com/static/media/koko-pusing.75a998ca.svg" alt="mascot" />
            <div className="p-5 w-full">
                <HeadingTitle className='text-[1.5rem] font-medium'>Belum menemukan apa yang ingin kamu cari?</HeadingTitle>
                <HeadingExplain className='text-lg my-4 w-full'>Silahkan periksa sekali pencarian Kamu lagi.</HeadingExplain>
                <button className='px-10 py-5 text-2xl hover:opacity-60 bg-primary rounded-md font-bold text-white'>
                    Kembali Ke Atas
                </button>
            </div>
        </div>
    )
}