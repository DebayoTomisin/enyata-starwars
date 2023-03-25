import { fetcher } from "./fetcher"
import useSWR from "swr";

const url = process.env.NEXT_PUBLIC_API_URL

export const getAllFilms = () => {
    const { data, error, isLoading } = useSWR(`${url}/films/`, fetcher)

    return {
        data, error, isLoading
    }
}

export const getSingleFilm = (id: any) => {

    const { data, error, isLoading } = useSWR(`${url}/films/${id}/`, fetcher)

    return {
        data, error, isLoading
    }
}

export const getAllSpecies = () => {
    const { data, error, isLoading } = useSWR(`${url}/species/`, fetcher)

    return {
        data, error, isLoading
    }
}

export const getSpecie = (id: any) => {
    const { data, error, isLoading } = useSWR(`${url}/species/${id}`, fetcher)
    return { data, error, isLoading }
}

export const getAllPersons = () => {
    const { data, error, isLoading } = useSWR(`${url}/people/`, fetcher)

    return {
        data, error, isLoading
    }
}

export const getPerson = (id: number) => {
    const { data, error, isLoading } = useSWR(`${url}/people/${id}`, fetcher)
    return { data, error, isLoading }
}

export const getAllStarShips = () => {
    const { data, error, isLoading } = useSWR(`${url}/starships/`, fetcher)

    return {
        data, error, isLoading
    }
}

export const getStarship = (id: any) => {
    const { data, error, isLoading } = useSWR(`${url}/starships/${id}`, fetcher)
    return { data, error, isLoading }
}
