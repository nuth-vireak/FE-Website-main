import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';

import Main from "./component/layout/main/main";
import Navbar from "./component/layout/header/navbar/navbar.jsx";
import Footer from "./component/layout/footer/footer.jsx";

import MoveToTopButton from 'component/reused-component/button-move-up/move_to_top_btn';

const ScrollToTop = () =>
{
    let history = useHistory();
    useEffect(() => {
        const unlisten = history.listen(() =>
            window.scrollTo({top: 0, left: 0, behavior: 'instant'}))
        return () => unlisten()
    }, [history])

    return null;
}

function App() {

    //Loading State
    const [loadingRoute,setLoadingRoute] = useState(true)

    const handleLoadingRoute = (isLoading) =>
    {
        setLoadingRoute(isLoading)
    }

    return (
        <div>
            <Navbar loadingRoute={loadingRoute}/>
            <ScrollToTop/>
            <Main handleLoadingRoute={handleLoadingRoute}/>
            <MoveToTopButton/>
            <Footer loadingRoute={loadingRoute}/>
        </div>
    );
}

export default App;
