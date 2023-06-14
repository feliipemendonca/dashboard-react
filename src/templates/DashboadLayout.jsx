import React from "react"
import { SiderBar } from "../components/Sidebar"
import { routes } from "../Routes"
import Navbars from "../components/Navbars"
import { Navigate } from "react-router-dom"
import Footers from "../components/Footers"
import { Container } from "reactstrap"
import Headers from "../components/Headers"
import { useSelector } from "react-redux"

export const DashboadLayout = ({children}, props) => {
    const getBrandText = (path) => {
        for (let i = 0; i < routes.length; i++) {
            if (
                props?.location?.pathname.indexOf(routes[i].layout + routes[i].path) !==
                -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    };

    const { isLoggedIn } = useSelector(state => state.AuthReducer)
    if(!isLoggedIn) {
        return <Navigate to='/'/>
    }

    return(
        <>
            <SiderBar {...props} routes={routes} 
                logo={{ innerLink: "/admin/index", imgSrc: require("../assets/img/brand/argon-react.png"), imgAlt: "...", }}
            />
            <div className="main-content">
                <Navbars {...props} brandText={getBrandText(props?.location?.pathname)} />
                <Headers/>
                {children}
                <Container fluid>
                    <Footers />
                </Container>
            </div>
        </>
    )
}