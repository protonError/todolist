import { Button } from '@src/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <section className="bg-background text-primary h-screen flex justify-center items-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-foreground md:text-4xl ">Something&quot;s missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can&quot;t find that page. You&quot;ll find lots to explore on the home page. </p>
                    <Link href="/">
                        <Button size="lg" className="inline-flex  hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound
