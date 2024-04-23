import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/HomePage/Homepage";

function App() {
    const {onToggleButton, tg} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, []);

    return (
    <div className="App">
        <Header />
        <div className='main-wrapper'>
            <Routes>
                <Route index element={<Homepage/>}/>
                <Route path={'./form'} element={<ProductList/>}/>
            </Routes>
        </div>
        <Footer />
    </div>
    );
}

export default App;
