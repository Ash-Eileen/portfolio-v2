import type {AppProps /* , AppContext */} from 'next/app';
import '../styles/app.css';
import Link from 'next/link';
import React from 'react';

const MyApp = ({Component, pageProps}: AppProps) => {
	return (
		<>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about-me">
						<a>About Me</a>
					</Link>
				</li>
				<li>
					<Link href="/portfolio">
						<a>Portfolio</a>
					</Link>
				</li>
			</ul>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
