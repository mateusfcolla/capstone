import {  Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Login from './routes/auth/login.component';
import Register from './routes/auth/register.component';
import "./App.styles.scss";


const App = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
)

export default App;