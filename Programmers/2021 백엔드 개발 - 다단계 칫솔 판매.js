class Person {
  constructor(name) {
      this.name = name
      this.amount = 0
      this.referral = null
  }
}

function solution(enroll, referral, seller, amount) {
  const tree = {}
  
  enroll.forEach(name => tree[name] = new Person(name))
  
  referral.forEach((name, i) => {
      if (name !== '-') {
          tree[enroll[i]].referral = tree[name]   
      }
  })
  
  seller.forEach((name, i) => {
      if (tree[name]) {
          let current = tree[name]
          let benefit = amount[i] * 100
          while (current) {
              const rest = benefit * 0.1 < 1 ? 0 : parseInt(benefit * 0.1)
              current.amount += benefit - rest
              benefit = rest
              current = current.referral
          }   
      }
  })
  
  return enroll.map(name => tree[name].amount)
}