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

</script>

<style lang="scss" scoped>
.user-list {
  padding: 0;
  li {
    margin-bottom: 2em;
  }
}
.user-container {
  align-items: flex-start;
  grid-template-columns: 210px 1fr 100px;
}

.user-container__content {
  padding: 0 1em;
}

.image {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
}
</style>
