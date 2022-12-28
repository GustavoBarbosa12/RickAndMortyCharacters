import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/home/home-page';

export const DefaultRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}