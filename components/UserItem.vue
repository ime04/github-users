<template>
    <article class="grid user-container card">
        <div class="image">
            <img :src="user.avatar_url" alt="" loading="lazy" />
        </div>
        <div class="user-container__content">
            <h2>{{ user.login }}</h2>
        </div>
    </article>
</template>

<script setup lang="ts">
import { User } from '@/types'

interface Props {
  user: User
}
const props = defineProps<Props>()

</script>

<style lang="scss" scoped>
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