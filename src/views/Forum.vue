<template>
  <div v-for="thread in threads" :key="thread.id">
    <div class="post-list px-5">
        <h1 class="pb-5">{{ thread.title }}</h1>
      <div
        class="post border-bottom mb-3 d-flex"
        v-for="postId in thread.posts"
        :key="postId"
      >
        <div class="user-info row mx-2">
          <a href="">
            <img
              class="avatar-large"
              height="250"
              :src="userById(postById(postId).userId).avatar"
            />
          </a>
          <a href="#" class="user-name">{{
            userById(postById(postId).userId).name
          }}</a>
          <p class="desktop-only text-small">107 Posts</p>
        </div>
        <div class="post-content border p-3 mb-5 w-100  mx-4">
          <p class="text-left">{{ postById(postId).text }}</p>
          <div class="post-date text-faded">
            {{ postById(postId).publishedAt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "../../services/data.json";
export default {
  name: "ForumView",
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
  methods: {
    postById(postId) {
      return this.posts.find((p) => p.id === postId);
    },
    userById(userId) {
      return this.users.find((p) => p.id === userId);
    },
  },
};
</script>
