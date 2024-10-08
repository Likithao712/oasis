body {
    font-family: 'Arial', sans-serif;
    background-color: #2C3E50;
    color: white;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background-color: #34495E;
    padding: 20px;
    border-radius: 10px;
    width: 600px;
}

h1 {
    text-align: center;
}

.todo-form {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

input[type="text"], textarea {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #29b976;
    font-size: 1rem;
}

textarea {
    height: 100px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #27AE60;
    color: white;
    font-size: 1rem;
    cursor: pointer;
}

button:hover {
    background-color: #2ECC71;
}

.todo-list table {
    width: 100%;
    border-collapse: collapse;
}

.todo-list th, .todo-list td {
    padding: 10px;
    border: 1px solid #2980B9;
}

.todo-list th {
    background-color: #2980B9;
}

.todo-list td {
    background-color: #ECF0F1;
    color: #2C3E50;
}

.todo-list .deleteBtn {
    background-color: #E74C3C;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.todo-list .deleteBtn:hover {
    background-color: #C0392B;
