import {FC, ReactNode} from 'react';
import classes from './Modal.module.css';

type props = {
	children: ReactNode
}

const Modal: FC<props> = ({ children }) => {
	return (
		<>
			<div className={classes.background__modal}>

			</div>
			<div className={classes.modal}>
				{ children }
			</div>
		</>
	);
};

export default Modal;