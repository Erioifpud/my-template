import * as Koa from 'koa'
import * as Router from 'koa-router'

const app = new Koa()
const router = new Router()
router.get('/', (ctx) => {
  ctx.body = 'Hello world!'
})
app.use(router.routes())

app.listen(4444)