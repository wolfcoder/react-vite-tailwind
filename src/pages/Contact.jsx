import React, { useEffect } from 'react'

export default function Contact() {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://assets.tidycal.com/js/embed.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <>
            <section className="bg-black max-w-5xl card-profile py-28 px-5 mx-auto ">
                <div className="max-w-2xl">
                    <img
                        alt="Bams"
                        className="h-14 w-14 rounded-full mb-3"
                        src="./bams.jpg"
                    />
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Contact me.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        You can Contact me through this avalaible platform, or make an appointment with me.
                    </p>
                    <div className="mt-6 flex gap-6">
                        <a
                            className="group -m-1 p-1"
                            aria-label="Follow on LinkedIn"
                            href="https://www.linkedin.com/in/bambangsetyawan/"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                            >
                                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                            </svg>
                        </a>
                        <a
                            className="group -m-1 p-1"
                            aria-label="Follow on GitHub"
                            href="https://github.com/wolfcoder"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                                ></path>
                            </svg>
                        </a>
                        <a
                            className="group -m-1 p-1"
                            aria-label="Follow on GitHub"
                            href="https://github.com/wolfcoder"
                        >
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M357.2,296.9c-17,0-33-7.2-47.4-18.9l3.5-16.6.1-.6c3.2-17.6,13.1-47.2,43.8-47.2a41.65,41.65,0,1,1,0,83.3Zm0-125.5c-39.2,0-69.5,25.4-81.9,67.3-18.8-28.3-33.1-62.2-41.4-90.8H191.7V257.6a39.3,39.3,0,0,1-78.6,0V147.8H71V257.5c0,44.9,36.5,81.8,81.4,81.8s81.4-36.9,81.4-81.8V239.1c8.2,17.1,18.2,34.4,30.4,49.6L238.4,410.1h43.1l18.7-88c16.4,10.5,35.2,17.1,56.8,17.1,46.2,0,83.8-37.8,83.8-84.1a83.65,83.65,0,0,0-83.6-83.7" /></svg>
                        </a>

                    </div>
                </div>
            </section>
            <section className='bg-white'>
                <div className='mx-auto max-w-5xl'>
                    <div className="tidycal-embed " data-path="bambang"></div>
                </div>
            </section>
        </>
    )
}