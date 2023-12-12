import { Button } from '@nextui-org/react'
import Image from 'next/image'
import 'remixicon/fonts/remixicon.css'

export default function Home() {
    return (
        // <main className="flex min-h-screen flex-col items-center justify-between p-24">
        //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        //       Get started by editing&nbsp;
        //       <code className="font-mono font-bold">src/app/page.tsx</code>
        //     </p>
        //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        //       <a
        //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         By{' '}
        //         <Image
        //           src="https://gits.id/wp-content/uploads/2023/10/S-min.png"
        //           alt="Vercel Logo"
        //           className="dark:invert"
        //           width={100}
        //           height={24}
        //           priority
        //         />
        //       </a>
        //     </div>
        //   </div>

        //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        //     <Image
        //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        //       src="/next.svg"
        //       alt="Next.js Logo"
        //       width={180}
        //       height={37}
        //       priority
        //     />
        //   </div>

        //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        //     <a
        //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Docs{' '}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Find in-depth information about Next.js features and API.
        //       </p>
        //     </a>

        //     <a
        //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Learn{' '}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Learn about Next.js in an interactive course with&nbsp;quizzes!
        //       </p>
        //     </a>

        //     <a
        //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Templates{' '}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Explore starter templates for Next.js.
        //       </p>
        //     </a>

        //     <a
        //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <h2 className={`mb-3 text-2xl font-semibold`}>
        //         Deploy{' '}
        //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        //           -&gt;
        //         </span>
        //       </h2>
        //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        //         Instantly deploy your Next.js site to a shareable URL with Vercel.
        //       </p>
        //     </a>
        //   </div>
        // </main>
        <>
            <nav>

            </nav>

            <main>
                <section id='jumbotron'>
                    <div className='mt-24 py-5'>

                        <p className='font-bold text-2xl ml-5 mb-3.5'><span className='text-primary'>Build</span>, <span className='text-primary'>integrate</span>, <span className='text-primary'>manage</span></p>

                        <p className='font-bold text-black1 text-2xl ml-12 mb-3.5'>your digital system with us</p>
                    </div>

                    <div className='bg-[url("https://gits.id/wp-content/uploads/2023/10/S-min.png")] bg-center bg-cover px-4 pt-24'>
                        <div className='grid gap-y-5'>

                            <p className='text-white text-sm'><span className='text-primary pb-3.5'>GITS.ID</span> is your partner to achieve your business goals and improve your company productivity, powered by valuable Insights and Artificial Intelligence through IT solutions.</p>

                            {/* NUMBER */}
                            <div className='grid gap-y-5 mb-5'>

                                <div className='flex gap-x-5'>

                                    <div>
                                        <h3 className='my-2 text-secondary font-bold text-2xl'>100+</h3>
                                        <p className='text-white text-sm'>Clients Satisfied</p>
                                    </div>
                                    <div>
                                        <h3 className='my-2 text-secondary font-bold text-2xl'>80+</h3>
                                        <p className='text-white text-sm'>Projects Success</p>
                                    </div>

                                </div>

                                <div className='flex gap-5'>

                                    <div>
                                        <h3 className='my-2 text-secondary font-bold text-2xl'>5</h3>
                                        <p className='text-white text-sm'>Ready to Use Platforms</p>
                                    </div>
                                    <div>
                                        <h3 className='my-2 text-secondary font-bold text-2xl'>15</h3>
                                        <p className='text-white text-sm'>Years of Experience</p>
                                    </div>

                                </div>

                            </div>

                            {/* BUTTON */}
                            <div className='grid gap-2.5 mb-12'>
                                <Button radius='none' className='bg-white h-11'><span className='text-primary font-bold py-2'>Consult with Us</span></Button>
                                <Button radius='none' variant='bordered' className='py-2 h-11'>
                                    <span className='flex items-center content-center w-full'>
                                        <span className='text-white font-bold w-full'>Learn More</span>
                                        <i className="ri-arrow-right-line ri-lg text-white"></i>
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='client'>

                </section>

                <section id='impacts' className='py-10 grid gap-5'>
                    <div className='p-5 grid gap-2.5'>
                        <p className='uppercase text-sm text-neutral2'>impacts</p>
                        <h2 className='uppercase text-4xl text-black1 font-bold'>Scale up your impact through technology</h2>
                        <p className='mb-4 text-neutral1'>Be like our global clients, scaled up your impacts through elevated digital transformation, with our solutions.</p>

                        <div className='grid'>
                            <div className='grid items-center text-center'>
                                <h2 className='text-4xl text-black1 font-bold py-2.5'>120+</h2>
                                <p className='text-black2 text-sm'>High Caliber Employee</p>
                            </div>
                            <div className='grid items-center text-center'>
                                <h2 className='text-4xl text-black1 font-bold py-2.5'>9M+</h2>
                                <p className='text-black2 text-sm'>Downloaded apps from stores</p>
                            </div>
                            <div className='grid items-center text-center'>
                                <h2 className='text-4xl text-black1 font-bold py-2.5'>4+</h2>
                                <p className='text-black2 text-sm'>Overall apps rating on stores</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image
                            src="https://gits.id/wp-content/uploads/2023/10/globe.png"
                            alt="Impact GITS.ID"
                            className="w-full h-auto"
                            width={1289}
                            height={779}
                        />
                    </div>
                </section>

                <section id='portfolio'>

                </section>

                <section id='services'>

                </section>

                <section id='testimonial'>

                </section>

                <section id='contactUs'>

                </section>

                <section id='platform'>

                </section>

                <section id='partner'>

                </section>

                <section id='achievement'>

                </section>

                <section id='pressRelease'>

                </section>


            </main>

            <footer>

            </footer>
        </>
    )
}
