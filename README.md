# Streetbees Full Stack Engineer (Ruby) position

##Instructions

The two apps run inside docker containers.

In one terminal
```sh
cd api
docker-compose up
```

In a second terminal
```sh
cd frontend
docker-compose up
```

You will have to run the below command to create the database schema
```sh
cd api
docker-compose run bundle exec rake db:setup
```

Then connect the frontend container to the api_default network
```sh
docker network connect api_default frontend_front_end_1
```

Visit localhost:3000 in your browser to view the app.

You can search by character in the search box, selecting a character
will return comics that feature that character. You can paginate
throught the results with the next and previous buttons.

##Running specs for front end
```sh
docker-compose run --rm front_end npm run test
```
##Running specs for api
```sh
docker-compose run --rm api bundle exec rake spec
```

##A request

I'd love your feedback on my effort!

