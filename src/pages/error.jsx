const ErrorPage = () => {
    return (
        <div className="flex flex-col font-semibold items-center justify-center min-h-screen">
            <h1 className="text-5xl font-bold text-primary">404</h1>
            <p className="text-center text-3xl mb-5">Oops, halaman yang anda cari tidak ditemukan..</p>
            <img className="w-1/5" src="https://www.kotakode.com/static/media/koko-searching.d0e97265.svg" alt="Error" />
        </div>
    )
}

export default ErrorPage
