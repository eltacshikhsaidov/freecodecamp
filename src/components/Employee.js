function Employee ({name, job, surname, experience}) {
    return (
        <div className="employee">
            <h1>Name: <span>{name}</span></h1>
            <h2>Surname: <span>{surname}</span></h2>
            <h2>Job: <span>{job}</span></h2>
            <h2>Experience: <span>{experience}</span></h2>
        </div>
    );
}

export default Employee;