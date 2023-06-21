const arr = ['TypeScript','JavaScript','小程序','less','sass' ];//显示的文本
const dom = document.getElementById('box')
let j = 0; //从数组第一个开始展示
// 递归函数
const func =(j) => {
  if(j < arr.length){ // 当达到数组长度时，就从头开始继续
    const item = arr[j]
    const itemLen = item === '小程序' ? 6 : item.length; // 汉字是占两个ch
    dom.innerHTML = item; // 显示文字
    for (var i = 0, len = itemLen; i < len; i++) { // 添加文本效果
      var textLen = dom.textContent.length, s = dom.style;
      s.animationTimingFunction = "steps(" + textLen + "),steps(1)";; //动态设置steps
      s.animationName = `typing${itemLen}`; //文本长度不同，展示的宽度就不同，所以需要动态设置
      s.animationDuration = `${itemLen/2}s,0.5s`; //这儿设置速度
    }
    setTimeout(() => {
      func(j + 1)
    },itemLen*500) //这儿和上面的animationDuration速度一致，只不过这儿是毫秒，所以要乘以1000
    
  }else{
    func(0); //就从头开始继续
  }
}
func(j);


