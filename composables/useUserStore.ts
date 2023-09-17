import { defineStore } from "pinia";
import { User, UserOrganizations } from "@/types";
import { userService } from "~/services/users";
import { Ref } from "vue";

export const useUserStore = defineStore("userList", {
  state: () => ({
    searchTerm: "",
    userList: {} as UserOrganizations
  }),
  actions: {
    async fetchUsers(organizationName: string) {
      if (organizationName === "" || this.userList[organizationName]?.length > 0) {
        return;
      }
      const list: User[] = await userService.get(organizationName);
      this.userList[organizationName] = list;
      return list;
    },
    setSearchTerm(searchTerm: string) {
      this.searchTerm = searchTerm;
    }
  }
});