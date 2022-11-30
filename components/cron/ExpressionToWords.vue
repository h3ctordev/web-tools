<template>
  <div>
    <h1 class="text-cron">{{ handlerToExpression }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ExpressionToWords',
  props: {
    expression: {
      type: String,
      default: '',
    },
  },
  data: () => ({}),
  computed: {
    handlerToExpression() {
      if (!this.expression) return ''
      if (this.expression[0] === '@') {
        return this.getExtension(this.expression)
      }
      return this.expressionToWords(this.expression)
    },
  },
  methods: {
    getExtension(value) {
      let words = null
      // @reboot    :    Run once after reboot.
      // @yearly    :    Run once a year, ie.  "0 0 1 1 *".
      // @annually  :    Run once a year, ie.  "0 0 1 1 *".
      // @monthly   :    Run once a month, ie. "0 0 1 * *".
      // @weekly    :    Run once a week, ie.  "0 0 * * 0".
      // @daily     :    Run once a day, ie.   "0 0 * * *".
      // @hourly    :    Run once an hour, ie. "0 * * * *".
      switch (value) {
        case '@reboot':
          words = '"Después de cada reinicio."'
          break
        case '@yearly':
        case '@annually':
          words = this.expressionToWords('15 0 1 1 *') //'"A las 00:00 del día 1 del mes de enero."'
          break
        case '@monthly':
          words = '"A las 00:00 del dia 1 del mes."'
          break
        case '@weekly':
          words = '"A las 00:00 del domingo."'
          break
        case '@daily':
          words = '"A las 00:00."'
          break
        case '@hourly':
          words = '"En el minuto 0"'
        default:
          break
      }
      return words
    },
    expressionToWords(expression) {
      const [minute, hour, dayM, month, dayW] = expression.split(' ');
      console.log({ minute, hour, dayM, month, dayW });
      let words = null;
      if (!minute || !hour || !dayM || !month || !dayW) return null;
      words = this._time(hour, minute);
      words = `${words} ${this._date(dayM, month, dayW)}`
      return words;
    },
  },
}
</script>

<style>
.text-cron {
  font-family: 'Times New Roman', Times, serif !important;
  font-weight: 300;
}
</style>
