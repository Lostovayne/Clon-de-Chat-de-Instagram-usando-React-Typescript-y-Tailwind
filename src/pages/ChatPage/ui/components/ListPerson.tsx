import { ArrowDown, NewMessage } from "../..";

export const ListPerson = () => {
    return (
        <div className="w-full ">
            <div className="flex items-center justify-between ">
                <div className="flex items-center justify-center gap-2 ">
                    <h3 className="text-xl leading-[25px] pl-[23px] pt-[38px] pb-3  font-bold text-black h-[75px] ">
                        epsain.never
                    </h3>
                    <div className="pt-[28px]">
                        <ArrowDown />
                    </div>
                </div>
                <div className="pt-[37.5px] pr-[32px] pb-[14px]">
                    <NewMessage />
                </div>
            </div>
            <div className="flex items-center justify-between pl-[23px] pr-6 ">
                <span className="text-base text-black font-bold pt-[11.5px]">Mensajes</span>
                <span className="text-sm  font-semibold text-[#737373] pt-[11px]">Solicitudes</span>
            </div>
        </div>
    );
};
