import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className='App-wrapper'>
                <Header/>
                <Navbar/>
                <div className='App-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile state={props.state}/>} />
                        <Route path='/dialogs/*' element={<DialogsContainer />} />
                        <Route path='/users' element={<UsersContainer />} />
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>

                        {/*<Route path='/friends' element={<Friends/>} />*/}
                        <Route path='/friends' element={<UsersContainer/>} />

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;



// state={props.state.messagesPage} dispatch={props.dispatch}
