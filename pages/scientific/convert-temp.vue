<template>
  <div class="container text-center">
    <div class="row justify-content-center p-3">
      <div class="col-12 mt-4">
        <h1>Conversor-temp</h1>
        <p>Conversor de temperaturas</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-md-4 text-left">
        <label for="celsius">Celsius: </label><br />
        <div class="col-12 input-group px-0">
          <input
            v-model="celsius"
            @input="onC"
            type="number"
            name="celsius"
            id="celsius"
            class="form-control"
          />
          <span class="input-group-text rounded-0">°C</span>
        </div>
      </div>
      <div class="col-12 col-md-4 text-left">
        <label for="kelvin">Kelvin: </label><br />
        <div class="col-12 input-group px-0">
          <input
            v-model="kelvin"
            @input="onK"
            type="number"
            name="kelvin"
            id="kelvin"
            class="form-control"
          />
          <span class="input-group-text rounded-0">°K</span>
        </div>
      </div>
      <div class="col-12 col-md-4 text-left">
        <label for="fahrenheit">Fahrenheit: </label><br />
        <div class="col-12 input-group px-0">
          <input
            v-model="fahrenheit"
            @input="onF"
            type="number"
            name="fahrenheit"
            id="fahrenheit"
            class="form-control"
          />
          <span class="input-group-text rounded-0 text-bold">°F</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConvertTemp',
  data: () => ({
    celsius: 0.00,
    kelvin: 273.15,
    fahrenheit: 32.00,
  }),
  methods: {
    kToC(k) {
      return k - 273.15
    },
    kToF(k) {
      return this.cToF(this.kToC(k))
    },
    fToC(f) {
      return (f - 32) / 1.8
    },
    fToK(f) {
      return this.cToK(this.fToC(f))
    },
    cToK(c) {
      return c + 273.15
    },
    cToF(c) {
      return c * 1.8 + 32
    },
    _debounce(callback, wait = 600) {
      let timerId
      return (...args) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
          callback(...args)
        }, wait)
      }
    },
    onC({target}) {
      this._debounce(this.cToAll(target.valueAsNumber));
    },
    cToAll(celsius){
      const c = parseFloat(celsius);
      this.kelvin = this.cToK(c).toFixed(2);
      this.fahrenheit = this.cToF(c).toFixed(2);      
    },
    onK({target}) {
      this._debounce(this.kToAll(target.valueAsNumber));
    },
    kToAll(kelvin){
      const k = parseFloat(kelvin);
      this.celsius = this.kToC(k).toFixed(2);
      this.fahrenheit = this.kToF(k).toFixed(2);      
    },
    onF({target}) {
      this._debounce(this.fToAll(target.valueAsNumber));
    },
    fToAll(fahrenheit){
      const f = parseFloat(fahrenheit);
      this.celsius = this.fToC(f).toFixed(2);
      this.kelvin = this.fToK(f).toFixed(2);      
    }

  },
}
</script>

<style></style>
