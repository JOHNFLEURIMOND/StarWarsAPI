# :checkered_flag:What It Looks Like :checkered_flag:: 

# My Awesome Project
MBTA Schedule App
# How It's Made :nut_and_bolt:🔨 :hammer::wrench::
This is a web application that shows live Commuter Rail departure board. It should hopefully be pretty straightforward. The application should show the upcoming departures at North and South stations, the train destinations, the departure times, the track numbers, and the boarding status (e.g. 'Boarding', 'All Aboard', 'Delayed'). The instructions for where to find the real-time data can be found here: https://www.mbta.com/developers/v3-api.

I used Typescript, React, Emotion.js, Semantic ui, Webpack, Babel

## Optimizations.
I would like to go ahead and show you what I did with the MBTA api provided and also with an updated api that shows I can deal with api's.

In `App.tsx` located in `assets` folder, I set up react router so there was routes, to homepage, schedule page and about us page. When I got this question I was super estatic because I have dealt with JSON API alot and thought this would be fairly easy but when I pulled the data from `/routes` & `alerts` I noticed I couldn't render url `predictions`. I thought it had to do with my api key maybe instead of doing it local state, maybe I should use `redux-bees` or `json-redux-json` but those frameworks cause more diffculty too. So I went the old fashion way with React.js and Made a call from the front-end using Axios. I was able to pull down the data but if I wanted to render `direction_id` property or `departure_time`  it just wouldn't render. Usually when dealing with json api's 

I just wanted to see what information I can get back from the data object, so I made interface to describe the requirements of having properties departure_time that is a string, direction_id that is a string, userId is a number. Since I know I need to have upcoming departures at North and South stations, the train destinations, the departure times, the track numbers, and the boarding status (e.g. 'Boarding', 'All Aboard', 'Delayed'). I started off looking at routes

 ```
    interface MBTASchedule {
    userId: number;
    direction_id: string;
    departure_time: string;
  }
```

Create schedulePropsvariable that will hold the state for the posts that will be filled with data later on after retrieving them from the API. 
  
`const scheduleProps: MBTASchedule[] = [];`


Use React Hooks to initialize the state thats handling the data which I wrote a interface and a prop to handle the data coming in.



```

const [schedule, setschedule]: [ MBTASchedule[], 
(posts: MBTASchedule[]) => void
  ] = useState(scheduleProps);
  console.log(setschedule);
  useEffect(() => {
    getMBTAschedule();
  }, []);
```

and with axios, I used the get method and pass it the endpoint url to the api and as well pass it a second object that has the properties headers so I can use my api key that was added to Custom Environment Variable.


```
  const getMBTAschedule = async () => {
    axios
      .get("https://api-v3.mbta.com/predictions", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-apikey": process.env.api_key,
        },
      })
      .then((result) => {
        result.data;
      });
  };
  ```


once the data is fetched it is rendered in a div with the className of schedule-container, so I can map thru my data object `schedule` and render the properties initialized in the interface described above.


```
<div className="schedule-container">
     {schedule.map((schedule) => (
      <div>
        <h5 className="info-item">{schedule.userId}</h5>
         <h5 className="info-item">{schedule.direction_id}</h5>
         <h5 className="info-item">{schedule.departure_time}</h5>
      </div>
      ))}
    </div>
```

It ended up not working, I tried using another api just to see if it was my code that wasn't working but it worked perfectly fine. In the `fetch.tsx` file I used a dummy api called `jsonplaceholder.com`.

I just had to change the interface and the information I was mapping thru and it worked.

 ```
 interface MBTASchedule {
    userId: number;
    id?: number;
    title: string;
    body: string;
  }
```

```
<div className="user-container">
    {schedule.map(schedule => (
      <div key={schedule.id}>
         <h5 className="info-item">{schedule.userId}</h5>
        <h5 className="info-item">{schedule.title}</h5>
        <h5 className="info-item">{schedule.body}</h5>
       </div>
     ))}
  </div>
```

But then come to find out I needed to update the a query parameter url route for `/predictions`, but even when placing the url `axios.get("https://api-v3.mbta.com/predictions")` that alone didn't work, I tried to config it via the json api `fetching-includes` docs but that was super diffcult to figure what paramaters to put where without an example. Using the example on MBTA swagger route GUI, it gives you a curl get route `https://api-v3.mbta.com/predictions?page%5Boffset%5D=2&page%5Blimit%5D=2&sort=departure_time&filter%5Bdirection_id%5D=0&filter%5Broute_type%5D=2`

But even with the best practice example it was hard pulling the data down like I have with other API's. The best pre


```{"errors":[{"code":"rate_limited","detail":"You have exceeded your allowed usage rate. Visit https://api-v3.mbta.com/ to register or to increase your limit.","source":{"parameter":"api_key"},"status":"429"}],"jsonapi":{"version":"1.0"}}```


```
const getMBTAschedule = async () => {
    axios
      .get("https://api-v3.mbta.com/routes", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "parameter": process.env.api_key,
        },
      })
      .then((result) => {
        result.data;
      });
};
```

and this way

```
const getMBTAschedule = async () => {
    axios
      .get("https://api-v3.mbta.com/routes", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-apikey": process.env.api_key,
        },
      })
      .then((result) => {
        result.data;
      });
  };
```

because the documentation said place it in the header

https://api-v3.mbta.com/docs/swagger/swagger.json





# Portfolio :open_file_folder::

** :computer:   WEBSITE:** [John Fleurimond](http://johnfleurimond.com)

# How To Get It Started :arrow_forward: :

## Installation

1. Clone repo
2. run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm run build`

then

### `npm run serve`

to get the app started.


Runs the app in the development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
### `npm run prettier`
This corrects the format.
