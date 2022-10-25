import { NextApiRequest, NextApiResponse } from 'next';
import { Server } from 'socket.io';

export default function socketHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (!res.socket?.server.io) {
		const io = new Server(res.socket?.server);
		res.socket!.server.io = io;

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
