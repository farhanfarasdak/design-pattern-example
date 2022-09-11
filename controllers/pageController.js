exports.postDashboard = async (req,res) => {
  const URL_GET_POSTS = 'http://localhost:3000/api/post'
  const resp = await fetch(URL_GET_POSTS)
  const data = await resp.json()
  res.render('post', { posts: data })
}