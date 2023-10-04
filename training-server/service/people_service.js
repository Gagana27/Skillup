const {dbSavePeople} = require('../mongo_schema/people')
const {dbSaveActor} = require('../mongo_schema/actor')


module.exports =
   {
      savePeople,
      saveActor
   }

async function savePeople (ctx) {
   console.log(ctx.req)
    ctx.res = dbSavePeople(ctx.req)
  }

  async function saveActor (ctx) {
   console.log(ctx.req)
    ctx.res = dbSaveActor(ctx.req)
  }