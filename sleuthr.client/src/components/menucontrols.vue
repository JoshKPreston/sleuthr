<template>
  <div class="MenuControls col-2 bg-dark overflow-auto">
    <router-link class="row text-light menu-control align-items-center flex-nowrap text-nowrap" :to="{ name: 'Home' }">
      <div class="col-3 text-center">
        <i class="fa fa-dashcube" aria-hidden="true"></i>
      </div>
      <div class="col-9 text-left flex-nowrap">
        Dashboard
      </div>
    </router-link>
    <router-link class="row text-light menu-control align-items-center flex-nowrap text-nowrap" :to="{ name: 'ReportBug' }">
      <div class="col-3 text-center">
        <i class="fa fa-bug" aria-hidden="true"></i>
      </div>
      <div class="col-9 text-left">
        Report Bug
      </div>
    </router-link>
    <router-link class="row text-light menu-control align-items-center flex-nowrap text-nowrap" :to="{ name: 'Archive' }">
      <div class="col-3 text-center">
        <i class="fa fa-archive" aria-hidden="true"></i>
      </div>
      <div class="col-9 text-left">
        Archive
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuControls',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  .MenuControls {
    box-shadow: inset 0px 0px 2px 0px #000
  }
  .menu-control {
    height: 5vh;
    text-decoration: none;
    font-size: 1.2em;
    padding: 3vh;
  }
</style>
