import { Chat, Ui } from "./pages/ChatPage";

const App = () => {
    return (
        <div className="custom-grid">
            <Ui className="" />
            <Chat className="hidden md:flex " />
        </div>
    );
};
export default App;
