function solution(s) {
  const eng = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine'
  ]
  eng.forEach((e, i) => {
      s = s.replace(new RegExp(`${e}`, 'gi'), i)
  })
  return parseInt(s);
}