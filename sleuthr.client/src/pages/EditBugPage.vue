<template>
  <div class="EditBugPage flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="container">
      <div class="row">
        <h1>Edit Bug</h1>
      </div>
      <div class="row">
        <form class="col-8 report-bug-form" @submit.prevent="editBug(state.bug)">
          <div class="form-group">
            <label for="bugTitle">Title</label>
            <input
              type="text"
              name="bugTitle"
              :id="'bugTitle_' + state.bug._id"
              class="form-control"
              placeholder=""
              aria-describedby="helpId"
              v-model="state.bug.title"
            />
            <div class="form-group">
              <label for="bugDescription">Description</label>
              <textarea
                class="form-control"
                name="bugDescription"
                :id="'bugDescription_' + state.bug._id"
                rows="15"
                v-model="state.bug.description"
              ></textarea>
            </div>
            <button class="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { bugService } from '../services/BugService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import router from '../router'
export default {
  name: 'EditBugPage',
  setup() {
    const route = useRoute()
    onMounted(() => {
      bugService.getOne(route.params.id)
    })
    const state = reactive({
      bug: computed(() => AppState.bug),
      editBug: {}
    })
    return {
      state,
      editBug(editBug) {
        editBug.id = state.bug._id
        bugService.edit(editBug)
        state.changedBug = {}
        router.push({ name: 'Home' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
