/* const mongoose = require('mongoose') 
const validator = require('validator') 
 
 let ObjectId = require('mongoose').Types.ObjectId; 
 
 const actorSchema = mongoose.Schema({ 
 
 	 firstName: { 
	 	 type : String, 
	 	 required : true, 
	 	 trim : true 
  	}, 
 
	 lastName: { 
	 	 type : String, 
	 	 required : true, 
	 	 trim : true 
  	}, 
 
	 age: { 
	 	 type : Number, 
	 	 trim : true 
  	}, 
 
	 isOld: { 
	 	 type : Boolean, 
	 	 trim : true 
  	}, 
 
	 testArray: [ { 
	 arr1: { 
	 	 type : String, 
	 	 required : true, 
	 	 trim : true 
  	}, 
 
	 arr2: { 
	 	 type : String, 
	 	 required : true, 
	 	 trim : true 
  	}, 
 
	 } ] , 
 
	 address: { 
	 addressLine1: { 
	 	 type : String, 
	 	 required : true, 
	 	 trim : true 
  	}, 
 
	 addressLine2: { 
	 	 type : String, 
	 	 required : true, 
	 	 trim : true 
  	}, 
 
	} 
 
 })  
  
 actorSchema.set('collection', 'actor'); 
 
 const Actor = mongoose.model('actor', actorSchema )

 
const dbSaveActor = async (actor) =>  
{ 
	console.log('Inside dbSaveActor = ', actor ) 

	const actorSave = new Actor(actor); 
    actorResp = await actorSave.save().catch((error) => { 
        console.log('Error', error) 
    }) 
	return actorResp;
} 
 
 
const findById = async (id) => 
{ 
	console.log('Inside findById') 
 
	const result = await Actor.findById(new ObjectId(id)) 
	.catch((error) => { 
		    console.log('Error === ', error) 
		}); 
	console.log(result); 
}  */

//findById("604efe8e13d1dc59a533f38f")

/* module.exports =
   {
    dbSaveActor,
   } */
const mongoose = require('mongoose')
const validator = require('validator')
var bcrypt = require('bcryptjs');

const actorSchema = mongoose.Schema({

    firstname: { 
        type : String,
        required : true,
        trim : true
    },
	lastname: { 
        type : String,
        required : true,
        trim : true
    },
   /*  password: { 
        type : String,
        required : true,
        trim : true
    }, */
    age: {
        type : Number, 
        validate(value) {
            if(value < 0) {
                throw new Error('Age cannot be below 0')
            }
        }
    },
	isOld: { 
		type : Boolean, 
		trim : true 
	}, 
	

    
})

const saveActor = async () => 
{
    const me = new Actor({firstname : 'raji' ,lastname:'b', age: 34, isOld:'true'});

    me.save().then(() => { 
        console.log(me)

    }).catch((error) => {
        console.log('Error', error)
    })
}

actorSchema.statics.findByName = async (name) => {
    const actor = await User.findOne({ name })

    if (!actor) {
        throw new Error('No User')
    }

    return actor
}

actorSchema.statics.findByAge = async (age) => {
    const actor = await Actor.find(age)
    .where('age').gt(age.age)

    if (!actor) {
        throw new Error('No User')
    }

    return actor
}





const myPassword = async () => {
    const password = 'hello'
    const hashPass = await bcrypt.hash(password, 8); 

    console.log('password = ', password)
    console.log('hashPass = ', hashPass)

    const isMatch = await bcrypt.compare(password, hashPass)
    console.log('IsMatch = ', isMatch)

}

actorSchema.pre('save', async function (next) {
    const actor = this

    if (actor.isModified('password')) {
        actor.password = await bcrypt.hash(actor.password, 8)
    }

    next()
})

//myPassword();

const Actor = mongoose.model('actor', actorSchema)

saveActor();
// const findByName = async (name) => 
// {
    
//     try {
//         const meUser = await User.findByName(name)

//         if (!meUser) {
//             throw new Error('No User')
//         }

//         return meUser;
//     } catch (e) {

//         console.error('Error = ', e)

//     }
// }


// findByName('Viv').then((newUser) => 
// {
//    // console.log('NewUser = ', newUser)

// })


// const findByAge = async (age) => 
// {
    
//     try {
//         const meUser = await User.findByAge({ age: age })

//         if (!meUser) {
//             throw new Error('No User')
//         }

//         return meUser;
//     } catch (e) {
//     }
// }

// findByAge(35).then((newUser) => 
// {
//     console.log('New Age User = ', newUser)

// })