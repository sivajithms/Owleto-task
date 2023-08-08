### Installation

1. Clone the repository:

```bash
git clone https://github.com/sivajithms/Owleto-task.git
```
Navigate to the project directory: 
```bash
cd Owleto-task
```
Install dependencies:
```bash
npm i
```

Usage

Start the application:
```bash
node index.js
```

Access the CRUD endpoints:
Create a new student: POST `/students/`
Read all students: GET `/students`
Update a student: PUT `/students/`
Delete a student: DELETE `/students`

API Endpoints

Create a Student
URL: `/students/`
Method: `POST`
Request Body:
```bash
{
  "rno": 101,
  "name": "John Doe",
  "mark": 85.5
}
```
Response: Success message or error details.

Read All Students
URL: `/students`
Method: `GET`
Response: List of student records or error details.

Update a Student
URL: `/students/`
Method: `put`
Request Body:
```bash
{
  "rno": 101,
  "name": "Updated Name",
  "mark": 90
}
```
Response: Success message or error details.

Delete a Student
URL: `/students/`
Method: `DELETE`
Request Body:
```bash
{
  "rno": 101
}
```

Response: Success message or error details.

Contributing
Contributions are welcome! Feel free to submit pull requests.
