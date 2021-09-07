
import { useState, useEffect } from 'react'
import { Repository } from 'models/repository'

export function useSearch(repos: Repository[]) {
    const [filtered, setFiltered] = useState<Repository[]>([])
    const [search, setSearch] = useState<string>("")

    useEffect(() => {
        setFiltered(repos.filter((repo) =>
            match(repo.full_name, repo.description, search)
        ))
    }, [search, repos])

    return [filtered, setSearch] as const
}

function match(fullName: string, description: string, search: string): boolean {
    if (fullName.toLowerCase().includes(search.toLowerCase())) {
        return true
    }

    if (description.toLowerCase().includes(search.toLowerCase())) {
        return true
    }

    return false
}
