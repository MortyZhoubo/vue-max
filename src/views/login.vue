<template>
  <div class="login">
    <header class="head"></header>
    <div class="tabs">
      <div class="loginTab">
        <p class="text_name">{{ judge.tabShow ? "登录" : "注册" }}</p>
        <el-form ref="form" :model="formData" label-width="60px">
          <el-row>
            <el-col :span="24">
              <el-form-item label="用户名:">
                <el-input v-model="formData.userName"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="密码:">
                <el-input type="password" v-model="formData.password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row v-if="!judge.tabShow">
            <el-col :span="24">
              <el-form-item label="手机:">
                <el-input v-model="formData.phone"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row style="line-height: 3.5vh">
            <el-col :span="12">
              <el-button type="primary" round @click="login">登录</el-button>
            </el-col>
            <el-col :span="12">
              <!-- <input
                type="button"
                class="likeA"
                @click="showTab"
                :value="judge.tabShow ? '去注册' : '去登录'"
              /> -->
              <a class="goTo" @click="showTab" href="javascript:;">{{
                judge.tabShow ? "去注册->" : "去登录->"
              }}</a>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      judge: {
        tabShow: true,
      },
      formData: {
        password: "",
        userName: "",
        phone: "",
      },
    };
  },
  methods: {
    showTab() {
      this.judge.tabShow = !this.judge.tabShow;
      this.formData = {
        password: "",
        userName: "",
        phone: "",
      };
    },
    login() {
      if (this.judge.tabShow) {
        let data = {
          password: this.formData.password,
          userName: this.formData.userName,
        };
        debugger
        if(data.userName==='admin' && data.password === '123'){
            window.sessionStorage.setItem('token','aaaaaaa')
            this.$router.push({path: '/home'});
        }
      } else {
        let data = {
          password: this.formData.password,
          userName: this.formData.userName,
          phone:this.formData.phone
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: url("../assets/imgs/background.jpg") no-repeat;
  background-size: cover;
  object-fit: cover;
  object-position: center;
  .head {
    height: 15vh;
  }
  .tabs {
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .loginTab {
      background-color: white;
      width: 25vw;
      height: 35vh;
      opacity: 0.8;
      border-radius: 5%;
      min-width: 360px;
      min-height: 280px;
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 10px 20px;
      .text_name {
        font-size: 26px;
        font-weight: 600;
        margin-bottom: 30px;
      }
      a.goTo {
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        color: black;
      }
      a.goTo:hover {
        color: blue;
      }
    }
    // .registerTab{
    //     background-color: white;
    //     width: 30vw;
    //     height: 45vw;
    // }
  }
  .footer {
    height: 10vh;
  }
}
</style>