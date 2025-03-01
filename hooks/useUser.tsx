import { useEffect, useState } from "react";
import { User } from "@/types/user";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const useUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        try {
            const response = await fetch(API_URL);
            const data: User[] = await response.json();
            setUsers(data);
        } catch (error) {
            setError("Error al obtener la información");
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchUsers();
    },[]);
    return { users, loading, error }
}

