
// 创建一个组件button
const ButtonCounter = {
  name: 'button-counter',
  props: ['count'],
  methods: {
    handleClick () {
      this.$emit('change', this.count + 1)
    }
  },
  render () {
    return <button onClick={this.handleClick}>数量 {this.count}+</button>
  }
}

export default {
  name: 'demo',
  data () {
    return {
      text: 'hello 纸没了飞机',
      inputText: '我吃了',
      count: 0,
      isGreen: false,
      isYellow: true
    }
  },
  props: {
    msg: String
  },
  watch: {},
  methods: {
    onChange (val) {
      this.count = val
    }
  },
  render () {
    // const {text,inputText,count} = this //通过解构，下方return片段中就不需要this
    return (
      <div>
        <h3 class="colorRed">内容</h3>
        <p style="color:blue">hello, I am Gopal</p>
        <p>动态值: {this.count}</p>
        <p style={this.isGreen ? 'color:green' : 'color:orange'}>{this.text}</p>
        <p style={this.isYellow ? 'color:yellow' : 'color:purple'}>hello {this.msg}</p>
        <input />
        <ButtonCounter
          style={{ marginTop: '10px' }}
          count={this.count}
          type="button"
          onChange={this.onChange}
        />
      </div>
    )
  }
}
