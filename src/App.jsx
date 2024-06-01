import {  Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Login from './routes/auth/login.component';
import "./App.styles.scss";


const App = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
    </Routes>
)

export default App;