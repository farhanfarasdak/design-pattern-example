const handleSubmitPost = async () => {
  const content = document.getElementById("post-content").value
  const URL_CREATE_POST = 'http://localhost:3000/api/post'
  const resp = await fetch(URL_CREATE_POST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: content
    })
  })
  if (resp.status == 200){
    alert('SUCCESS INPUT DATA')
  } else {
    alert('SUCCESS INPUT DATA')
  }
  location.reload()
}