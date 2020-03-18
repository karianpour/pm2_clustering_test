const fastify = require('fastify')({
  // logger: true
})
const path = require('path')
 
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
})
 
fastify.get('/file', function (req, reply) {
  reply.sendFile('file.html', __dirname);
})

fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200)
  return { hello: 'world' }
})

fastify.get('/calc', async (request, reply) => {
  let r = 0;
  for(let i = 1; i <= 50000000; i++){
    r += i;
  }
  reply.type('application/json').code(200)  
  return { hello: 'calculated', r }
})

 
fastify.listen(3000, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})