// All bugs will have a title, description, who reported the bug, closedDate and whether or not it has been closed.
<template>
  <div class="ReportBugPage page flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="container">
      <div class="row p-3">
        <h1>Report Bug</h1>
      </div>
      <div class="row p-3">
        <form class="col-8 report-bug-form" @submit.prevent="reportBug(state.newBug)">
          <div class="form-group">
            <label for="bugTitle">Title</label>
            <input
              type="text"
              name="bugTitle"
              id="bugTitle"
              class="form-control"
              placeholder=""
              aria-describedby="helpId"
              v-model="state.newBug.title"
            />
            <div class="form-group">
              <label for="bugDescription">Description</label>
              <textarea
                class="form-control"
                name="bugDescription"
                id="bugDescription"
                rows="15"
                v-model="state.newBug.description"
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
import { reactive } from 'vue'
import { bugService } from '../services/BugService'
import router from '../router'
export default {
  name: 'ReportBugPage',
  setup() {
    const state = reactive({
      newBug: {}
    })
    return {
      state,
      reportBug(newBug) {
        bugService.create(newBug)
        state.newBug = {}
        router.push({ name: 'Home' })
      }
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
</style>
