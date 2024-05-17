import { useEffect } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./hooks/hooksState"
import { getCurUser } from "./store/user/userActions"


const names: any = {
    '/': 'Главная',
    '/auth': 'Авторизация',
}

function Layout() {
    const dispatch = useAppDispatch()
    const { curUser, token } = useAppSelector((state) => state.user)
    const location = useLocation();

    useEffect(() => {

        const authPeriod = setInterval(() => {
            if (token) dispatch(getCurUser(token));
            console.log("Get USer")
        }, 9000000);

        return () => clearInterval(authPeriod);

    }, [])

    useEffect(() => {
        if (token) dispatch(getCurUser(token));
    }, [token, dispatch])


    useEffect(() => {
        if (location.pathname in names) {
            document.title = names[location.pathname];
        }
    }, [location])

    return (
        <div>
            <header>
                <Link to={`/`}>Main</Link> |
                {curUser.username && 
                <Link to={`/profile/${curUser.username}`}>Profile |</Link>}
                {curUser.username ? <Link to={`/logout`}>Logout</Link> : <Link to={`/auth`}>Auth</Link>}
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout