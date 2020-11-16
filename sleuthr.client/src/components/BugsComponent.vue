// All bugs will have a title, description, who reported the bug, closedDate and whether or not it has been closed.
<template>
  <div class="BugsComponent row border flex-nowrap text-nowrap align-items-center">
    <div class="col-1">
      <button :class="bug.closed ? 'btn-success' : 'btn-danger'" :disabled="profile.email !== bug.creatorEmail" @click="setBugResolvedStatus(profile, bug)">
        <i :class="bug.closed ? 'fa fa-check' : 'fa fa-times'" aria-hidden="true"></i>
      </button>
    </div>
    <div class="col-3 text-left truncate">
      <router-link :to="{ name: 'Bug', params: { id: bug._id } }">
        {{ bug.title }}
      </router-link>
    </div>
    <div class="col-4 truncate">
      <button class="btn btn-info" v-if="profile.email === bug.creatorEmail" @click="editBug(profile, bug)" :disabled="bug.closed ? true : false">
        Edit
      </button>
      <button class="btn btn-warning" v-if="profile.email === bug.creatorEmail" @click="archiveBug(profile, bug)" :disabled="bug.closed ? false : true">
        Archive
      </button>
    </div>
    <div class="col-2 truncate">
      {{ bug.creatorEmail }}
    </div>
    <div class="col-2 truncate">
      {{ bug.updatedAt }}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { bugService } from '../services/BugService'
import router from '../router'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
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
      profile: computed(() => AppState.profile),
      bug: computed(() => props.bugProp),
      setBugResolvedStatus(profile, bug) {
        if (!profile.email === bug.creatorEmail) {
          logger.error('You are not the bug creator.')
        } else {
          bug.closed ? (bug.closed = false) : (bug.closed = true)
          bugService.editBugStatus(bug)
        }
      },
      editBug(profile, bug) {
        if (!profile.email === bug.creatorEmail) {
          logger.error('You are not the bug creator.')
        } else {
          router.push({ name: 'EditBug', params: { id: bug._id } })
        }
      },
      archiveBug(profile, bug) {
        if (!profile.email === bug.creatorEmail) {
          logger.error('You are not the bug creator.')
        } else {
          bug.archived = true
          bugService.archiveBug(bug)
        }
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
</style>
