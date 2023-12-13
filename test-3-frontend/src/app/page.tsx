import { Button, Divider, Input, Textarea } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'
import Navbar from './components/Navbar';
import Services from './components/Services';
import Platforms from './components/Platforms';
import Press from './components/Press';

export default function Home() {
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];
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
            <Navbar />


            <main className='max-w-md mx-auto'>
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

                <section id='portfolio' className='grid gap-y-5 py-5'>
                    <div className='grid grid-cols-2 gap-2.5 p-5'>
                        <Link href='/'>
                            <div className='h-40 relative'>
                                <Image
                                    src="https://gits.id/wp-content/uploads/2023/10/darmo-768x576.png"
                                    alt="Impact GITS.ID"
                                    className="object-cover w-full h-full"
                                    width={1289}
                                    height={779}
                                />
                                <div className='bg-[#0000001A] absolute w-full h-full top-0 left-0' />

                            </div>
                            <p className='text-xs text-black1 font-semibold'>Healthcare Service Application for Doctors</p>
                        </Link>
                        <Link href='/'>
                            <div className='h-40 relative'>
                                <Image
                                    src="https://gits.id/wp-content/uploads/2023/10/Prodia-Shot-1-768x576.png"
                                    alt="Impact GITS.ID"
                                    className="object-cover w-full h-full"
                                    width={1289}
                                    height={779}
                                />
                                <div className='bg-[#0000001A] absolute w-full h-full top-0 left-0' />
                            </div>
                            <p className='text-xs text-black1 font-semibold'>Healthcare Service Application for Doctors</p>
                        </Link>
                        <Link href='/'>
                            <div className='h-40 relative'>
                                <Image
                                    src="https://gits.id/wp-content/uploads/2023/10/KF-768x576.png"
                                    alt="Impact GITS.ID"
                                    className="object-cover w-full h-full"
                                    width={1289}
                                    height={779}
                                />
                                <div className='bg-[#0000001A] absolute w-full h-full top-0 left-0' />
                            </div>
                            <p className='text-xs text-black1 font-semibold'>Healthcare Service Application for Doctors</p>
                        </Link>
                        <Link href='/'>
                            <div className='h-40 relative'>
                                <Image
                                    src="https://gits.id/wp-content/uploads/2023/10/NAV-Investment-tools-768x576.png"
                                    alt="Impact GITS.ID"
                                    className="object-cover w-full h-full"
                                    width={1289}
                                    height={779}
                                />
                                <div className='bg-[#0000001A] absolute w-full h-full top-0 left-0' />
                            </div>
                            <p className='text-xs text-black1 font-semibold'>Healthcare Service Application for Doctors</p>
                        </Link>
                        <Link href='/'>
                            <div className='h-40 relative'>
                                <Image
                                    src="https://gits.id/wp-content/uploads/2023/10/Prime-768x576.png"
                                    alt="Impact GITS.ID"
                                    className="object-cover w-full h-full"
                                    width={1289}
                                    height={779}
                                />
                                <div className='bg-[#0000001A] absolute w-full h-full top-0 left-0' />
                            </div>
                            <p className='text-xs text-black1 font-semibold'>Healthcare Service Application for Doctors</p>
                        </Link>
                        <Link href='/'>
                            <div className='h-40 relative'>
                                <Image
                                    src="https://gits.id/wp-content/uploads/2023/10/FFI-Safety-Quisionare-768x576.png"
                                    alt="Impact GITS.ID"
                                    className="object-cover w-full h-full"
                                    width={1289}
                                    height={779}
                                />
                                <div className='bg-[#0000001A] absolute w-full h-full top-0 left-0' />
                            </div>
                            <p className='text-xs text-black1 font-semibold'>Healthcare Service Application for Doctors</p>
                        </Link>
                    </div>

                    <Button className='mx-5' variant='light' color='primary' radius='none'><span className='font-bold'>See All</span></Button>
                </section>

                <Services />

                <section id='testimonial'>

                </section>

                <section id='contactUs' className='px-5'>
                    <div className='grid gap-y-5 pt-5'>
                        <div className='grid gap-5'>
                            <p className='uppercase text-sm text-neutral2'>contact us</p>
                            <h2 className='text-4xl text-black1 font-bold'>Do you have a new project?</h2>
                            <p className='mb-4 text-neutral1 text-sm'>Come tell us what you need! Fill out this form and our solution team will response to your email by maximum of 1×24 workday.</p>

                            <div className='grid gap-y-5'>
                                {/* INDONESIA */}
                                <div className='grid gap-y-5'>
                                    <h2 className='text-black3 text-xl font-bold'>Indonesia</h2>
                                    <div className='grid'>
                                        <i className="ri-map-2-line ri-xl mb-3"></i>
                                        <p className='text-black1 font-semibold'>Head Office</p>
                                        <p className='text-neutral3 text-sm'>Summarecon Bandung, Jl. Magna Timur No.106, Bandung, 40296</p>
                                    </div>
                                    <div className='grid'>
                                        <i className="ri-mail-line ri-xl mb-3"></i>
                                        <p className='text-black1 font-semibold'>E-mail</p>
                                        <p className='text-tertiary text-sm font-bold'>connect@gits.id</p>
                                    </div>
                                    <div className='grid'>
                                        <i className="ri-phone-line ri-xl mb-3"></i>
                                        <p className='text-black1 font-semibold mt-2 mb-2.5'>Whatsapp (chat only)</p>
                                        <p className='text-tertiary text-sm font-bold'>0811-1309-991</p>
                                    </div>
                                </div>

                                {/* NORTH AMERICA */}
                                <div className='grid gap-y-5'>
                                    <h2 className='text-black3 text-xl font-bold'>North America</h2>
                                    <div className='grid'>
                                        <i className="ri-map-2-line ri-xl mb-3"></i>
                                        <p className='text-black1 font-semibold'>Branch Office</p>
                                        <p className='text-neutral3 text-sm'>166 Geary Str STE 1500 #1368, San Francisco, CA 94108, United States</p>
                                    </div>
                                    <div className='grid'>
                                        <i className="ri-mail-line ri-xl mb-3"></i>
                                        <p className='text-black1 font-semibold'>E-mail</p>
                                        <p className='text-tertiary text-sm font-bold'>connect-usa@gits.id</p>
                                    </div>
                                </div>

                                <iframe className='h-48 rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4219905126747!2d107.68702657367213!3d-6.959445493040959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e86f22f9a59b%3A0x118df4f3a9d3f497!2sGITS.ID%20(PT%20GITS%20Indonesia)!5e0!3m2!1sen!2sid!4v1702405414280!5m2!1sen!2sid" width="100%" height="auto" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                        <div className='pt-5'>
                            <div className='mb-7'>
                                <Input type="text" variant='underlined' label="Your Name" />
                            </div>
                            <div className='mb-7'>
                                <Input type="email" variant='underlined' label="Email Adress" />
                            </div>
                            <div className='mb-7'>
                                <Input type="number" variant='underlined' label="Phone Number" />
                            </div>
                            <div className='mb-7'>
                                <Input type="text" variant='underlined' label="Company" />
                            </div>
                            <div className='grid mb-7'>
                                <Textarea
                                    variant='underlined'
                                    placeholder="Message"
                                    className='mb-7'
                                />
                                <Button color='primary' radius='none' size='lg' className='h-14'>Send</Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='platform'>

                </section>

                <Platforms />

                <section id='partner' className='my-10 py-5'>
                    <div className='px-5 grid gap-y-5'>
                        <p className='uppercase text-sm text-neutral2'>partner</p>
                        <h2 className='text-4xl text-black1 font-bold'>Official System Integrator of</h2>

                        <div className='w-full h-3'>
                        </div>
                    </div>

                    <div className='grid gap-2.5'>
                        <div className='w-full h-full'>
                            <Image
                                src="https://gits.id/wp-content/uploads/2023/11/Partner-google-cloud.png"
                                alt="Google Cloud"
                                className="w-[240px] h-auto grayscale"
                                width={679}
                                height={212}
                            />
                        </div>
                        <div className='w-full h-full'>
                            <Image
                                src="https://gits.id/wp-content/uploads/2023/11/Partner-zendesk.png"
                                alt="Zendesk"
                                className="w-[240px] h-auto grayscale"
                                width={679}
                                height={212}
                            />
                        </div>
                        <div className='w-full h-full'>
                            <Image
                                src="https://gits.id/wp-content/uploads/2023/11/Partner-salesforce.png"
                                alt="Sales Force"
                                className="w-[240px] h-auto grayscale"
                                width={679}
                                height={212}
                            />
                        </div>
                    </div>
                </section>

                <section id='achievement' className='p-5 my-10 grid gap-y-5'>
                    <div className='grid gap-5'>
                        <div className='grid gap-2.5'>
                            <p className='uppercase text-sm text-neutral2'>Our Achievement</p>
                            <h2 className='text-4xl text-black1 font-bold'>Certifications</h2>
                        </div>
                        <p className='mb-4 text-neutral1 text-sm'>Our company and team are having stand out expertise to be able to deliver you the best solutions.</p>

                        <div className='grid justify-items-end'>
                            <Button variant='light' endContent={<i className="ri-arrow-right-line ri-sm text-neutral1"></i>}><span className='font-semibold text-sm'>About Us</span></Button>
                        </div>
                    </div>

                    <div className='grid grid-cols-2'>
                        <div>
                            <Image
                                className='h-auto w-2/5 mb-1.5'
                                src="https://gits.id/wp-content/uploads/2023/01/Group-16602.png"
                                alt="Certificate"
                                width={123}
                                height={123}
                            />
                            <p className='mb-3.5 text-black3 text-xs font-bold'>ISO 27001 - Information Security Management Certified</p>
                        </div>
                        <div>
                            <Image
                                className='h-auto w-2/5 mb-1.5'
                                src="https://gits.id/wp-content/uploads/2023/01/Group-16603.png"
                                alt="Certificate"
                                width={123}
                                height={123}
                            />
                            <p className='mb-3.5 text-black3 text-xs font-bold'>ISO 9001 - Certified Company</p>
                        </div>
                        <div>
                            <Image
                                className='h-auto w-2/5 mb-1.5'
                                src="https://gits.id/wp-content/uploads/2023/10/image-180.png"
                                alt="Certificate"
                                width={123}
                                height={123}
                            />
                            <p className='mb-3.5 text-black3 text-xs font-bold'>Professional Cloud Architect</p>
                        </div>
                        <div>
                            <Image
                                className='h-auto w-2/5 mb-1.5'
                                src="https://gits.id/wp-content/uploads/2023/10/image-181.png"
                                alt="Certificate"
                                width={123}
                                height={123}
                            />
                            <p className='mb-3.5 text-black3 text-xs font-bold'>Professional Collaboration Engineer</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2'>
                        <div>
                            <Image
                                className='h-auto w-2/5 mb-1.5'
                                src="https://gits.id/wp-content/uploads/2023/10/image-182.png"
                                alt="Certificate"
                                width={123}
                                height={123}
                            />
                            <p className='mb-3.5 text-black3 text-xs font-bold'>Professional Data Engineer</p>
                        </div>
                        <div>
                            <Image
                                className='h-auto w-2/5 mb-1.5'
                                src="https://gits.id/wp-content/uploads/2023/10/image-183.png"
                                alt="Certificate"
                                width={123}
                                height={123}
                            />
                            <p className='mb-3.5 text-black3 text-xs font-bold'>Professional Cloud Engineer</p>
                        </div>
                        <div>
                            <Image
                                className='h-auto w-2/5 mb-1.5'
                                src="https://gits.id/wp-content/uploads/2023/10/image-184.png"
                                alt="Certificate"
                                width={123}
                                height={123}
                            />
                            <p className='mb-3.5 text-black3 text-xs font-bold'>Professional Scrum Product Owner</p>
                        </div>
                        <div>
                            <Image
                                className='h-auto w-2/5 mb-1.5'
                                src="https://gits.id/wp-content/uploads/2023/10/image-185.png"
                                alt="Certificate"
                                width={123}
                                height={123}
                            />
                            <p className='mb-3.5 text-black3 text-xs font-bold'>Professional Scrum Master</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2'>
                        <div>
                            <Image
                                className='h-auto w-2/5 mb-1.5'
                                src="https://gits.id/wp-content/uploads/2023/10/image-186.png"
                                alt="Certificate"
                                width={123}
                                height={123}
                            />
                            <p className='mb-3.5 text-black3 text-xs font-bold'>Associate Android Developer</p>
                        </div>
                        <div>
                            <Image
                                className='h-auto w-2/5 mb-1.5'
                                src="https://gits.id/wp-content/uploads/2023/10/Group-1000001783.png"
                                alt="Certificate"
                                width={123}
                                height={123}
                            />
                            <p className='mb-3.5 text-black3 text-xs font-bold'>Badan Nasional Sertifikasi Profesi</p>
                        </div>
                        <div>
                            <Image
                                className='h-auto w-2/5 mb-1.5'
                                src="https://gits.id/wp-content/uploads/2023/10/GCA.png"
                                alt="Certificate"
                                width={123}
                                height={123}
                            />
                            <p className='mb-3.5 text-black3 text-xs font-bold'>Google Developer Agency Program</p>
                        </div>
                        <div>
                            <Image
                                className='h-auto w-2/5 mb-1.5'
                                src="https://gits.id/wp-content/uploads/2023/10/image-188.png"
                                alt="Certificate"
                                width={123}
                                height={123}
                            />
                            <p className='mb-3.5 text-black3 text-xs font-bold'>Google Certified Educator</p>
                        </div>
                    </div>

                    <iframe className='h-48 rounded-xl' width="100%" height="auto" src="https://www.youtube.com/embed/aqipM3m2sq8?si=kuJdCClp7dOZiQ1S" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


                </section>

                <section id='pressRelease' className='px-5 my-10'>
                    <div className='py-5 grid gap-y-5'>
                        <p className='uppercase text-sm text-neutral2'>press release</p>
                        <h2 className='text-4xl text-black1 font-bold'>We have been covered by</h2>

                        <div className='w-full h-3'>
                        </div>

                        <div className="w-full grid">
                            <Press />
                        </div>
                    </div>
                </section>

                <section id='cta end' className='grid py-10'>
                    <Button className='mx-5' variant='light' color='primary' radius='none'><span className='font-bold'>Consult with Us</span></Button>
                </section>

            </main>

            <footer className='bg-[#141414] p-4 py-4 grid max-w-md mx-auto'>
                <div className='p-2.5'>
                    <div className='w-fit h-full'>
                        <div className='w-4/5'>
                            <Image
                                src="https://gits.id/wp-content/uploads/2023/10/Group-13253.png"
                                alt="Certificate"
                                width={115}
                                height={52}
                            />
                        </div>
                    </div>
                </div>

                <div className='grid gap-2.5 p-2.5'>
                    <h2 className='text-white font-bold'>Indonesia</h2>
                    <p className='mb-3.5 text-neutral4 text-sm'>Summarecon Bandung<br />Jl. Magna Timur No.106 Bandung 40296</p>
                    <p className='mb-3.5 text-neutral4 text-sm'>connect@gits.id<br />+62811-1309-991</p>
                </div>

                <div className='grid gap-2.5 p-2.5'>
                    <h2 className='text-white font-bold'>North America Branch</h2>
                    <p className='mb-3.5 text-neutral4 text-sm'>166 Geary Str STE 1500 #1368 San Francisco, CA 94108 United States</p>
                    <p className='mb-3.5 text-neutral4 text-sm'>connect-usa@gits.id</p>
                </div>

                <div className='grid p-2.5'>
                    <h2 className='text-white font-bold'>Get In Touch</h2>
                    <div className='pt-2.5 grid'>
                        <Input className='mb-1.5' size='sm' type="email" variant={'flat'} radius='none' label="Email" />
                        <Button className='' radius='none' color='primary'><span className='font-bold'>Subscribe</span></Button>
                    </div>
                    <div className='flex py-1.5 gap-x-1.5'>
                        <div className='h-10 w-10 grid items-center justify-items-center rounded-full border border-[#1D2939]'>
                            <i className="ri-linkedin-box-fill ri-1x text-[#8A8E9B]"></i>
                        </div>
                        <div className='h-10 w-10 grid items-center justify-items-center rounded-full border border-[#1D2939]'>
                            <i className="ri-youtube-fill ri-1x text-[#8A8E9B]"></i>
                        </div>
                        <div className='h-10 w-10 grid items-center justify-items-center rounded-full border border-[#1D2939]'>
                            <i className="ri-medium-fill ri-1x text-[#8A8E9B]"></i>
                        </div>
                        <div className='h-10 w-10 grid items-center justify-items-center rounded-full border border-[#1D2939]'>
                            <i className="ri-facebook-fill ri-1x text-[#8A8E9B]"></i>
                        </div>
                        <div className='h-10 w-10 grid items-center justify-items-center rounded-full border border-[#1D2939]'>
                            <i className="ri-twitter-x-fill ri-1x text-[#8A8E9B]"></i>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-white font-bold pb-2'>Subsidiaries</h2>
                        <div className='pt-1.5 grid gap-2.5'>
                            <h2 className='text-neutral4 text-sm font-bold'>Eudeka</h2>
                            <h2 className='text-neutral4 text-sm font-bold'>Mofin</h2>
                            <h2 className='text-neutral4 text-sm font-bold'>Brandbud</h2>
                            <h2 className='text-neutral4 text-sm font-bold'>MuslimLife</h2>
                        </div>
                        <div className='pt-1.5 grid gap-2.5'>
                            <h2 className='text-neutral4 text-sm font-bold'>Carte</h2>
                            <h2 className='text-neutral4 text-sm font-bold'>Part of Digits</h2>
                        </div>
                    </div>

                    <Divider className="my-4" />
                </div>

                {/* COPYRIGHT */}
                <div>
                    <div className='p-2.5 grid gap-5 text-center'>
                        <h2 className='text-xs text-neutral4'>© GITS Indonesia 2008 - 2023</h2>
                        <h2 className='text-xs text-neutral4 font-bold'>Privacy & Policy</h2>
                        <h2 className='text-xs text-neutral4 font-bold'>Information Management System Policy</h2>
                    </div>

                    <div className='p-2.5 flex justify-between'>
                        <h2 className='text-xs text-neutral4 font-bold'>Our Work</h2>
                        <h2 className='text-xs text-neutral4 font-bold'>Solution</h2>
                        <h2 className='text-xs text-neutral4 font-bold'>Career</h2>
                        <h2 className='text-xs text-neutral4 font-bold'>About</h2>
                        <h2 className='text-xs text-neutral4 font-bold'>Insight</h2>
                        <h2 className='text-xs text-neutral4 font-bold'>Blog</h2>
                    </div>
                </div>
            </footer>
        </>
    )
}
