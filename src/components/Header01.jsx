import { Link } from "react-router-dom";

export default function Header01() {
    return (
        <section className=" bg-black ">
            <div className="max-w-5xl mx-auto py-8 ">
                <nav className="flex flex-wrap items-end justify-end text-base font-bold tracking-tight ">
                    <Link to={'/'}
                        className="text-white mr-5 hover:underline decoration-4 decoration-yellow-500">
                        Home
                    </Link>

                    <Link to={'/contact'}
                        className="text-white mr-5 hover:underline decoration-4 decoration-yellow-500">
                        Contact
                    </Link>
                </nav>
            </div>

        </section>
    )
}