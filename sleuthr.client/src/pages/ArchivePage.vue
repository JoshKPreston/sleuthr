<template>
  <div class="ArchivePage flex-grow-1 d-flex flex-column align-items-center justify-content-start">
    <div class="container">
      <div class="row">
        <h1>Archive</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-3">
            <h6>Title</h6>
          </div>
          <div class="col-3">
            <h6>Description</h6>
          </div>
          <div class="col-3">
            <h6>Creator</h6>
          </div>
          <div class="col-3">
            <h6>Date Modified</h6>
          </div>
        </div>
        <ArchiveComponent v-for="b in bugs" :key="b._id" :bug-prop="b" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { bugService } from '../services/BugService'
import { AppState } from '../AppState'
import ArchiveComponent from '../components/ArchiveComponent.vue'
export default {
  components: { ArchiveComponent },
  name: 'Home',
  setup() {
    onMounted(() => {
      bugService.getAll()
    })
    return {
      bugs: computed(() => AppState.bugs)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
