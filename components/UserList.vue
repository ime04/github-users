<template>
 <section class="wrapper">
    <div class="search">
        <input v-model="searchText" type="text" placeholder="Search organization"/>
        <input type="button" value="Search" @click="search"/>
    </div>
    <div class="flex align-items-center justify-content-between">
      <h1>Users</h1>
      total: {{ totalUsers }}
    </div>
    <ul class="user-list">
      <li class="user-item" v-for="user in list" :key="user.id">
        <NuxtLink :to="`/user/${user.login}`">
          <article class="grid user-container card">
            <div class="image">
              <img :src="user.avatar_url" alt="" loading="lazy" />
            </div>
            <div class="user-container__content">
              <h2>{{ user.login }}</h2>
            </div>
          </article>
        </NuxtLink>
      </li>
    </ul>
</section>

</template>
<script setup lang="ts">
import { userService } from '../services/users'
const list = await userService.get()
const totalUsers = computed(() => list.length);

const searchText = ref('')

const search = async () => {
  if (searchText.value.length) {
    const list = await userService.get(searchText.value);
    const totalUsers = computed(() => list.length);
  }
}

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

.user-item {
  background-color: lightgoldenrodyellow;
  border: 1px solid black;
}

.image {
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  img {
    width: 200px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
}
</style>