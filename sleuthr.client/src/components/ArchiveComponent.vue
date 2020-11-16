// All bugs will have a title, description, who reported the bug, closedDate and whether or not it has been closed.
<template>
  <div class="ArchiveComponent row border flex-nowrap text-nowrap align-items-center justify-content-center">
    <div class="col-2 text-left truncate">
      <router-link :to="{ name: 'Bug', params: { id: bug._id } }">
        {{ bug.title }}
      </router-link>
    </div>
    <div class="col-2 truncate">
      {{ bug.description }}
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
export default {
  name: 'ArchiveComponent',
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
      bug: computed(() => props.bugProp)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.ArchiveComponent:hover {
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
}
</style>
