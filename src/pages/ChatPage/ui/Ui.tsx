import { cn } from "../../../utils/twMerge";
import { ListPerson } from "./components/ListPerson";
import { Sidebar } from "./components/Sidebar";

interface Props {
    className?: string;
}

export const Ui = ({ className }: Props = {}) => {
    return (
        <div className={cn("border-r border-gray-300 flex", className)}>
            <Sidebar />
            <ListPerson />
        </div>
    );
};
