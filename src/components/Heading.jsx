export const Section = ({ children, className }) => {
    return (
        <section className={`my-20 p-10 px-20 flex w-full ${className}`}>{children}</section>
    )
}

export const Heading = ({ children, className, align }) => {
    return (
        <div className={`flex flex-col gap-5 w-[75%] ${align === 'center' ? 'text-center justify-center' : ''} ${className}`}>{children}</div>
    )
}

export const HeadingTitle = ({ children, className, size = 'text-5xl' }) => {
    return (
        <h1 className={`leading-tight font-bold ${className} ${size}`}>{children}</h1>
    )
}

export const HeadingExplain = ({ children, className }) => {
    return (
        <p className={`w-[60%] ${className}`}>{children}</p>
    )
}