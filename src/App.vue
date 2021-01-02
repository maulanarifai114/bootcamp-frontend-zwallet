<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['interceptorRequest', 'interceptorResponse'])
  },
  created () {
    this.interceptorRequest()
    this.interceptorResponse()
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
@import './assets/css/cssreset/reset.css';
@import './assets/css/app/app.css';

* {
transition: .3s;
box-sizing: border-box;
text-decoration: none;
}

body {
  font-family: 'Nunito', 'Arial', sans-serif;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
  transition: .3s;
}

/* Track */
::-webkit-scrollbar-track {
  width: fit-content;
  transition: .3s;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #6379f44d;
  transition: .3s;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #6379f4b3;
  transition: .3s;
}

</style>
