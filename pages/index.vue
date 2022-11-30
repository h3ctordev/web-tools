<template>
  <main>
    <div class="container text-center">
      <div class="row justify-content-start left">
        <div class="col-12">
          <h1>Web Tools</h1>
        </div>
        <div v-for="tool in tools" :key="tool.apart"class="col-3">
          <h6>{{tool.icon}} {{tool.apart}}</h6>
          <ul class="text-left">
            <li v-for="s in tool.items" :key="s.link">
              <span v-if="s.disable" v-b-tooltip.hover :title="s.tooltip + ' ***En Contrucción***'">
                {{ s.name }} {{ s.icon }}
              </span>
              <NuxtLink v-else :to="s.link" v-b-tooltip.hover :title="s.tooltip">
                {{ s.name }} {{ s.icon }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    tools: [
      {
        apart: "Software",
        icon: "👨‍💻",
        items: [
          {
            name: 'crontab',
            link: '/software/crontab',
            icon: '🗓',
            tooltip: 'Editor para expresiones de programación cron',
            disable: true
          },
          {
            name: 'cal-program',
            link: '/software/calculator',
            icon: '🧮',
            tooltip: 'Calculadora para programadores',
            disable: true
          },
        ]
      },
      {
        apart: "Científico",
        icon: "🔬",
        items: [
          {
            name: 'conv-temperatura',
            link: '/scientific/convert-temp',
            icon: '🌡',
            tooltip: 'Conversor de temperatura',
          },
        ]
      },
    ]
  }),
}
</script>
