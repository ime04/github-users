<template>
    <div>
      <Header />
      <UserList :users="list"/>
    </div>
</template>

<script setup>
import { createPinia, setActivePinia } from 'pinia'
const pinia = createPinia();
setActivePinia(pinia);
definePageMeta({
  layout: 'default',
})
const userStore = useUserStore()
const list = await userStore.fetchUsers('lemoncode');
</script>