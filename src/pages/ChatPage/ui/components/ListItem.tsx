interface ChildrenProps {
    children: React.ReactNode;
    className?: string;
}

export const ListItem = ({ children, className }: ChildrenProps) => {
    return (
        <li
            className={` w-10 h-10 place-content-center grid text-center mx-auto [&>svg]:w-6 [&>svg]:h-6   [&>svg]:hover:w-[25px] [&>svg]:hover:h-[25px] [&>svg]:hover:cursor-pointer transition-all duration-500  ,
            ${className}`}
        >
            {children}
        </li>
    );
};
