import { ReactNode, createContext } from "react";
import { LoginData } from "../pages/login/validator";
import { api } from "../services/api"
import { useNavigate } from "react-router-dom";


interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: LoginData) => void
}


export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const navigate = useNavigate()

    const signIn = async (data: LoginData) => {
        try {

            const response = await api.post("/login", data)
            const { token } = response.data

            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("sorcery-contacts:token", token)
            navigate("dashboard")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
}