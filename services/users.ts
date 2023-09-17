import { User } from "~/types"
export const userService = {
    async get(organization: string = 'lemoncode') {
        const users = await fetch(
            `https://api.github.com/orgs/${organization}/members`,
            {
                headers: {
                Authorization: "Bearer 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"
              }
            }
            ).then((r) =>
        r.json()
        )
        return users as User[];
    },
    async getUserByID(username: string) {
        const users = await fetch(`https://api.github.com/users/${username}`)
            .then((r) =>r.json()
        )
        return users as User;
    }
  }