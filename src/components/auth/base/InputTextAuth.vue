<template>
  <label class="d-flex" :for="id">
    <!-- Icon Left -->
    <div class="icon mr-3">
      <img :src="require(`@/assets/img/auth/${icon}.svg`)" alt="" width="24px" height="24px">
    </div>
    <!-- Input -->
    <input :id="id" v-model="inputData" :type="type" :placeholder="placeholder" @input="inputTheData" @focus="$emit('focus')" required>
  </label>
</template>

<script>
export default {
  name: 'InputTextAuth',
  props: ['icon', 'type', 'placeholder', 'id'],
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
  font-size: 16px;
  line-height: 23px;
  color: #3A3D42;
  background-color: #ffffff00;
  width: 100%;
}

input::placeholder {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: rgba(169, 169, 169, 0.8);
}

.input-text-inactive {
  padding: 12px 0;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}

.input-text-active {
  padding: 12px 0;
  border-bottom: 1.5px solid #6379F4!important;
}

.input-text-error {
  padding: 12px 0;
  border-bottom: 1.5px solid #FF5B37;
}

.icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

</style>
