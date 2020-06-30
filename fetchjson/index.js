"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var URL = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(URL).then(function (_a) {
    var data = _a.data;
    var _b = data, id = _b.id, title = _b.title, completed = _b.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n  The todo with ID: " + id + "\n  Has a title of: " + title + "\n  Is it finished? " + completed + "\n  ");
};
