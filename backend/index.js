const server = require('./server')
const db = require('./models/index')

db.sequelize.sync({alter: true})
  .then(()=>{
    server.listen(3000, ()=>{
        console.log('Server listening on port 3000'); 
        
    })
  })
  .catch(err=> console.log('Error al sincronizar Base de datos',err.message))

