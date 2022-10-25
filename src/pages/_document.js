import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className='font-saira'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}