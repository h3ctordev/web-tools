<template>
  <div class="text-center text-next">
    <span class="next-decorations" @click="thenJobs = true"> siguiente</span>
    trabajo el DD-MM-YYYY a las HH:mm:ss
    <div v-show="thenJobs">
      luego trabajo el DD-MM-YYYY a las HH:mm:ss <br />
      luego trabajo el DD-MM-YYYY a las HH:mm:ss <br />
      luego trabajo el DD-MM-YYYY a las HH:mm:ss <br />
      luego trabajo el DD-MM-YYYY a las HH:mm:ss <br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhenJob',
  data: () => ({
    thenJobs: false,
  }),
  computed: {},
  methods: {},
}
</script>

<style>
.next-decorations {
  text-decoration: underline;
}
.next-decorations:hover {
  text-decoration: none;
}
.text-next {
  font-size: 0.9rem;
}
</style>
