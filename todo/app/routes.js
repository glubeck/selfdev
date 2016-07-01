var Todo = require('./models/todo');
var Character = require('./models/character');

module.exports = function(app) {

    // api ---------------------------------------------------------------------

    // create new character
    app.post('/api/character', function(req, res) {

            var character = new Character();
            console.log(req.body.name);
            character.name = req.body.name;
            character.level = req.body.level;
            character.race = req.body.race;
            character.alignment = req.body.alignment;
            character.strength = req.body.strength;
            character.dexterity = req.body.dexterity;
            character.constitution = req.body.constitution;
            character.intelligence = req.body.intelligence;
            character.wisdom = req.body.wisdom;
            character.charisma = req.body.charisma;

            character.save(function(err, character) {
                if (err)
                    res.send(err);

                res.status(201).json(character);
            });
    });

    //get all characters
    app.get('/api/character', function(req, res) {

        Character.find(function(err, characters) {

            if(err)
                res.send(err)

            res.json(characters);
        });
    });

    // get all todos
    app.get('/api/todos', function(req, res) {

        // use mongoose to get all todos in the database
        Todo.find(function(err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(todos); // return all todos in JSON format
        });
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text : req.body.text,
            done : false
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });

};