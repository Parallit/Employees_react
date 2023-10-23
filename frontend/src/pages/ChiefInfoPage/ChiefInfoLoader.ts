import { LoaderFunctionArgs, defer } from "react-router-dom"
import $api from "src/axios"
import { User } from "src/store/types.common"

export interface ChiefLoaderData {
    user: User
}

export const getChief = async (id: string | undefined): Promise<User> => {
    try {
        const res = await $api.get(`/employees/user/${id}`)
        const user = res.data
        return user
    } catch (error) {
        throw new Error('Something went wrong');
    }
}

export const chiefLoader = async ({ params }: LoaderFunctionArgs) => {
    const id = params.id;
    return defer({
        user: getChief(id)
    })
}