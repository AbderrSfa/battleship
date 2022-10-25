import Image from 'next/image';

import ocean from '../../public/images/ocean.png';
import explosion from '../../public/images/explosion.png';

type Props = {
	enemyFleet: number[][];
	handleClick: (y: number, x: number) => void;
};

function EnemyFleet({ enemyFleet, handleClick }: Props) {
	return (
		<section className="grid-rows-10 grid grid-cols-10 gap-0.5 bg-black p-2">
			{enemyFleet.map((row, y) => {
				return row.map((square, x) => {
					let status = 0;
					if (square === 2) status = 2;
					else if (square === 3) status = 1;

					return (
						<button
							key={x}
							className={`h-10 w-10 bg-slate-500`}
							onClick={() => handleClick(y, x)}
						>
							{status === 1 ? (
								<Image src={ocean} alt="ocean sprite" width={40} height={40} />
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
	);
}

export default EnemyFleet;
