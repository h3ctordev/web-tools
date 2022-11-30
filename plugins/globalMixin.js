import Vue from 'vue'

const mixin = {
  methods: {
    _time(hour, minute) {
      let words = null;
      if (minute === '*')
        words = `"Cada minuto`;  
      else if (parseInt(minute) < 60 && parseInt(minute) >= 0)
        words = `"Cada minuto ${minute}`;
      if(hour !== '*') 
        words = `${words} pasada la hora ${hour}`
      if(hour !== '*' && minute !== '*')
        words = `"A las ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`
      return words;
    },
    _date(dayM, month, dayW) {
      if(dayM === '*' && month === '*' && dayW=== '*') return '."'
    },
    _hour(expression) {
      if (expression === '*') return '"Cada '
      if (parseInt(expression) < 24 && parseInt(expression) >= 0)
        return `"A las ${expression.padStart(2, '0')}:`
    },
    _minute(expression) {
      if (expression === '*') return 'Cada minuto'
      if (parseInt(expression) < 60 && parseInt(expression) >= 0)
        return `${expression.padStart(2, '0')} `
    },
    _debounce(func, timeout = 600) {
      let timer; 
      return (...args) => {
        timer = setTimeout(() => {
          func(...args)
        }, timeout);
      }
    }
  },
}

Vue.mixin(mixin)
