import patterns from './patterns'

patterns.forEach((p) => {
  const patternName = p.toString().match(/function (\w+)/)
  if (patternName?.length === 2) {
    console.log(
      `%c==== ${patternName[1]} ====`,
      'font: bold 1.3em/1 Arial; color: #ff6060;',
    )
  } else {
    console.log('---unknown-pattern---')
  }
  p()
})
