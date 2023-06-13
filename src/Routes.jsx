import { Dashboard } from './views/dashboard';
import { LoginElement } from './elements/LoginElement';

export const routes = [
    {
        path: '/dashboard',
        name:  'Inicio',
        icon: "ni ni-tv-2 text-primary",
        component: <Dashboard />,
        layout: "/admin",
    },
    {
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: <LoginElement />,
        layout: "/auth",
    },
]