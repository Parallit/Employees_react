import { LoaderFunctionArgs, defer } from "react-router-dom";
import $api from "src/axios";
import { Employee } from "src/store/types.common";

export interface SubordinateLoaderData {
    employee: Employee
}

const getSubordinate = async (id: string | undefined): Promise<Employee> => {
    try {
        const res = await $api.get(`/employees/${id}`);
        const employee = res.data;
        return employee
    } catch (error) {
        throw new Error('Something went wrong');
    }
}

export const subordinateLoader = async ({ params }: LoaderFunctionArgs) => {
    const id = params.id;
    return defer({
        employee: getSubordinate(id)
    })
}