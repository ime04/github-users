<template>
  <NuxtLink to="/" class="back">⬅️ Go back</NuxtLink>
    <div class="container">
      <div class="card">
        <div>
          <img :src="user?.avatar_url" alt="" />
        </div>
        <div v-if="user">
          <h1>{{ user.login }}</h1>
          <p class="flex">
            {{user.bio}}
          </p>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import { userService } from '../../services/users'
import { User } from '../../types'

const route = useRoute()
const id = route.params.id as string

const { data: user } = useAsyncData<User>(() =>
  userService.getUserByID(id)
)
</script>
  
<style scoped>
.back {
  display: block;
  margin: 1rem 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card {
  width: 350px;
  border: 1px solid black;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1em;
  padding: 1em;
  background-color: lightgoldenrodyellow;
}
</style>