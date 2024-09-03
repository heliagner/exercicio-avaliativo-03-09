const express = require("express");
const student_controller = require("./routes/student.js");
const rental_controller = require("./routes/rental.js");
const book_controller = require("./routes/book.js");
const app = express();
const port = 1996;

app.use(express.json());

app.use("/book", book_controller);

app.use("/student", student_controller);

app.use("/rental", rental_controller);

app.listen(port, () => {
    console.log("Server is running in " + port + " port")
});