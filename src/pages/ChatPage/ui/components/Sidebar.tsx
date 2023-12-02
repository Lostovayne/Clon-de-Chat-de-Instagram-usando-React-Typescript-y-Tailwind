import {
    Compass,
    Heart,
    Home,
    InstagramLogo,
    LogoImagen,
    NewPost,
    Reels,
    Search,
    Threads,
} from "../../svg/index.ts";
import { ListItem } from "../";
import { Menu, MessengerDark } from "../../svg";

interface Arrayprops {
    [key: string]: React.ReactNode;
}

const ArrayMenu: Arrayprops = {
    Home: <Home />,
    Search: <Search />,
    Compass: <Compass />,
    Reels: <Reels />,
    MessengerDark: <MessengerDark />,
    Heart: <Heart />,
    NewPost: <NewPost />,
    Image: <LogoImagen />,
};

export const Sidebar = () => {
    return (
        <nav className=" hidden md:flex  max-w-[73px] w-full border-r border-gray-300 h-screen  flex-col justify-between ">
            <ul className="py-[28px] ">
                <ListItem className="mb-[40px]">
                    <InstagramLogo />
                </ListItem>

                {ArrayMenu &&
                    Object.keys(ArrayMenu).map((key) => {
                        return (
                            <ListItem className="mb-[16px]" key={key}>
                                {ArrayMenu[key]}
                            </ListItem>
                        );
                    })}
            </ul>

            <div className="py-[28px]">
                <ListItem className="mb-[16px] relative">
                    <Threads />
                    <div className="bg-[#ff3040] rounded-full h-[20px] p-[2px]  w-[25px] absolute top-[1px] -right-[6px] text-white text-[11px] border border-white pt-[3px]">
                        9+
                    </div>
                </ListItem>
                <ListItem>
                    <Menu />
                </ListItem>
            </div>
        </nav>
    );
};
