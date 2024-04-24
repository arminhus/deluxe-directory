import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { User, People } from '../types/UserTypes';

type Pagination = {
    limit: number;
    skip: number;
    total: number
}

const usePeople = () => {
    const baseUrl = 'https://dummyjson.com/users?';

    const [people, setPeople] = useState<People[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [headers, setHeaders] = useState<string[]>([]);
    const [pagination, setPagination] = useState<Pagination>({ limit: 10, skip: 0, total: 0 });

    const params = useMemo(() => {
        const urlParams = new URLSearchParams();
        urlParams.set('limit', pagination.limit.toString());
        urlParams.set('skip', pagination.skip.toString());
        return urlParams
    }, [pagination]);

    const updatePagination = (page: number) => {
        const limit = pagination.limit = 10;
        const skip = pagination.skip = page === 1 ? 0 : page * 10;
        setPagination({ ...pagination, limit, skip });
    }

    const allowedHeaders = ['name', 'height', 'mass', 'hairColor'];

    useEffect(() => {
        axios.get(`${baseUrl}${params.toString()}`)
            .then(response => {
                const mappedPeople = response.data.users.map((person: User) => {
                    return {
                        id: person.id,
                        name: `${person.firstName} ${person.lastName}`,
                        birthYear: person.birthDate,
                        eyeColor: person.eyeColor,
                        gender: person.gender,
                        hairColor: person.hair.color,
                        height: person.height,
                        mass: person.weight,
                    } as People
                });
                setPagination({ ...pagination, total: response.data.total });
                setPeople(mappedPeople);
                const headersFromData = Object.keys(mappedPeople[0]);
                const filteredHeaders = headersFromData.filter(key => allowedHeaders.includes(key));
                setHeaders(filteredHeaders);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
            });
    }, [pagination.skip])

    return { people, headers, loading, updatePagination, pagination };
}

export default usePeople;