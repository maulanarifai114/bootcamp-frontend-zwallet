<template>
  <div class="changepass">
    <!-- Title -->
    <h3 class="title-pass">Change Password</h3>
    <p class="paragraph-pass">
      You must enter your current password and then type your new password twice.
    </p>
  </div>
</template>

<script>
export default {
  title: 'Change Password',
  name: 'ChangePass'
}
</script>

<style lang="scss" scoped>

.changepass {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 30px
}

.title-pass {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
  margin: 0 0 25px 0
}

.paragraph-pass {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #7A7886;
  width: 342px;
  margin: 0 0 100px 0
}

@media (max-width: 575px) {
  .paragraph-pass {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .changepass {
    padding: 30px 15px
  }
}

</style>
