import { Card, CardText, CardTitle } from '../Card'

export function Issues({ issue }) {
    return (
        <a href="#" className='hover:full-shadow'>
            <Card className='flex hover-shadow p-[1.5rem]'>
                <div className='flex h-full flex-col px-5 gap-16 justify-between'>
                    <div className='text-center'>
                        <div className='p-1'>
                            <CardTitle className='mb-[0px] font-semibold'>{issue.likes}</CardTitle>
                            <CardText className='text-xs'>Suka</CardText>
                        </div>
                        <div className='p-1'>
                            <CardTitle className='mb-[0px] font-semibold'>{issue.answers}</CardTitle>
                            <CardText className='text-xs'>Jawaban</CardText>
                        </div>
                    </div>
                    <div className='flex gap-2 text-xs text-center justify-center items-center'>
                        <img src="https://img.icons8.com/?size=25&id=60022&format=png&color=757575" alt="eye" />
                        <p>{issue.views}</p>
                    </div>
                </div>
                <div>
                    <CardTitle className="font-medium">{issue.title}</CardTitle>
                    <CardText className='text-ellipsis line-clamp-2'>{`<?php if (isset($_GET['kode'])) { $sql_cek = "SELECT * FROM 'tb_kasus', tb_pelapor, tb_korban, tb_pelaku WHERE id_kasus='" . $_GET['kode'] . "'"; $qu`}</CardText>
                    <div className='flex mt-3'>
                        {
                            issue.tags.map((tag, index) => (
                                <p key={index} className='bg-primary/20 border-none m-1 text-sm px-2 py-1 rounded-sm'>{tag}</p>
                            ))
                        }
                    </div>
                    <div className='w-full flex flex-col items-end justify-center'>
                        <p className='text-sm opacity-70'>Aktivitas terakhir {issue.lastActivity} yang lalu</p>
                        <div className='p-2 text-sm font-bold flex items-center gap-2'>
                            <p className='bg-primary/20 px-1 h-fit rounded-sm'>lvl.{issue.userLevel}</p>
                            <p>{issue.username}</p>
                            <p className='px-4 py-2 rounded-full bg-pink-200 font-normal'>{issue.username[0].toUpperCase()}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </a>
    )
}
