import {FC, ReactNode} from 'react';

type props = {
	children: ReactNode
}

const Modal: FC<props> = ({ children }) => {
	return (
		<>
			<div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-200 opacity-40">

			</div>
			<div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-zinc-400 text-white rounded-md p-5 min-h-fit w-96">
				{ children }
			</div>
		</>
	);
};

export default Modal;