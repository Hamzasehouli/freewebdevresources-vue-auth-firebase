<template>
  <section class="hero">
    <div class="base-section">
      <h1 class="para">
        Resources for web development that help you to hand-crafting beautiful
        projects
      </h1>
    </div>
  </section>

  <ul class="menu">
    <li :key="btn" v-for="btn in menuBtns" class="menu__item">
      <base-press
        type="button"
        mode="empty"
        @click="selectSection(btn)"
        class="menu__btn"
        ><svg><use :href="`${sprite}#${btn}`"></use></svg> {{ btn }}</base-press
      >
    </li>
  </ul>

  <!-- html -->

  <base-section id="html" class="section section-html">
    <figure>
      <svg><use :href="sprite + '#html'"></use></svg>
    </figure>
    <h2>html 5 resources</h2>
    <ul class="resources">
      <resource
        :resource="resource"
        :key="resource.title"
        v-for="resource in htmlResources"
      ></resource>
    </ul>
  </base-section>

  <!-- html -->

  <base-section mode="bg" id="css" class="section section-css">
    <figure>
      <svg><use :href="sprite + '#css'"></use></svg>
    </figure>
    <h2>css resources</h2>
    <ul class="resources">
      <resource
        :resource="resource"
        :key="resource.title"
        v-for="resource in cssResources"
      ></resource>
    </ul>
  </base-section>
  <base-section id="js" class="section section-js">
    <figure>
      <svg><use :href="sprite + '#js'"></use></svg>
    </figure>
    <h2>js resources</h2>
    <ul class="resources">
      <resource
        :resource="resource"
        :key="resource.title"
        v-for="resource in jsResources"
      ></resource>
    </ul>
  </base-section>
  <base-section mode="bg" id="fonts" class="section section-fonts">
    <figure>
      <svg><use :href="sprite + '#fonts'"></use></svg>
    </figure>
    <h2>fonts resources</h2>
    <ul class="resources">
      <resource
        :resource="resource"
        :key="resource.title"
        v-for="resource in fontsResources"
      ></resource>
    </ul>
  </base-section>
  <base-section id="nodejs" class="section section-nodejs">
    <figure>
      <svg><use :href="sprite + '#nodejs'"></use></svg>
    </figure>
    <h2>nodejs resources</h2>
    <ul class="resources">
      <resource
        :resource="resource"
        :key="resource.title"
        v-for="resource in nodejsResources"
      ></resource>
    </ul>
  </base-section>
  <base-section mode="bg" id="colors" class="section section-colors">
    <figure>
      <svg><use :href="sprite + '#colors'"></use></svg>
    </figure>
    <h2>colors tools</h2>
    <ul class="resources">
      <resource
        :resource="resource"
        :key="resource.title"
        v-for="resource in colorsResources"
      ></resource>
    </ul>
  </base-section>
  <base-section id="images" class="section section-images">
    <figure>
      <svg><use :href="sprite + '#images'"></use></svg>
    </figure>
    <h2>images tools</h2>
    <ul class="resources">
      <resource
        :resource="resource"
        :key="resource.title"
        v-for="resource in imagesResources"
      ></resource>
    </ul>
  </base-section>
  <base-section mode="bg" id="icons" class="section section-icons">
    <figure>
      <svg><use :href="sprite + '#icons'"></use></svg>
    </figure>
    <h2>icons tools</h2>
    <ul class="resources">
      <resource
        :resource="resource"
        :key="resource.title"
        v-for="resource in iconsResources"
      ></resource>
    </ul>
  </base-section>
  <base-section id="vuejs" class="section section-vue">
    <figure>
      <img
        style="width: 100px"
        src="https://cdn.worldvectorlogo.com/logos/vue-9.svg"
        alt="vue logo"
      />
    </figure>
    <h2>vue resources</h2>
    <ul class="resources">
      <resource
        :resource="resource"
        :key="resource.title"
        v-for="resource in vueResources"
      ></resource>
    </ul>
  </base-section>
</template>

<script>
import sprite from "../../public/sprite.svg";
import Resource from "../components/Resource.vue";
export default {
  components: { Resource },
  data() {
    return {
      selectedBtn: "",
      menuBtns: [
        "html",
        "css",
        "js",
        "nodejs",
        "fonts",
        "colors",
        "images",
        "icons",
        "vuejs",
      ],
      htmlResources: [
        {
          imgPath:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbi2I4Y9Zd74kVvPTnXe-O11qSn_6H7i-gBj1CHucgGt3MoMeAHaGo5BOfu8Ov-U4iLKk&usqp=CAU",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
          title: "HTML5 Reference by MDN",
          para: "MDN is renowned for its amazing decumentation, it is not necessary to know all the element and tags and etc...",
        },
        {
          imgPath:
            "http://codingheroes.io/resources/img/logos/css-tricks-3.png",
          link: "https://css-tricks.com/snippets/html/glyphs/",
          title: "HTML Entity Reference by CSS-Tricks",
          para: "An other helpful reference for html developers, gives you HTML entity name, numeric code, hex code and ISO code.",
        },
      ],
      cssResources: [
        {
          imgPath:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbi2I4Y9Zd74kVvPTnXe-O11qSn_6H7i-gBj1CHucgGt3MoMeAHaGo5BOfu8Ov-U4iLKk&usqp=CAU",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
          title: "Css Reference by MDN",
          para: "Knowing all css properties, is very hard especially if your are newbie, just browse this useful reference if need some  ",
        },
        {
          imgPath: "http://codingheroes.io/resources/img/logos/codrops.png",
          link: "http://tympanus.net/codrops/css_reference/",
          title: "CSS3 Reference by Codrops",
          para: "Codrops is an other excellent css resource, it might be your next css guide  ",
        },
        {
          imgPath: "http://codingheroes.io/resources/img/logos/caniuse.png",
          link: "http://caniuse.com/",
          title: "Can I Use?",
          para: "CanIuse helps to visualize which frontend technologies are compatible with which browsers.",
        },
      ],
      jsResources: [
        {
          imgPath:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbi2I4Y9Zd74kVvPTnXe-O11qSn_6H7i-gBj1CHucgGt3MoMeAHaGo5BOfu8Ov-U4iLKk&usqp=CAU",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
          title: "JavaScript Reference by MDN",
          para: "MDN goes beyond HTML and CSS, it represents an additional guidance to Javascript",
        },
        {
          imgPath:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbi2I4Y9Zd74kVvPTnXe-O11qSn_6H7i-gBj1CHucgGt3MoMeAHaGo5BOfu8Ov-U4iLKk&usqp=CAU",
          link: "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence",
          title: "JavaScript Operator Precedence Table",
          para: "Explore what javascript operator precede and wich one is validated next",
        },
        {
          imgPath:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbi2I4Y9Zd74kVvPTnXe-O11qSn_6H7i-gBj1CHucgGt3MoMeAHaGo5BOfu8Ov-U4iLKk&usqp=CAU",
          link: "https://developer.mozilla.org/en-US/docs/Web/Events",
          title: "JavaScript Event Reference",
          para: "Handy reference list of all DOM events with explanations, nicely categorized. Know more about DOM events, it offers a broad overview and have a deep understanding of them",
        },
        {
          imgPath:
            "https://markpollmann.com/static/92d2543093bad281e896e88457a28198/3891b/es6.png",
          link: "https://kangax.github.io/compat-table/es6/",
          title: "ES6+ Browser Compatibility Table",
          para: "Get in touch with all ES6+ features and check which browser version support them ",
        },
        {
          imgPath: "https://avatars.githubusercontent.com/u/70142?s=200&v=4",
          link: "http://youmightnotneedjquery.com/",
          title: "DOM Manipulation Reference",
          para: "Called You Might Not Need jQuery, enrich your DOM manipulation knowledge with this reference, it is nicely categorized",
        },
        {
          imgPath: "http://codingheroes.io/resources/img/logos/js-patterns.png",
          link: "https://addyosmani.com/resources/essentialjsdesignpatterns/book/",
          title: "JavaScript Design Patterns",
          para: "For more advanced developers: learn all common JavaScript design patterns. Perfect reference.This resource is for advanced javascript developers, learn common Javascript design patterns",
        },
      ],
      fontsResources: [
        {
          imgPath:
            "https://cdn.worldvectorlogo.com/logos/google-fonts-2021-2.svg",
          link: "https://www.google.com/fonts",
          title: "Google Fonts",
          para: "Google fonts still without doubt a favourite fonts library among web developers, it huge and very useful",
        },
        {
          imgPath: "https://cdn.worldvectorlogo.com/logos/font-squirrel.svg",
          link: "https://www.fontsquirrel.com/",
          title: "Fontsquirrel",
          para: "Fontsquirrel is a free fonts for commercial use.",
        },
        {
          imgPath: "https://image.flaticon.com/icons/png/512/23/23303.png",
          link: "http://www.creativebloq.com/graphic-design-tips/best-free-fonts-for-designers-1233380",
          title: "The 100 best free fonts by Creative Bloq",
          para: "This resource summarize a list of free and paid fonts tools.",
        },
      ],
      nodejsResources: [
        {
          imgPath: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
          link: "https://nodejs.org/en/docs/",
          title: "Node.js Documentation",
          para: "The official Node.js documentation, an essential guide for node.js developers",
        },
        {
          imgPath: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
          link: "https://expressjs.com/en/4x/api.html",
          title: "Express Reference",
          para: "Essential manual for building express applications. Also contains tutorials and other resources. The startpoint for whom want to use the node.js framework :express.js ",
        },
        {
          imgPath: "http://codingheroes.io/resources/img/logos/mongoose.png",
          link: "https://mongoosejs.com/docs/guide.html",
          title: "Mongoose Documentation",
          para: "mongoose build upon mongoDB, make working with it easier and in more efficient way",
        },
        {
          imgPath: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
          link: "https://docs.mongodb.com/manual/",
          title: "The MongoDB Manual",
          para: "mongoDB main documentation, an essential guide for mongoDB users",
        },
      ],
      colorsResources: [
        {
          imgPath: "https://uichroma.netlify.app/img/logo-black.8b91790f.png",
          link: "https://uichroma.netlify.app",
          title: "Uichroma",
          para: "A good starting point for choosing a flat design color for your next project.",
        },
        {
          imgPath:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///+AgIC/v79AQEAAAADDw8M6OjqEhIR7e3u6urpDQ0MeHh49PT3x8fFISEgyMjLMzMzq6ure3t7U1NTIyMiNjY0rKyvk5OT5+fnv7+/Q0NChoaEvLy9xcXGoqKjY2NhOTk5XV1dhYWGSkpIRERGxsbEYGBhNTU0lJSVfX1+YmJhqamq+wztWAAADu0lEQVR4nO3d63qaQBSF4S0WARUQOYgaDyiaqPd/fx2oTU2iNY1Mdmex3ytY3xOjM/hDIiGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQnwrD1kVmHsWLi9XhT50oa8KI+jCSBVOoAsnqnDMvUKrsSpccY/QaqUKZ9wjtJqpwoR7hFaJKrS5R2hlt6KQe4Nm4Ie2+tgmhYZThdAH7/roPQUvnGJfLerLBX4h9OWpvj7hF2JfDy0Lv3DcgkLsK351yccvjLknaIZfGLegEPtRW/WwDb9wxD1Bs5EUGq8NhdgP9avH+lJoujYUYn8xU301I4Wmk0Lz2ZTY2BJy0ZHTwea0oJB7gXZSaD4pNJ8Umk8KzSeF5pNC80mh+aTQfFJoPik0nxSaTwrNJ4Xmk0LzSaH54Avl+0PzteFbbik0nRSaTwrN51DqYEtp2MPWpX4XWx++MKCAe4JmbSh85p6gGX7hM625J2i2bkFhMeTeoNWwaEHhAbzwQBvwwg2dwAtPtAAvXJDb4x6hVc+lDnihuuODF6ZSaDpVuAUv3NIRvPBIc/DCOe1C7hFahTv4Qo8s8EKLbPDChEZP3CO0ehpRDF4Y0xi8cExRxj1CqywiH7zQpxz8vTSnHPzUlhMFyA9qhgERraELC1UI/cB0uFGF0A/beq4qhH6Moa74RHPkj4twrgqhL4jqAkzYlwt1tSAaIx/bsurXAaEPpln1K50U9nGF9a/l/kBWFxbcKzQq6sIF9wyNFnXhknuGRsu60OaeoZFdF0bcMzSKCP3N9Pzj6l3uHdp0z4UO9xBtnHOhxT1EG+tciPtWc36jIRpwL9Fk/zsQ9lSzeC30uKdo4r0W+txTNPFfCyng3qJF8CcQ9PC9vCicco/R4uJFSnTgXqPB4TIQ8lhjvymkkntP48q3gTTnHtS45btCvD/i+0DacS9q2O5DIWXcmxqVfQykFfeoRsVXCqGu+p1rgURP3Lsac+01WplwD2tMdKOQZtzLGjK7FYhyFbZuB2KcT/8aSBRz73vY1c+JS5MX7okPCaf3Asnsz0Xnfl5lZeoBLlt9LlDxTHxGvL9y2P5bo2n/joN/66vMTHoSfrLvB12Re2Y8oFov8y/1/Yq03f/7bWffSR7IO/PttCi5S64J0sS/P/+zotHSLfbcTWdl4e5mN+8Pj5nMvHnqHoLw+2PLrL9xt3Mv/syppQm5H43jxPZ2y2PqdFx3cdocin4vG9T2Zfm52eXgwksWDofD/nOxObmu23HS7XG+8+zRauL7X/5v+wlerrTr+t7AtAAAAABJRU5ErkJggg==",
          link: "http://www.0to255.com/",
          title: "0to255",
          para: "Another helpful tool that generates tints and shades of selected colors.",
        },
        {
          imgPath: "http://codingheroes.io/resources/img/logos/opencolor.png",
          link: "https://yeun.github.io/open-color/",
          title: "Open Color",
          para: "As the name says, open color is an open source colors scheme, which is UI optimized.",
        },
      ],
      imagesResources: [
        {
          imgPath: "https://cdn.worldvectorlogo.com/logos/unsplash-2.svg",
          link: "https://unsplash.com/",
          title: "Unsplash",
          para: "Unspalsh is the best resource for free images. ",
        },
        {
          imgPath:
            "https://www.drupal.org/files/project-images/pexels_logo_0.png",
          link: "https://www.pexels.com/",
          title: "Pexels",
          para: "Beside Unsplash, pexels is also a big resort for selecting free images",
        },
        {
          imgPath: "http://codingheroes.io/resources/img/logos/pixaby.png",
          link: "https://pixabay.com/en/",
          title: "Pixabay",
          para: "Pixabay is also helpful fro picking illustrations, images and vectores",
        },
      ],
      iconsResources: [
        {
          imgPath: "http://codingheroes.io/resources/img/logos/ionicons.png",
          link: "https://ionic.io/ionicons",
          title: "Ionicons",
          para: "One of the best icon repo out there, allows to chse from a nice set of icons",
        },
        {
          imgPath: "http://codingheroes.io/resources/img/logos/icomoon.png",
          link: "https://icomoon.io/",
          title: "Icomoon",
          para: "Really useful svg icons library.",
        },
      ],
      vueResources: [
        {
          imgPath: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
          link: "https://vuejs.org/",
          title: "Vue.js",
          para: "The official vue.js documentation, still the staple reference and guide for every Vue developer",
        },
        {
          imgPath: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
          link: "https://forum.vuejs.org/",
          title: "Vue forum",
          para: "An other amazing portal for vue developers who stuck and seek for need help and guidance",
        },
      ],
    };
  },
  computed: {
    sprite() {
      return sprite;
    },
  },
  methods: {
    selectSection(btn) {
      this.selectedBtn = btn;

      document.getElementById(btn).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    },
  },
  mounted() {
    document.title = 'Resources'
    const firstSection = document.querySelector(".hero");
    const callBackSection = function (entries) {
      const [entry] = entries;
      const menu = document.querySelector(".menu");
      if (!entry.isIntersecting) {
        menu?.classList?.add("added");
      } else {
        menu?.classList?.remove("added");
      }
    };

    const optionsSection = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const sectionObserver = new IntersectionObserver(
      callBackSection,
      optionsSection
    );

    sectionObserver.observe(firstSection);
  },
};
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  color: var(--color-main-white);
  background-color: var(--color-secondary);
  height: 30rem;
}
.base-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 2.5rem;
  font-weight: 300 !important;
  width: 70%;
  margin: 0 auto;
  @media only screen and (max-width: 30rem) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 20rem) {
    font-size: 1.3rem;
    line-height: 200%;
  }
}
.para {
  text-align: center;
}

.menu {
  padding: 0 2rem;
  width: 100%;
  margin: 3rem 0;
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  // justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));

  list-style: none;
  // & > * {
  //   &:not(:last-of-type) {
  //     margin-right: 1rem;
  //   }
  // }

  &__item {
    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 0.8rem;
      background-color: var(--color-secondary-light);

      fill: var(--color-main-white);
      padding: 0.2rem;
      border-radius: 50%;
      @media only screen and (max-width: 24rem) {
        display: none;
      }
    }
  }

  &__btn {
    // display: block;
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 1.2rem;
    @media only screen and (max-width: 24rem) {
      margin: 0;
      text-align: center;
      background-color: var(--color-secondary);
      color: var(--color-main-white);
      justify-content: center;
    }
  }
}
.resources {
  margin: 0 50px;
  list-style: none;
  display: grid;
  grid-gap: 3rem 7rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));

  // &__item {
  //   p {
  //     width: 70%;
  //   }
  // }
  @media only screen and (max-width: 24rem) {
  }
}
.logo {
  height: 4rem;
  width: 4rem;
}

.section {
  figure {
    margin: 3rem 0 3rem 0;
  }

  h2 {
    margin: 0 0 7rem 0;
  }
  figure,
  h2 {
    width: 100%;
    display: flex;
    justify-content: center;
    text-transform: uppercase;

    svg {
      width: 7rem;
      height: 7rem;
      fill: var(--color-secondary-dark);
    }
  }
}

.added {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 99999;
  background: white;
  margin: 0;
  padding: 2rem;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.301);
  @media only screen and (max-width: 24rem) {
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    padding: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
  }
}

#html {
  margin-top: 7rem;
  // @media only screen and (max-width: 66rem) {
  //   margin-top: 12rem;
  // }
  // @media only screen and (max-width: 58rem) {
  //   margin-top: 12rem;
  // }
  // @media only screen and (max-width: 39rem) {
  //   margin-top: 20rem;
  // }
  // @media only screen and (max-width: 25rem) {
  //   margin-top: 30rem;
  // }
}
</style>
