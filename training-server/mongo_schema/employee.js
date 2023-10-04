const mongoose = require('mongoose')
const validator = require('validator')

const  employeeSchema = new mongoose.Schema({

	_id: String,


empId: { 
	 	 type : Number, 
 	 	 unique : true, 
 	 	 required : true, 
 	 	 trim: true, 
}, 
 
name: { 
	 	 type : String, 
 	 	 trim: true, 
}, 

fullName : {
	first: { type: String, required: true, trim: true},
	last: { type: String, required: true, trim: true}
},
 
dept: { 
	 	 type : String, 
 	 	 trim: true, 
}, 
content: [
	{ name: String,
		quantity: String,}
],
 
address: { 
	type : String, 
	 trim: true, 
}, 

}, { _id: false })

var contentSchema = new mongoose.Schema({
    name: String,
    quantity: String,
});

const saveEmployee = async () => 
{
	let contentArr = []
	contentArr.push({name : "Inner" , quantity: "ggggg"});
	console.log(contentArr)
    const emp = new Employee({_id:"3333333", empId : 3333333 , name: "ggggg", fullName: {first:"FN", last:"LN"},  dept: 'mec',
	content	: contentArr
	});

    emp.save().then(() => { 
        console.log(emp)

    }).catch((error) => {
        console.log('Error ==== ', error)
    })
}
const Employee = mongoose.model('employee', employeeSchema)
const Content = mongoose.model('content', contentSchema)

saveEmployee()