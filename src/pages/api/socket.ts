import { NextApiRequest, NextApiResponse } from 'next';
import { Server } from 'socket.io';

export default function socketHandler(
	_req: NextApiRequest,
	res: NextApiResponse
) {
	const sockettype: any = res.socket;
	if (!sockettype?.server.io) {
		const io = new Server(sockettype?.server);
		sockettype.server.io = io;

		io.on('connection', (socket) => {
			socket.on('send-field', (index) => {
				socket.broadcast.emit('get-field', index);
			});
			socket.on('launch-strike', (coordinates) => {
				socket.broadcast.emit('strike-land', coordinates);
			});
		});
	}
	res.end();
}
