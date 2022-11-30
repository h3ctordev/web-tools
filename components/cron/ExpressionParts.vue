<template>
  <div class="row justify-content-center py-1">
    <div v-for="part in cronParts" :key="part.key" class="cols cron-part">
      <span class="underline"> {{ part.name }} </span>
      <br />{{ part && part.surname }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExpressionParts',
  data: () => ({
    cronParts: [
      {
        key: 'minute',
        name: 'minuto',
        select: false,
        position: [0, 1],
      },
      {
        key: 'hour',
        name: 'hora',
        select: false,
        position: [2, 3],
      },
      {
        key: 'dayM',
        name: 'dia',
        surname: '(mes)',
        select: false,
        position: [2, 3],
      },
      {
        key: 'month',
        name: 'mes',
        select: false,
        position: [2, 3],
      },
      {
        key: 'dayW',
        name: 'dia',
        surname: '(semana)',
        select: false,
        position: [2, 3],
      },
    ],
  }),
  computed: {
    positionCursor() {
      const doc = document.querySelector('#expressions')
      return doc.selectionStart
    },
    chartCursor() {
      const doc = document.querySelector('#expressions')
      return this.expression[doc.selectionStart]
    },
  },
  methods: {
    position(e) {
      const _position = e.target.selectionStart
      console.log(e)
      console.log(e.target.selectionStart)
      console.log(e.target.selectionEnd)
      console.log(this.expression[_position])
    },
  },
  mounted() {
    console.log({ position: this.positionCursor })
  },
}
</script>

<style>
.underline {
  text-decoration: underline;
}
.cron-part {
  width: 70px;
  font-size: 0.9rem;
  margin-left: 5px;
}
</style>
