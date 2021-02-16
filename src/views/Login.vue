<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-form class="login-form">
        <el-form-item>
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      pwd: ''
    }
  }
}
</script>
<style lang="less" scoped>
.login_container {
  background: #2b4b6b;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_box {
  background: #fff;
  height: 300px;
  width: 450px;
  // position: absolute;
  // left: 50%;
  // top: 50%;
  // transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  margin: 0 auto;
  box-shadow: 0 0 10px #ddd;
  transform: translateY(-50%);
  background: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #ddd;
  }
}
.login-form {
  padding: 0 20px;
  margin-top: -20px;
}
</style>
