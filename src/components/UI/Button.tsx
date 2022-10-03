import React, {FC, ReactNode} from 'react';

type props = {
    children: ReactNode
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
    type?: "submit" | "reset"
    className?: string
}

const Button: FC<props> = ({ children, onClick, type, className }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={"btn " + className}
        >
            {children}
        </button>
    );
};

export default Button;