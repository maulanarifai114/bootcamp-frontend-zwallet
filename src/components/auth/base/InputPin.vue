<template>
  <div class="d-flex">
    <input :id="id" v-model="inputData" type="password" @keyup="$emit('keyup', $event.target.value)" @input="inputTheData" @focus="$emit('focus')" min="0" max="9" maxlength="1" required>
  </div>
</template>

<script>
export default {
  name: 'InputPin',
  props: ['id'],
  data () {
    return {
      inputData: ''
    }
  },
  methods: {
    inputTheData (e) {
      this.$emit('input', this.inputData)
    }
  }
}
</script>

<style lang="scss" scoped>

input {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  color: #3A3D42;
  text-align: center;
  background-color: #ffffff!important;
  width: 100%;
  height: 100%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input-text-inactive {
  height: 65px;
  width: 55px;
  border-radius: 10px;
  border: 1px solid rgba(169, 169, 169, 0.6);
  overflow: hidden;
}

.input-text-active {
  height: 65px;
  width: 55px;
  border-radius: 10px;
  border: 1px solid #6379F4!important;
  overflow: hidden;
}

.input-text-error {
  height: 65px;
  width: 55px;
  border-radius: 10px;
  border: 1px solid #FF5B37;
  overflow: hidden;
}

@media (max-width: 410px) {
  .input-text-inactive, .input-text-active, .input-text-error {
    height: 52px;
    width: 44px;
  }
}

@media (max-width: 334px) {
  input {
    font-size: 24px;
  }
  .input-text-inactive, .input-text-active, .input-text-error {
    height: 45.5px;
    width: 38.5px;
  }
}

</style>
