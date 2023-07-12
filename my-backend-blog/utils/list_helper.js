const totalLikes = (blogs) => {
  let sum = 0
  blogs.forEach((blog) => {
    sum += blog.likes
  })
  return sum
}

const favoriteBlog = (blogs) => {
  let mostLikes = 0
  let fblog
  blogs.forEach((blog) => {
    if (blog.likes > mostLikes) {
      mostLikes = blog.likes
      fblog = blog
      console.log('blog.likes, mostLikes',blog.likes, mostLikes)
    }
  })
  console.log('fblog',fblog)
  return fblog
}

const mostBlogs = (blogs) => {
  const authorObject = blogs.reduce((obj, blog) => {
    if (obj.hasOwnProperty(blog.author)) {
      obj[blog.author] += 1
    } else {
      obj[blog.author] = 1
    }
    return obj
  }, {})
  console.log(authorObject)
  let maxBlogs = 0
  let maxAuthor = ''
  for (const author in authorObject) {
    if (authorObject[author] > maxBlogs) {
      maxBlogs = authorObject[author]
      maxAuthor = author
    }
  }
  console.log(maxAuthor)
  return maxAuthor
}

const mostLikes = (blogs) => {
  const authorObject = blogs.reduce((obj, blog) => {
    if (obj.hasOwnProperty(blog.author)) {
      obj[blog.author] += blog.likes
    } else {
      obj[blog.author] = blog.likes
    }
    return obj
  }, {})
  console.log(authorObject)
  let maxLikes = 0
  let maxAuthor = ''
  for (const author in authorObject) {
    if (authorObject[author] > maxLikes) {
      maxLikes = authorObject[author]
      maxAuthor = author
    }
  }
  return maxAuthor
}


module.exports = {
  totalLikes,
  favoriteBlog,
  mostLikes,
  mostBlogs
}