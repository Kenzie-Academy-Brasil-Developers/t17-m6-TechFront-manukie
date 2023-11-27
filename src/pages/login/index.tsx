import { useForm } from "react-hook-form"
import { LoginData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"


export const Login = () => {
    const { signIn } = useAuth()
    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(schema)
    })

    const submit = (data: LoginData) => {
        signIn(data)
    }
    return (
        <main>
            <h2>Página Login</h2>

            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" {...register("email")} />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register("password")} />

                <button type="submit">Entrar</button>
            </form>
        </main>
    )
}
