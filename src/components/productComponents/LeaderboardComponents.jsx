import { Card } from "../Card";

export function LeaderboardHead() {
    return (
        <Card className='bg-smoothSecondary flex justify-between rounded-lg' padding="px-12 py-4">
            <div className="flex font-semibold gap-8">
                <p>Rank</p>
                <p>Nama Pengguna</p>
            </div>
            <div className="flex font-semibold gap-7">
                <p>Pertanyaan</p>
                <p>Jawaban</p>
                <p>Blogs</p>
            </div>
        </Card>
    )
}

export function LeaderboardItems({ index = 0, item, isScore = false }) {
    return (
        <Card className='flex justify-between rounded-lg my-5' padding="px-12 py-5">
            <div className="flex font-semibold gap-7">
                <div className="flex w-10 items-center justify-center">
                    {
                        isScore && (
                            index === 0 ? <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" color="#FFB300" size="36" height="36" width="36" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(255, 179, 0)' }}><path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path></svg> :
                                index === 1 ? <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" color="#A7A7A7" size="36" height="36" width="36" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(167, 167, 167)' }}><path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path></svg> :
                                    index === 2 ? <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" color="#F9813A" size="36" height="36" width="36" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(249, 129, 58)' }}><path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path></svg> :
                                        ''
                        )
                    }
                    <strong className={`absolute mb-3 ${index >= (isScore ? 3 : 0) ? 'text-text' : 'text-white'}`}>{index + 1}</strong>
                </div>
                <div className="flex items-center gap-3">
                    {
                        isScore ? (
                            <img className="w-10 h-10 cursor-pointer rounded-full" src={item.image} alt="avatar" />
                        ) : (
                            <div className="w-10 bg-purple-200 font-normal text-center content-center h-10 cursor-pointer rounded-full">
                                <p>{item.username[0].toUpperCase()}</p>
                            </div>
                        )
                    }
                    <div>
                        <div className="flex text-sm gap-3 items-center mb-2 font-bold">
                            <p className="hover:underline cursor-pointer">{item.username}</p>
                            <p className='bg-primary/20 inline text-xs px-1 hover:bg-primary/40 rounded-sm'>Lvl. {item.level}</p>
                        </div>
                        {
                            isScore && (
                                <div className="flex">
                                    <img className="rounded-full h-5 w-5" src="https://storage.googleapis.com/kotakode-prod-public/badges/python/python-suhu.svg" alt="badge" />
                                    <img className="rounded-full h-5 w-5" src="https://storage.googleapis.com/kotakode-prod-public/badges/machine-learning/machine-learning-newbie.svg" alt="badge" />
                                    <img className="rounded-full h-5 w-5" src="https://storage.googleapis.com/kotakode-prod-public/images/1e553fd0-56f5-436c-9c89-60456dda087a-moderator.png" alt="badge" />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="flex items-center font-semibold gap-20 px-3">
                <p>{item.asks}</p>
                <p>{item.answers}</p>
                <p>{item.blogs}</p>
            </div>
        </Card >
    )
}
