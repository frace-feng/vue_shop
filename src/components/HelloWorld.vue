<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>value: {{ value }}</li>
      <li>checked: {{ checked }}</li>
    </ul>
    <ul>
      <li><button @click="show = !show">v-show VS v-if</button></li>
      <li v-show="show">v-show:</li>
      <li v-if="show">v-if:</li>
    </ul>
    <ul>
      <li>
        <button @click="changePerson">
          改变person深层值，看看deep属性能检测到什么层次
        </button>
      </li>
      <li>
        <button @click="changePerson2">
          改变person深层值，看看deep属性能检测到什么层次
        </button>
      </li>
      <li>computed:{{ computedA }}</li>
      <li>watch:{{ watchA }}</li>
    </ul>
    <ul>
      index作为key
      <li><button @click="()=>list.splice(0,1)">移除第一个</button></li>
      <item v-for="(i,index) in list" :key="index" :value="i"></item>
      <itemA  />
      <li>结果是移除了最后一个</li>
    </ul>
    <ul>
      <li>---用index----</li>
      <li>
        <button @click="() => list2.reverse()">第一个和第三个换位置了</button>
      </li>
      <li v-for="(i,index) in list2" :key="index">item{{ i }}</li>
      <li>key还是index得顺序，num值变成了逆序得，所以在上面得移除操作中出现了问题</li>
    </ul>
    <ul>

      <li>---用id---</li>
      <li>
        <button @click="() => list3.reverse()">第一个和第三个换位置了</button>
      </li>
      <li v-for="item in list3" :key="item.id">item{{ item.num }}</li>
      <li>key和num是一一对应着得，只是循序发生了变化</li>
    </ul>
  </div>
</template>

<script>
import item from './item.vue'
import itemA from './itemA.vue'
export default {
  name: 'HelloWorld',
  components: { item, itemA },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    msg: String,
    checked: {
      type: String,
      default: '1111'
    },
    value: String
  },
  data () {
    return {
      show: true,
      watchA: '123',
      person: {
        school: {
          name: '七宝中学',
          address: '上海',
          subject: {
            names: ['数学', '英语']
          }
        },
        name: 'wang',
        age: 12
      },
      list: ['A', 'B', 'C', 'D'],
      list2: ['A', 'B', 'C'],
      list3: [
        {
          id: 177,
          num: 1
        },
        {
          id: 178,
          num: 2
        },
        {
          id: 179,
          num: 3
        }
      ]
    }
  },
  computed: {
    computedA () {
      return this.show ? '为真' : '为假'
    }
  },
  watch: {
    person: {
      immediate: true,
      deep: true,
      handler (newVal, oldVal) {
        this.watchA = newVal
      }
    }
  },
  methods: {
    changePerson () {
      this.person.school.name = '新名字' + Math.random()
    },
    changePerson2 () {
      this.person.school.subject.names.unshift(Math.random())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
