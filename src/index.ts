import app from './App'

const port = process.env.PORT || 3000

app.listen(port, (err) => {
  if (err) {
    return console.error(err) // eslint-disable-line no-console
  }

  return console.log(`Server is listening on ${port}`) // eslint-disable-line no-console
})
