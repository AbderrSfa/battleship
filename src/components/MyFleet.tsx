import Image from 'next/image';

import ocean from '../../public/ocean.png';
import oceanChecked from '../../public/ocean-checked.png';
import ship from '../../public/ship.png';
import shipExplosion from '../../public/ship-explosion.png';

type Props = {
	myFleet: number[][];
};

function MyFleet({ myFleet }: Props) {
	return (
		<section className="grid-rows-10 grid grid-cols-10 gap-0.5 bg-black p-2">
			{myFleet.map((row) => {
				return row.map((square, x) => {
					let status = 0;
					if (square === 1) status = 1;
					else if (square === 2) status = 2;
					else if (square === 3) status = 3;

					return (
						<button key={x} className={`h-10 w-10 cursor-default bg-slate-500`}>
							{status === 0 ? (
								<Image src={ocean} width={40} height={40} alt="" />
							) : status === 1 ? (
								<Image src={ship} width={40} height={40} alt="" />
							) : status === 2 ? (
								<Image src={shipExplosion} width={40} height={40} alt="" />
							) : (
								<Image src={oceanChecked} width={40} height={40} alt="" />
							)}
						</button>
					);
				});
			})}
		</section>
	);
}

export default MyFleet;
