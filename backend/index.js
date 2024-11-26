const server = require('./server')
const db = require('./models/index')

db.sequelize.sync({alter: true})
  .then(()=>{
    server.listen(3001, ()=>{
        console.log('Serve'); 
        
    })
  })
  .catch(err=> console.log('Error al sincronizar Base de datos',err.message))

