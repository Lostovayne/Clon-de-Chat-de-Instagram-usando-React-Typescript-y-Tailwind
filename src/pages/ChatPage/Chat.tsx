import { LogoChat } from ".";
import { cn } from "../../utils/twMerge";

interface Props {
    className?: string;
}

export const Chat = ({ className }: Props = {}) => {
    return (
        <div className={cn(" flex items-center justify-center", className)}>
            <div className=" flex items-center flex-col gap-1">
                <LogoChat />
                <h4 className="text-xl mt-2.5">Tus mensajes</h4>
                <p className="text-[#737373] text-sm">
                    Envía fotos y mensajes privados a un amigo o un grupo.
                </p>
                <button className="bg-[#0095f6] px-4 py-[6px] mt-2.5 text-white text-sm font-semibold rounded-md">
                    Enviar mensaje
                </button>
            </div>
        </div>
    );
};
