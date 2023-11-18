import { Link } from "react-router-dom";

export default function Header01() {
    return (
        <section className="mx-auto flex justify-between pt-8 max-w-5xl ">
            
            <nav className="flex flex-wrap items-center justify-center text-base font-bold tracking-tight md:ml-auto">
                <Link to={'/'}
                    className="text-white mr-5 invisible md:visible hover:underline decoration-4 decoration-yellow-500">
                    Home
                </Link>

                <Link to={'/contact'}
                    className="text-white mr-5 invisible md:visible hover:underline decoration-4 decoration-yellow-500">
                    Contact
                </Link>
            </nav>
        </section>
    )
}