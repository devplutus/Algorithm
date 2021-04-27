function solution(word, pages) {
  word = word.toLowerCase()
  const scores = {}

  pages.forEach((page, i) => {
    const url = getPageURL(page)
    
    if (!scores[url]) {
      scores[url] = {
        index: i,
        score: 0,
        sum: 0,
        external: [],
      }
    }
    let body = getPageBody(page)
    const anchors = getLinkTags(page)
    
    anchors.forEach(a => {
      scores[url].external.push(getLinkOfAnchor(a))
    })

    body = splitWord(body)

    scores[url].score = findKeyword(body, word).length

    scores[url].sum = scores[url].score
  })

  Object.keys(scores).forEach(key => {
    scores[key].external.forEach(eKey => {
      if (scores[eKey]) {
        scores[eKey].sum += scores[key].score / scores[key].external.length
      }
    })
  })
    
  const answer = Object.values(scores).sort((a, b) => {
    if (a.sum === b.sum) {
      return a.index - b.index
    } else {
      return b.sum - a.sum
    }
  })
  
  return answer[0].index
}

function getPageBody(text) {
  return text.split('<body>')[1].split('</body>')[0].trim()
}

function getPageURL(text) {
  return text.match(/<meta property="og:url" content="(\S+)"\/>/g)[0].split('https://')[1].split('\"')[0]
}

function getLinkTags(text) {
  return text.match(/<a (\S+)>/g) || []
}

function getLinkOfAnchor(anchor) {
  return anchor.match(/href="(\S+)"/g)[0].split("https://")[1].replace(/[\"\>\\]/g, '')
}

function splitWord(body) {
  // return body.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]|[0-9]/ig, ' ')
    return body.replace(/[0-9]/ig, ' ')
}

function findKeyword(body, keyword) {
    return body.match(new RegExp(`\\b(i?)(${keyword})\\b`, "ig")) || []
}