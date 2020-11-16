<template>
  <div class="home page flex-grow-1 d-flex flex-column align-items-center justify-content-start">
    <div class="container">
      <div class="row p-3">
        <h1>Dashboard</h1>
      </div>
      <div class="row p-3">
        <div class="col-1">
          <h6>Status</h6>
        </div>
        <div class="col-3 text-left">
          <h6>Title</h6>
        </div>
        <div class="col-4">
          <h6>Modify</h6>
        </div>
        <div class="col-2">
          <h6>Creator</h6>
        </div>
        <div class="col-2">
          <h6>Date Modified</h6>
        </div>
      </div>
      <BugsComponent v-for="b in bugs" :key="b._id" :bug-prop="b" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { bugService } from '../services/BugService'
import { AppState } from '../AppState'
import BugsComponent from '../components/BugsComponent.vue'
export default {
  components: { BugsComponent },
  name: 'Home',
  setup() {
    onMounted(() => {
      bugService.getAll()
    })
    return {
      bugs: computed(() => AppState.bugs.filter(b => b.archived !== true))
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
