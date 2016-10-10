"use strict";

//const Joi = require('joi');

function normalizeResponse(data, error){
	return {
		data: data,
		error: error
	};
}
module.exports = function(server) {
	

	server.route({
	    method: 'GET',
	    path: '/api/getUserData',
	    handler: function (request, reply) {
	        reply(normalizeResponse({name : "Ratul"}));
	    }
	    // ,
	    // config: {
	    //     validate: {
	    //   		//params: {
			  //   //     name: Joi.number()
			  //   //         .required()
			  //   //         .description('id of object you want to get').label('First Name'),
			  //   // },
			  //   params: function (value, options, next){
			    	
			  //   	if(value.user.length <3) {
			  //   		next({ reason: "User Name Key "});
			  //   	}
			  //   	else{
			  //   		next(null, value);
			  //   	}
			    	
			  //   },
			  //   failAction: function (request, reply, source, error) {
			  //   	console.log(error);
			  //   	reply();
			  //   }
			 
	    //     }
	    // }
	});

};

