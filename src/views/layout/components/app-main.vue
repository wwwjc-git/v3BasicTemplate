<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews () {
      return [] // read from state
    }
  }
}
</script>
