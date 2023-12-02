import { cn } from "../../../../utils/twMerge";
interface Props {
    nombre: string;
    texto: string;
    imagen?: string;
    className?: string;
}

const defaultImage = "https://i.pinimg.com/736x/bc/a0/cb/bca0cb53df5a55f27952ea1a04d67520.jpg";

export const CardPersona = ({ nombre, texto, imagen = defaultImage, className }: Props) => {
    return (
        <div className=" mt-4 flex items-center gap-4 cursor-pointer ">
            <img src={imagen} alt="" className="rounded-full h-14 w-14 object-cover" />
            <div>
                <span className={cn("text-gray-700 text-sm", className)}>{nombre}</span>
                <div className="flex items-center gap-2">
                    <p className={cn("text-xs font-medium text-gray-500 ", className)}>{texto}</p>
                    <span className={"text-sm text-gray-400"}>14 h</span>
                </div>
            </div>
        </div>
    );
};
