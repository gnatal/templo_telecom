import { Router } from 'express'
import { getUsersData } from '../Controllers/csvDatabase'


const routes = Router()

routes.get('/', getUsersData);

routes.get('/healt', (req, res) => {
  console.log('app is working')
  return res.send('app is working').status(200)
})

export default routes
