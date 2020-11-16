<template>
  <div class="BugPage page flex-grow-1 d-flex flex-column align-items-center justify-content-start">
    <div class="container">
      <div class="row p-3">
        <h1>Bug Report</h1>
      </div>
      <div class="row p-3 border align-items-center justify-content-between">
        <div class="col-6 text-left truncate">
          <h3>{{ bug.title }}</h3>
        </div>
        <div class="col-2">
          <button class="btn btn-info" v-if="profile.email === bug.creatorEmail" @click="editBug(bug)" :disabled="bug.archived ? true : false">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="row p-3 justify-content-between align-items-center border">
        <div class="col-3 truncate">
          <h6>{{ bug.creatorEmail }}</h6>
        </div>
        <div class="col-3 truncate">
          <h6>{{ bug.updatedAt }}</h6>
        </div>
      </div>
      <div class="row p-3 bg-light justify-content-center align-items-center bug-description">
        <div class="col-11">
          <p>{{ bug.description }}</p>
        </div>
      </div>
      <div class="row p-3 mt-5 border align-items-center justify-content-around text-center">
        <div class="col-4">
          <h5>
            User
          </h5>
        </div>
        <div class="col-6">
          <h5>
            Message
          </h5>
        </div>
        <div class="col-2">
          <button class="btn btn-info" @click="addNote(bug)" :disabled="bug.archived ? true : false">
            +Note
          </button>
        </div>
      </div>
      <NotesComponent v-for="n in notes" :key="n._id" :note-prop="n" :bug-prop="bug" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { bugService } from '../services/BugService'
import { noteService } from '../services/NoteService'
import { AppState } from '../AppState'
import router from '../router'
export default {
  name: 'BugPage',
  setup() {
    const route = useRoute()
    onMounted(() => {
      bugService.getOne(route.params.id)
      noteService.getAll(route.params.id)
    })
    const state = reactive({
      newNote: {}
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      bug: computed(() => AppState.bug),
      notes: computed(() => AppState.notes.filter(n => n.bugId === AppState.bug._id)),
      editBug(bug) {
        router.push({ name: 'EditBug', params: { id: bug._id } })
      },
      addNote(bug, newNote) {
        state.newNote.bugId = bug._id
        noteService.create(state.newNote)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.bug-description {
  word-wrap: break-word;
}
</style>
