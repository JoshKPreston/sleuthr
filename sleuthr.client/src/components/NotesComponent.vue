<template>
  <div class="NotesComponent row flex-nowrap text-nowrap align-items-center mb-3 border">
    <div class="col-4">
      <div class="row p-3 align-items-center justify-content-around text-center">
        {{ note.creatorEmail }}<br>
        <small>
          {{ note.createdAt }}
        </small>
      </div>
    </div>
    <div class="col-6 note-message d-flex">
      <textarea rows="10" class="flex-grow-1 h-100 rounded" v-model="note.message" @change="editNote(bug, note)" :disabled="profile.email !== note.creatorEmail ? true : false"></textarea>
    </div>
    <div class="col-2 text-center">
      <button class="btn btn-danger" v-if="profile.email === note.creatorEmail" @click="deleteNote(bug, note)" :disabled="bug.archived ? true : false">
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { noteService } from '../services/NoteService'
import { AppState } from '../AppState'
export default {
  name: 'NotesComponent',
  props: {
    noteProp: {
      type: Object,
      default: () => {
        alert('note prop does not exist on NotesComponent')
      }
    },
    bugProp: {
      type: Object,
      default: () => {
        alert('bug prop does not exist on NotesComponent')
      }
    }
  },
  setup(props) {
    return {
      profile: computed(() => AppState.profile),
      note: computed(() => props.noteProp),
      bug: computed(() => props.bugProp),
      editNote(bug, note) {
        noteService.edit(bug, note)
      },
      deleteNote(bug, note) {
        noteService.delete(bug, note)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  .note-message {
    word-wrap: break-word;
  }
</style>
