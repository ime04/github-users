import { User } from "~/types"
export const userService = {
    async get(organization: string) {
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