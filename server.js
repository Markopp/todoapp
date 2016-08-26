var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [{
	id: 1,
	description: 'Go outside sometimes',
	completed: false
}, {
	id:2,
	description: 'Get dishes done',
	completed: false
}, {
	id: 3,
	description: 'Get done with praksa',
	completed: false
}];

app.get('/', function(req, res) {
	res.send('Todo API Root');
	res.send('New line');
});

app.get('/todos', function(req, res) {
	res.json(todos);
})

app.get('/todos/:id', function(req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;
	//res.json(todos[req.params.id]);

	//var todos = req.params.id;

	todos.forEach(function (todo) {
		if (todoId == todo.id) {
			matchedTodo = todo;
		}
	})

	if(matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
});

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});