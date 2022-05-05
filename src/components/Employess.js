import Employee from "./Employee";

function Employees() {

    const employees = [
        {
        "createdAt": "2022-05-04T18:16:44.417Z",
        "name": "name 1",
        "job": "job 1",
        "surname": "surname 1",
        "experience": 22,
        "alive": true,
        "id": "1"
        },
        {
        "createdAt": "2022-05-04T18:20:56.224Z",
        "name": "name 2",
        "job": "job 2",
        "surname": "surname 2",
        "experience": 55,
        "alive": false,
        "id": "2"
        },
        {
        "createdAt": "2022-05-04T14:07:50.054Z",
        "name": "name 3",
        "job": "job 3",
        "surname": "surname 3",
        "experience": 88,
        "alive": false,
        "id": "3"
        },
        {
        "createdAt": "2022-05-04T13:47:42.742Z",
        "name": "name 4",
        "job": "job 4",
        "surname": "surname 4",
        "experience": 23,
        "alive": false,
        "id": "4"
        },
        {
        "createdAt": "2022-05-04T13:37:46.437Z",
        "name": "name 5",
        "job": "job 5",
        "surname": "surname 5",
        "experience": 79,
        "alive": true,
        "id": "5"
        },
        {
        "createdAt": "2022-05-05T04:36:19.200Z",
        "name": "name 6",
        "job": "job 6",
        "surname": "surname 6",
        "experience": 17,
        "alive": false,
        "id": "6"
        },
        {
        "createdAt": "2022-05-04T10:21:02.181Z",
        "name": "name 7",
        "job": "job 7",
        "surname": "surname 7",
        "experience": 46,
        "alive": true,
        "id": "7"
        },
        {
        "createdAt": "2022-05-04T19:58:22.337Z",
        "name": "name 8",
        "job": "job 8",
        "surname": "surname 8",
        "experience": 95,
        "alive": false,
        "id": "8"
        },
        {
        "createdAt": "2022-05-04T14:52:37.911Z",
        "name": "name 9",
        "job": "job 9",
        "surname": "surname 9",
        "experience": 10,
        "alive": false,
        "id": "9"
        },
        {
        "createdAt": "2022-05-04T11:22:21.411Z",
        "name": "name 10",
        "job": "job 10",
        "surname": "surname 10",
        "experience": 98,
        "alive": false,
        "id": "10"
        },
        {
        "createdAt": "2022-05-05T03:09:22.867Z",
        "name": "name 11",
        "job": "job 11",
        "surname": "surname 11",
        "experience": 14,
        "alive": true,
        "id": "11"
        },
        {
        "createdAt": "2022-05-04T20:44:02.771Z",
        "name": "name 12",
        "job": "job 12",
        "surname": "surname 12",
        "experience": 48,
        "alive": false,
        "id": "12"
        },
        {
        "createdAt": "2022-05-04T11:05:33.040Z",
        "name": "name 13",
        "job": "job 13",
        "surname": "surname 13",
        "experience": 92,
        "alive": true,
        "id": "13"
        },
        {
        "createdAt": "2022-05-05T02:15:40.224Z",
        "name": "name 14",
        "job": "job 14",
        "surname": "surname 14",
        "experience": 43,
        "alive": true,
        "id": "14"
        },
        {
        "createdAt": "2022-05-05T06:11:44.440Z",
        "name": "name 15",
        "job": "job 15",
        "surname": "surname 15",
        "experience": 73,
        "alive": false,
        "id": "15"
        },
        {
        "createdAt": "2022-05-04T14:43:13.839Z",
        "name": "name 16",
        "job": "job 16",
        "surname": "surname 16",
        "experience": 97,
        "alive": false,
        "id": "16"
        },
        {
        "createdAt": "2022-05-05T03:54:02.472Z",
        "name": "name 17",
        "job": "job 17",
        "surname": "surname 17",
        "experience": 39,
        "alive": false,
        "id": "17"
        }
    ]

    return (
        <div className="employees">
            {employees.map((employee) => (
                <Employee 
                    name={employee.name}
                    surname={employee.surname}
                    job={employee.job}
                    experience={employee.experience}
                />
            ))}
        </div>
    );
}

export default Employees;