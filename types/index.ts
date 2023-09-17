export interface User {
    id: number
    login: string
    avatar_url: string
    bio: string
}

export interface UserOrganizations {
    [key: string] : User[]
}