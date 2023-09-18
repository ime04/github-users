<template>
 <section class="wrapper">
    <div class="search">
      <input type="search" v-model="searchText"/>
      <input type="button" value="Search" @click="handleSearchInput"/>
    </div>
    <div class="flex align-items-center justify-content-between">
      <h1>Users</h1>
      total: {{ countUsers }}
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

const {organization, setOrganizationName, fetchUsers} = useUserStore();
const searchText = ref(organization.name);

const response = await fetchUsers(searchText.value);
const list = ref(response);
const countUsers = computed(() => list.value.length);

const doSearch = async () => {
  setOrganizationName(searchText.value);
  list.value = await fetchUsers(searchText.value);
};

const handleSearchInput = () => {
  doSearch();
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