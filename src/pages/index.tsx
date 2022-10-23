import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { randomMaps } from '../helpers/randomMaps';

import ocean from '../../public/ocean.png';
import explosion from '../../public/explosion.png';
import Image from 'next/image';

const Home: NextPage = () => {
	const [battlefield, setBattlefield] = useState(
		randomMaps[Math.floor(Math.random() * 6)]!
	);
	const handleClick = (y: number, x: number) => {
		const newBattlefield = [...battlefield];
		if (battlefield[y]![x] === 0) newBattlefield[y]![x] = 3;
		else if (battlefield[y]![x] === 1) newBattlefield[y]![x] = 2;
		setBattlefield(newBattlefield);
		if (!battlefield.flat().find((element) => element === 1)) alert('You win');
	};

	return (
		<>
			<Head>
				<title>Battleship</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/battleship-icon.png" />
			</Head>

			<main className="container mx-auto flex min-h-screen flex-col items-center justify-center">
				<section className="grid-rows-10 grid grid-cols-10 gap-2 bg-black p-2">
					{battlefield.map((row, y) => {
						return row.map((square, x) => {
							let color;
							let status = 0;
							if (square === 0 || square === 1) {
								color = 'slate';
							} else if (square === 2) {
								status = 2;
								color = 'red';
							} else if (square === 3) {
								status = 1;
								color = 'sky';
							}

							return (
								<button
									key={x}
									className={`h-10 w-10 bg-slate-500`}
									onClick={() => handleClick(y, x)}
								>
									{status === 1 ? (
										<Image
											src={ocean}
											alt="ocean sprite"
											width={40}
											height={40}
										/>
									) : status === 2 ? (
										<Image
											src={explosion}
											alt="explosion sprite"
											width={40}
											height={40}
										/>
									) : null}
								</button>
							);
						});
					})}
				</section>
			</main>
		</>
	);
};

export default Home;
