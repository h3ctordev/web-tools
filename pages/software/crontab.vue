<template>
  <div class="container text-center">
    <div class="row justify-content-center p-3">
      <div class="col-12 m-2">
        <h1>crontab</h1>
        <p>Editor para expresiones de programación cron</p>
      </div>
      <div class="col-12 mt-4">
        <expression-to-words :expression="expression" />
      </div>
      <div class="col-5">
        <when-job></when-job>
      </div>
      <div class="col-12 mt-4">
        <expression-input v-model="expression" />
        <expression-parts />
      </div>
    </div>
  </div>
</template>

<script>
import ExpressionInput from '~/components/cron/ExpressionInput'
import ExpressionParts from '~/components/cron/ExpressionParts'
import ExpressionToWords from '~/components/cron/ExpressionToWords'
import WhenJob from '~/components/cron/WhenJob'
export default {
  name: 'contabPage',
  components: {
    ExpressionInput,
    ExpressionParts,
    ExpressionToWords,
    WhenJob,
  },
  data: () => ({ expression: '4 * * * *' }),
}
</script>

<style></style>
