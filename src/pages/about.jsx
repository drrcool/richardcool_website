import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons';
import portraitImage from '@/images/portrait.jpg';

function SocialLink({ className, href, children, icon: Icon }) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    );
}

function MailIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    );
}

export default function About() {
    return (
        <>
            <Head>
                <title>About - Richard Cool</title>
                <meta
                    name="description"
                    content="I’m Richard Cool. I live in the SF Bay Area where I help companies make data-driven decisions."
                />
            </Head>
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={portraitImage}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                            I&aposm Richard Cool. I live in the SF Bay Area where I help companies make data-driven
                            decisions.
                        </h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                            <p>
                                I&aposve loved being understanding how things work for as long as I can remember. I
                                remember writing my first simple code in elementary school. I loved taking basic ideas
                                and building up more complicated ideas from there, which drew me to math and physics in
                                college. Trying to understand how we got here lead me to study astrophysics in graduate
                                school focusing on statstical methods for analyzing very large data sets gathered by
                                large telescope surveys.
                            </p>
                            <p>
                                Since leaving academia, I have focused on using the tools I developed as an astronomer
                                to help companies make better decisions. I love having direct impact on how customers
                                experience a product, quantifying the quality of the member experience, and helping
                                drive conversations that lead to improve how our product works.
                            </p>
                            <p>
                                Outside of work, I spend a lot of time with my dog, relaxing while watching movies with
                                my partner. I dabble in a variety of hobbies; Im trying to learned the piano, I&aposm an
                                on-again-off-again gamer, and I love to bake and cook. The science of baking speaks to
                                me and helps me relax and meditate after a long day.
                            </p>
                        </div>
                    </div>
                    <div className="lg:pl-20">
                        <ul role="list">
                            <SocialLink href="#" icon={TwitterIcon}>
                                Follow on Twitter
                            </SocialLink>
                            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                                Follow on Instagram
                            </SocialLink>
                            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                                Follow on GitHub
                            </SocialLink>
                            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                                Follow on LinkedIn
                            </SocialLink>
                            <SocialLink
                                href="mailto:spencer@planetaria.tech"
                                icon={MailIcon}
                                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                            >
                                spencer@planetaria.tech
                            </SocialLink>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    );
}
