import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-app-polyfill/ie11";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Characters from "./src/Characters/Characters";

const Homepage = (): JSX.Element => {
  interface MBTASchedule {
    userId: number;
    id?: number;
    title: string;
    body: string;
  }

  const scheduleProps: MBTASchedule[] = [];

  const [schedule, setschedule]: [
    MBTASchedule[],
    (posts: MBTASchedule[]) => void
  ] = useState(scheduleProps);
  console.log(setschedule);

  useEffect(() => {
    getMBTAschedule();
  }, []);

  const getMBTAschedule = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "6f0d6763af7e41d28ff96c6fe6ed6673",
        },
      })
      .then((result) => {
        setschedule(result.data);
      });
  };
  console.log(setschedule);
  return (
    <div>

      <div>
        <pre>
          <code>
            <div className="App">
              <header className="App-header">
                <h2>MBTA Schedule</h2>
              </header>
              <div className="user-container">
                {schedule.map((schedule) => (
                  <div key={schedule.id}>
                    <h5 className="info-item">{schedule.userId}</h5>
                    <h5 className="info-item">{schedule.title}</h5>
                    <h5 className="info-item">{schedule.body}</h5>
                  </div>
                ))}
              </div>
            </div>
          </code>
        </pre>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/Characters" component={Characters} />
      </Switch>
    </Router>
  );
};

export default App;
