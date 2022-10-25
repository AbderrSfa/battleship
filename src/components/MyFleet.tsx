import Image from 'next/image';

import ocean from '../../public/images/ocean.png';
import ship from '../../public/images/ship.png';
import shipExplosion from '../../public/images/ship-explosion.png';

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

					return (
						<button key={x} className={`h-10 w-10 cursor-default bg-slate-500`}>
							{status === 0 ? (
								<Image src={ocean} alt="ocean sprite" width={40} height={40} />
							) : status === 1 ? (
								<Image src={ship} alt="ship sprite" width={40} height={40} />
							) : (
								<Image
									src={shipExplosion}
									alt="ship sprite"
									width={40}
									height={40}
								/>
							)}
						</button>
					);
				});
			})}
		</section>
	);
}

export default MyFleet;
