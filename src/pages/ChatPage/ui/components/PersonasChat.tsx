import { CardPersona } from "./CardPersona";

const imagen1 = "https://i.pinimg.com/originals/08/55/52/0855520769a0eb2ae1afacf9d053a119.jpg";

export const PersonasChat = () => {
    return (
        <div className=" mx-[23px] mt-[14px]">
            <CardPersona
                nombre="Epsain"
                texto="Holi como estas? que andas haciendo? ❤️ "
                className="text-black font-semibold"
            />
            <CardPersona nombre="Maho" texto="Mery que haces?" imagen={imagen1} />
            <CardPersona nombre="Mandoquero" texto=" Nos periqueamos o que parce? " />
            <CardPersona nombre="Matias" texto="y si me van a hacer o qué? " />
            <CardPersona nombre="Matias" texto="y si me van a hacer o qué? " />
            <CardPersona nombre="Matias" texto="y si me van a hacer o qué? " />
            <CardPersona nombre="Matias" texto="y si me van a hacer o qué? " />
            <CardPersona nombre="Matias" texto="y si me van a hacer o qué? " />
            <CardPersona nombre="Matias" texto="y si me van a hacer o qué? " />
            <CardPersona nombre="Matias" texto="y si me van a hacer o qué? " />
        </div>
    );
};
