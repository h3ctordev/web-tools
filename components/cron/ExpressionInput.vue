<template>
  <div class="cols px-5 py-3">
    <input
      type="text"
      :value="expression"
      name="expressions"
      id="expressions"
      class="expression-input py-1"
      autocomplete="off"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  name: 'ExpressionInput',
  props: {
    expression: {
      type: String,
      default: '* * * * *',
    },
    select: {
      type: Array,
      default: null,
    },
  },
  model: {
    prop: 'expression',
    event: 'input',
  },
  data: () => ({}),
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
    onInput(event) {
      console.log({ event, data: event.target.value })
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style>
.expression-input {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  font-size: 250%;
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 1em;
  color: #ffffff;
  padding-top: 0.075rem;
  background-color: rgba(88, 87, 87, 0.5);
}
.underline {
  text-decoration: underline;
}
.cron-part {
  width: 70px;
  font-size: 0.9rem;
  margin-left: 5px;
}
</style>
