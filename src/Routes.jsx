import { Dashboard } from './views/dashboard';
import { LoginElement } from './elements/LoginElement';
import { Crud } from './views/dashboard/crud';
import { CrudCreate } from './views/dashboard/crud/create';

export const routes = [
    {
        path: '/dashboard',
        name:  'Inicio',
        icon: "ni ni-tv-2 text-primary",
        component: <Dashboard />,
        layout: "/admin",
    },
    {
        path: "/dashboard/crud",
        name: "Crud",
        icon: "ni ni-collection",
        component: <Crud />,
        layout: "/admin",
    },
    {
        path: "/dashboard/crud/create",
        name: "Crud",
        icon: "ni ni-collection",
        component: <CrudCreate />,
        layout: "/crud",
    },
    {
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: <LoginElement />,
        layout: "/auth",
    },
]