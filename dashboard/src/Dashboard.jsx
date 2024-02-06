import * as React from "react";
// import "./index.css";

export default function Dashboard() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://dummy.restapiexample.com/api/v1/employees");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => { 
    f();
  }, []);
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.employee_name}</strong>
                </p>
                <p>{user.employee_salary}</p>
                {/* <img key={user.avatar} src={user.avatar} /> */}
              </div>
            );
          })}
      </div>

    
    </div>
  );
}
