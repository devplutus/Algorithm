function solution(new_id) {
  new_id = new_id
      .toLowerCase() // 1
      .replace(/[^a-z0-9\-\_\.]/ig, '') // 2
      .replace(/\.+/ig, '.') // 3
  
  // 4
  if (new_id[0] === '.') {
      new_id = new_id.substr(1)
  }
  if (new_id[new_id.length-1] === '.') {
      new_id = new_id.substr(0, new_id.length-1)
  }
  
  // 5
  if (!new_id) new_id = 'a'
  
  // 6
  if (new_id.length >= 16) {
      new_id = new_id.substr(0, 15)
      if (new_id[new_id.length-1] === '.') {
          new_id = new_id.substr(0, new_id.length-1)
      }   
  }
  
  // 7
  if (new_id.length <= 2) {
      while (new_id.length !== 3) {
          new_id += new_id[new_id.length-1]
      }
  }
  
  return new_id;
}