import { Link } from "react-router-dom"

export default function Error () {
    return(
        <>
        <section className="flex flex-col items-center justify-center text-center h-screen text-white">
            {/* <body className=""></body> */}
            {/* <h1>Error | The request resource could not be found </h1> */}
            <h1 className=" txtErr  text-5xl font-bold ">404 </h1>
            <p className="w-80">I'm afraid you've found a page that doesn't exist on SpaceX. That can happen when you follow a link to something that has since been deleted. Or the link was incorrect to begin with</p>
            
            <p></p>
            <p className="w-80	pt-6 pb-10">Sorry about that. We've logged the error for review, in case it's our fault.</p>
            <Link to="/" className="btn">&larr; Back to Homepage</Link>
        </section>
        </>
    )
}