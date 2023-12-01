import { cn } from "../../utils/twMerge";

interface Props {
    className?: string;
}

export const Chat = ({ className }: Props = {}) => {
    return <div className={cn("", className)}>Chat</div>;
};
