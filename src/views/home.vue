<template>
  <div class="homeBody">
    <header class="headTab">
      <div class="headShow">
        <div class="head">
          <i class="el-icon-s-home"></i>
          <p class="name">周一波的个人博客</p>
        </div>
      </div>
      <ul class="menus">
        <li class="menu active" @click="selecteTab">
          <a href="javascript:;">前端框架</a>
        </li>
        <li class="menu" @click="selecteTab">
          <a href="javascript:;">算法学习</a>
        </li>
        <li class="menu" @click="selecteTab">
          <a href="javascript:;">前端趣闻</a>
        </li>
        <li class="menu" @click="selecteTab">
          <a href="javascript:;">常用js库</a>
        </li>
        <li class="menu" @click="selecteTab">
          <a href="javascript:;">学习笔记</a>
        </li>
        <li class="menu"><a href="javascript:;">签到打卡</a></li>
        <li class="search"><i class="el-icon-search"></i></li>
        <!-- <el-input placeholder="请输入搜索内容"></el-input> -->
      </ul>
    </header>
    <section class="imgList">
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <div class="glide__slide">
              <div class="glide_tab tab_center">
                <h1 class="title">前端三大框架: angular、react、vue</h1>
                <button class="glide_btn">
                  <a href="javascript:;">了解一下</a>
                </button>
              </div>
              <div class="backdrop"></div>
              <img src="@/assets/imgs/threejss.png" alt="" srcset="" />
            </div>
            <div class="glide__slide">
              <div class="glide_tab">
                <h1 class="title">angular:</h1>
                <h3 class="content">
                  Angular 是一个基于 TypeScript构建的开发平台。它包括：<br />
                  一个基于组件的框架，用于构建可伸缩的Web应用<br />
                  一组完美集成的库，涵盖各种功能，包括路由、表单管理、客户端-服务器通信等<br />
                  一套开发工具，可帮助你开发、构建、测试和更新代码借助
                  Angular，无论单人项目还是企业级应用，你都能获得平台带来的优势。
                </h3>
                <button class="glide_btn">
                  <a href="#angularTab">开始学习</a>
                </button>
              </div>
              <div class="backdrop"></div>
              <img src="@/assets/imgs/angular.jpg" alt="" srcset="" />
            </div>
            <div class="glide__slide">
              <div class="glide_tab">
                <h1 class="title">react:</h1>
                <h3 class="content">
                  React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript
                  库。<br />
                  使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI
                  界面，这些代码片段被称作“组件”。<br />
                  React 使用 JSX 来替代常规的 JavaScript。JSX 是一个看起来很像
                  XML 的 JavaScript 语法扩展。
                </h3>
                <button class="glide_btn">
                  <a href="#reactTab">开始学习</a>
                </button>
              </div>
              <div class="backdrop"></div>
              <img src="@/assets/imgs/react.jpg" alt="" srcset="" />
            </div>
            <div class="glide__slide">
              <div class="glide_tab">
                <h1 class="title">vue:</h1>
                <h3 class="content">
                  Vue (读音 /vjuː/，类似于 view)
                  是一套用于构建用户界面的渐进式框架。<br />
                  与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。<br />
                  Vue
                  的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。<br />
                  另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue
                  也完全能够为复杂的单页应用提供驱动。
                </h3>
                <button class="glide_btn">
                  <a href="#vueTab">开始学习</a>
                </button>
              </div>
              <div class="backdrop"></div>
              <img src="@/assets/imgs/vue.jpg" alt="" srcset="" />
            </div>
          </div>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
            &lt;&lt;
          </button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
            &gt;&gt;
          </button>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <button class="glide__bullet" data-glide-dir="=0"></button>
          <button class="glide__bullet" data-glide-dir="=1"></button>
          <button class="glide__bullet" data-glide-dir="=2"></button>
          <button class="glide__bullet" data-glide-dir="=3"></button>
        </div>
      </div>
    </section>
    <section id="angularTab" class="stack">
      <h2 class="title">Angular</h2>
      <div class="stack_boxs">
        <div
          class="stack_box selected angular"
          @click="selectStack($event, 'angular')"
        >
          <i class="el-icon-s-promotion red"></i>
          <span class="stack_title">基础案例</span>
          <article class="stack_content">
            展示Angular的基础案例来开拓学习兴趣
          </article>
        </div>
        <div class="stack_box angular" @click="selectStack($event, 'angular')">
          <i class="el-icon-s-marketing red"></i>
          <span class="stack_title">进阶案例</span>
          <article class="stack_content">
            展示Angular的进阶案例来展示更多的进阶技巧
          </article>
        </div>
        <div class="stack_box angular" @click="selectStack($event, 'angular')">
          <i class="el-icon-s-tools red"></i>
          <span class="stack_title">项目搭建</span>
          <article class="stack_content">
            Angular的项目构建：脚手架的搭建及路由配置等
          </article>
        </div>
        <div class="stack_box angular" @click="selectStack($event, 'angular')">
          <i class="el-icon-s-management red"></i>
          <span class="stack_title">系统学习</span>
          <article class="stack_content">
            从零开始的系统学习完整的Angular的相关知识及angular的相关原理
          </article>
        </div>
        <div class="stack_box angular" @click="selectStack($event, 'angular')">
          <i class="el-icon-s-platform red"></i>
          <span class="stack_title">实战演练</span>
          <article class="stack_content">
            完整的项目的构建及编写，有相关的不同的几个完整的项目案例
          </article>
        </div>
        <div class="stack_box angular" @click="selectStack($event, 'angular')">
          <i class="el-icon-s-opportunity red"></i>
          <span class="stack_title">成果展示</span>
          <article class="stack_content">
            系统学习完成后做出的angular项目的相关展示，及其源码
          </article>
        </div>
      </div>
      <div class="caseShow">
        <angular-tab :title="titleList.angularTitle"></angular-tab>
      </div>
    </section>
    <section id="reactTab" class="stack">
      <h2 class="title">React</h2>
      <div class="stack_boxs">
        <div
          class="stack_box selected react"
          @click="selectStack($event, 'react')"
        >
          <i class="el-icon-s-promotion red"></i>
          <span class="stack_title">基础案例</span>
          <article class="stack_content">
            展示Angular的基础案例来开拓学习兴趣
          </article>
        </div>
        <div class="stack_box react" @click="selectStack($event, 'react')">
          <i class="el-icon-s-marketing red"></i>
          <span class="stack_title">进阶案例</span>
          <article class="stack_content">
            展示Angular的进阶案例来展示更多的进阶技巧
          </article>
        </div>
        <div class="stack_box react" @click="selectStack($event, 'react')">
          <i class="el-icon-s-tools red"></i>
          <span class="stack_title">项目搭建</span>
          <article class="stack_content">
            Angular的项目构建：脚手架的搭建及路由配置等
          </article>
        </div>
        <div class="stack_box react" @click="selectStack($event, 'react')">
          <i class="el-icon-s-management red"></i>
          <span class="stack_title">系统学习</span>
          <article class="stack_content">
            从零开始的系统学习完整的Angular的相关知识及angular的相关原理
          </article>
        </div>
        <div class="stack_box react" @click="selectStack($event, 'react')">
          <i class="el-icon-s-platform red"></i>
          <span class="stack_title">实战演练</span>
          <article class="stack_content">
            完整的项目的构建及编写，有相关的不同的几个完整的项目案例
          </article>
        </div>
        <div class="stack_box react" @click="selectStack($event, 'react')">
          <i class="el-icon-s-opportunity red"></i>
          <span class="stack_title">成果展示</span>
          <article class="stack_content">
            系统学习完成后做出的angular项目的相关展示，及其源码
          </article>
        </div>
      </div>
      <div class="caseShow">
        <react-tab :title="titleList.reactTitle"></react-tab>
      </div>
    </section>
    <section id="vueTab" class="stack">
      <h2 class="title">Vue</h2>
      <div class="stack_boxs">
        <div class="stack_box selected vue" @click="selectStack($event, 'vue')">
          <i class="el-icon-s-promotion red"></i>
          <span class="stack_title">基础案例</span>
          <article class="stack_content">
            展示Angular的基础案例来开拓学习兴趣
          </article>
        </div>
        <div class="stack_box vue" @click="selectStack($event, 'vue')">
          <i class="el-icon-s-marketing red"></i>
          <span class="stack_title">进阶案例</span>
          <article class="stack_content">
            展示Angular的进阶案例来展示更多的进阶技巧
          </article>
        </div>
        <div class="stack_box vue" @click="selectStack($event, 'vue')">
          <i class="el-icon-s-tools red"></i>
          <span class="stack_title">项目搭建</span>
          <article class="stack_content">
            Angular的项目构建：脚手架的搭建及路由配置等
          </article>
        </div>
        <div class="stack_box vue" @click="selectStack($event, 'vue')">
          <i class="el-icon-s-management red"></i>
          <span class="stack_title">系统学习</span>
          <article class="stack_content">
            从零开始的系统学习完整的Angular的相关知识及angular的相关原理
          </article>
        </div>
        <div class="stack_box vue" @click="selectStack($event, 'vue')">
          <i class="el-icon-s-platform red"></i>
          <span class="stack_title">实战演练</span>
          <article class="stack_content">
            完整的项目的构建及编写，有相关的不同的几个完整的项目案例
          </article>
        </div>
        <div class="stack_box vue" @click="selectStack($event, 'vue')">
          <i class="el-icon-s-opportunity red"></i>
          <span class="stack_title">成果展示</span>
          <article class="stack_content">
            系统学习完成后做出的angular项目的相关展示，及其源码
          </article>
        </div>
      </div>
      <div class="caseShow">
        <vue-tab :title="titleList.vueTitle"></vue-tab>
      </div>
    </section>
    <footer class="footTab">
      <div class="footMsgs">
        <p class="phone">联系电话:15850833483</p>
        <p class="message">© 2021.10.25-现在 Morty.Zhou.com 版权所有</p>
        <p class="certificate">
          互联网个人站点信息服务资格证书-个人网站-2021-0010
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";
import anime from "animejs/lib/anime.es.js";
// import Anime from '../common/anime.min.js';
import angularTab from "./components/home/angularTab.vue";
import vueTab from "./components/home/vueTab.vue";
import reactTab from "./components/home/reactTab.vue";
export default {
  components: {
    angularTab,
    reactTab,
    vueTab,
  },
  data() {
    return {
      titleList: {
        angularTitle: "基础案例",
        reactTitle: "基础案例",
        vueTitle: "基础案例",
      },
    };
  },
  methods: {
    selecteTab(e) {
      let seleted = document.querySelectorAll(".menu");
      seleted.forEach((item) => {
        item.classList.remove("active");
      });
      if (e.target.classList.length > 0) {
        e.target.classList.add("active");
      } else {
        e.target.parentNode.classList.add("active");
      }
    },
    selectStack(e, clicked) {
      let boxs = document.querySelectorAll(`.${clicked}`);
      let target = "";
      boxs.forEach((item) => {
        item.classList.remove("selected");
      });
      if (e.target.classList[0] !== "stack_box") {
        target = e.target.parentNode;
        e.target.parentNode.classList.add("selected");
      } else {
        target = e.target;
        e.target.classList.add("selected");
      }
      console.log(target.children[1].innerHTML);
      this.titleList[`${clicked}Title`] = target.children[1].innerHTML;
      // switch (target) {
      //   case "基础案例":
      //     break;
      //   case "进阶案例":
      //     break;
      //   case "项目搭建":
      //     break;
      //   case "系统学习":
      //     break;
      //   case "实战演练":
      //     break;
      //   case "成果展示":
      //     break;
      // }
    },
    init() {
      const glide = new Glide(".glide");
      const glideTabEl = document.querySelectorAll(".glide_tab");
      glide.on(["mount.after", "run.after"], () => {
        const caption = glideTabEl[glide.index];
        anime({
          targets: caption,
          opacity: [0, 1],
          translateY: [anime.stagger([40, 10]), 0],
          delay: anime.stagger(400, { start: 300 }),
          duration: 2000,
        });
      });
      glide.on("run.before", () => {
        document.querySelectorAll(".glide_tab").forEach((el) => {
          el.style.opacity = 0;
        });
      });
      glide.mount();
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped lang="scss">
.homeBody {
  position: relative;
  .headTab {
    // position: fixed;
    // top: 0px;
    // left: 0px;
    // width: 100%;
    .headShow {
      // display: grid;
      justify-content: center;
      .head {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        .name {
          font-size: 26px;
          color: white;
        }
        .el-icon-s-home {
          font-size: 26px;
          margin-right: 1vw;
          color: white;
        }
      }
    }
    .menus {
      display: grid;
      grid-template-columns: repeat(6, 1fr) 2fr;
      font-size: 20px;
      font-weight: 550;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 0 5vw;
      .menu {
        padding: 3vh 0;
        text-align: center;
        a {
          color: white;
        }
      }
      .active {
        border-bottom: red 4px solid;
        animation: underTabs 1s;
      }
      .menu:hover {
        background-color: rgba(0, 0, 0, 1);
        border-bottom: red 4px solid;
        cursor: pointer;
      }
      .search {
        //    vertical-align: middle;
        align-self: center;
        .el-icon-search {
          margin-left: 10px;
          font-weight: 600;
          color: white;
          cursor: pointer;
        }
      }
    }
  }
  .imgList {
    .glide__slide {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .glide_tab {
        position: absolute;
        z-index: 10;
        padding: 0 160px;
        // animation: showGildeTxt 1s;
        .title {
          color: white;
          font-size: 54px;
          margin-bottom: 20px;
          // opacity: 0;
        }
        .content {
          color: white;
          font-size: 28px;
          margin-bottom: 20px;
          // opacity: 0;
        }
        .glide_btn {
          border: none;
          border-radius: 5px;
          font-size: 18px;
          //   font-weight: 500;
          background-color: red;
          // opacity: 0;
          a {
            padding: 10px 30px;
            color: white;
            display: block;
          }
        }
        .glide_btn:hover {
          cursor: pointer;
        }
      }
      .tab_center {
        text-align: center;
      }
      .backdrop {
        z-index: 9;
        background-color: rgba(0, 0, 0, 0.7);
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }
    }
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  }
  .stack {
    text-align: center;
    padding: 0 60px;
    .title {
      display: inline-block;
      margin: 30px 0 30px 0;
      padding: 0 30px;
      font-size: 36px;
      border-bottom: 6px solid red;
    }
    .stack_boxs {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 60px;
      grid-row-gap: 60px;
      padding: 0 150px;
      .stack_box {
        cursor: pointer;
        display: grid;
        grid-template-areas:
          "icon title"
          "icon content";
        grid-template-columns: 1fr 4fr;
        text-align: start;
        padding: 10px;
        .red {
          grid-area: icon;
          color: red;
          font-size: 60px;
        }
        .stack_title {
          grid-area: title;
          font-size: 24px;
          font-weight: 600;
        }
        .stack_content {
          grid-area: content;
          font-size: 18px;
          color: rgba(0, 0, 0, 0.4);
        }
      }
      .selected {
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
      }
      .stack_box:hover {
        transition: all 0.2s ease-out;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
      }
    }
    .caseShow {
      margin-top: 40px;
      width: 100%;
      text-align: start;
    }
  }
  .footTab {
    // width: 100%;
    // position: fixed;
    // bottom: 0px;
    // left: 0px;
    height: 6vh;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    margin-top: 20px;
    .footMsgs {
      display: grid;
      grid-template-areas:
        "phone phone"
        "message certificate";
      justify-content: center;
      grid-column-gap: 4vw;
      .phone {
        grid-area: phone;
        justify-self: center;
      }
      .message {
        grid-area: message;
      }
      .certificate {
        grid-area: certificate;
      }
    }
  }
}
div.glide__slide img {
  width: 100vw;
  height: 70vh;
  object-fit: cover;
  object-position: center;
}
div.glide__slide img::before {
  content: "";
  width: 100vw;
  height: 70vh;
}
@keyframes underTabs {
  from {
    opacity: 0.7;
  }
  to {
    opacity: 1;
  }
}
@keyframes showGildeTxt {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
  }
}
</style>