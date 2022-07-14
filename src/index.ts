import express from 'express'
import diaryRouter  from './routes/diaries'
const app = express()
app.use(express.json()) //Middleware para que los datos sean enviados en formato json

const PORT=3000

app.get('/ping', (_req, res) => {
    console.log('someone pinged Here '+ new Date().toLocaleDateString())
    res.send('Pong')
})
app.use('/api/diaries', diaryRouter)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})