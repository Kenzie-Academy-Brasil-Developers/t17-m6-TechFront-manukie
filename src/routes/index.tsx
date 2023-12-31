import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/login"
import { UserPage } from "../pages/dashboard"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { Register } from "../pages/register"



export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/profile" element={<UserPage />} />
            </Route>
        </Routes>
    )
}