import { BrowserRouter} from 'react-router-dom';
import { DefaultRoutes } from './routes/default-routes';

export const Router = () => {
    return(
        <BrowserRouter>
            <DefaultRoutes />
        </BrowserRouter>
    )
}