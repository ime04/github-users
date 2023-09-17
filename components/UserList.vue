<template>
 <section class="wrapper">
    <div class="search">
      <input type="search" v-model="searchText" @input="handleSearchInput" />
    </div>
    <div class="flex align-items-center justify-content-between">
      <h1>Users</h1>
      total: {{ totalUsers }}
    </div>
    <ul class="user-list">
      <li class="user-item" v-for="user in list" :key="user.id">
        <NuxtLink :to="`/user/${user.login}`">
          <UserItem :user="user"/>
        </NuxtLink>
      </li>
    </ul>
</section>

</template>
<script setup lang="ts">
import { User } from '~/types'
import {debounce} from 'lodash';

const props = defineProps<{
  users: User[]
}>()

const totalUsers = computed(() => {
  return list.value.length;
})

const userStore = useUserStore();
const searchTerm = computed(() => userStore.searchTerm);
const searchText = ref(searchTerm.value);

const list = computed(() => userStore.userList[searchText.value] ?? props.users);
const debouncedSearch = debounce(value => {
  userStore.fetchUsers(value);
  console.log(userStore.userList);
}, 200);
const handleSearchInput = () => {
  debouncedSearch(searchText.value);
};

</script>

<style lang="scss" scoped>

.wrapper {
  padding: 2em;
}
.user-list {
  padding: 0;
  li {
    margin-bottom: 2em;
  }
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  align-items: flex-start;
  justify-content: center;
}

.user-container__content {
  padding: 0 1em;
}

</style>