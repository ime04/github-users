import { defineStore } from "pinia";
import { User } from "@/types";
import { userService } from "~/services/users";

export const useUserStore = defineStore('userList', () => {
  const organization = reactive({
      name: 'Lemoncode'
  });
  const setOrganizationName = (organizationName: string) => {
      organization.name = organizationName;
  }
  const fetchUsers = async (organizationName: string) => {
      const list: User[] = await userService.get(organizationName);
      return list;
  }
  return {
      organization,
      setOrganizationName,
      fetchUsers
  }
})