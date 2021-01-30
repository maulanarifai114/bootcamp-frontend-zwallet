<template>
  <label class="d-flex" for="password">
    <!-- Icon Left -->
    <div class="icon mr-3">
      <img :src="require(`@/assets/img/auth/${icon}.svg`)" alt="">
    </div>
    <!-- Input -->
    <input id="password" v-model="inputData" :type="type" :placeholder="placeholder" @input="inputTheData" @focus="$emit('focus')" minlength="8" required>
    <!-- Icon Password -->
    <div class="icon ml-3" v-if="type === 'password'" @click="$emit('changeType')">
      <img :src="require(`@/assets/img/auth/${eye}.svg`)" alt="eye" width="24px" height="24px">
    </div>
    <div class="icon ml-3" v-if="type === 'text'" @click="$emit('changeType')">
      <img :src="require(`@/assets/img/auth/${eye}.svg`)" alt="eye" width="24px" height="24px">
    </div>
  </label>
</template>

<script>
export default {
  name: 'InputPassAuth',
  props: ['icon', 'type', 'placeholder', 'eye'],
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
  background-color: #ffffff;
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
