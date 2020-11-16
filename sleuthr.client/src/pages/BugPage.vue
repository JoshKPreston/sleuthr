<template>
  <div class="BugPage flex-grow-1 d-flex flex-column align-items-center justify-content-start">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>
            {{ bug.title }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { bugService } from '../services/BugService'
import { AppState } from '../AppState'
export default {
  name: 'BugPage',
  setup() {
    const route = useRoute()
    onMounted(() => {
      bugService.getOne(route.params.id)
    })
    return {
      bug: computed(() => AppState.bug)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
