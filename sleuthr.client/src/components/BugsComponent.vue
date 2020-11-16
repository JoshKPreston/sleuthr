// All bugs will have a title, description, who reported the bug, closedDate and whether or not it has been closed.
<template>
  <div class="BugsComponent row border flex-nowrap text-nowrap">
    <div class="col-1" @click="setBugResolvedStatus(bug)">
      <i :class="bug.closed ? 'fa fa-check btn-success' : 'fa fa-times btn-danger'" aria-hidden="true"></i>
    </div>
    <div class="col-3 text-left truncate">
      <router-link :to="{ name: 'Bug', params: { id: bug._id } }">
        {{ bug.title }}
      </router-link>
    </div>
    <div class="col-2 truncate">
      <router-link class="btn btn-info" :to="{ name: 'EditBug', params: { id: bug._id } }">
        Edit
      </router-link>
      <button class="btn btn-warning" @click="archiveBug(bug)" :disabled="bug.closed ? false : true">
        Archive
      </button>
    </div>
    <div class="col-3 truncate">
      {{ bug.creatorEmail }}
    </div>
    <div class="col-3 truncate">
      {{ bug.updatedAt }}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { bugService } from '../services/BugService'
// import { computed, onMounted } from 'vue'
// import { bugService } from '../services/BugService'
// import { AppState } from '../AppState'
export default {
  name: 'BugsComponent',
  props: {
    bugProp: {
      type: Object,
      default: () => {
        alert('bug prop does not exist')
      }
    }
  },
  setup(props) {
    return {
      bug: computed(() => props.bugProp),
      setBugResolvedStatus(bug) {
        bug.closed ? (bug.closed = false) : (bug.closed = true)
        bugService.editBugStatus(bug)
      },
      archiveBug(bug) {
        bug.archive = true
        bugService.archiveBug(bug)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.BugsComponent:hover {
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
}
.truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
