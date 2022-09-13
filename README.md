# Supabase Gotrue Custom Auth Provider

Custom auth provider by forwarding SMS payload (to and body) to the user-defined REST endpoint.

Let's say the endpoint is "http://localhost:3000/send", gotrue would make a POST request to that endpoint and pass `to` and `body` parameter through request body.

### How

#### Setup Gotrue
Read official Documentation https://github.com/supabase/gotrue/

- `git clone https://github.com/novanda1/gotrue.git` 
- `cd gotrue`
- `cp env.example .env`
- On .env file specify SMTP-related config, required to make Gotrue running.
- Set `GOTRUE_SMS_CUSTOM_URL` to http://localhost:3000/send.
- Set `GOTRUE_SMS_CUSTOM_SECRET` to "supersecret".
- Run database `docker-compose -f docker-compose-dev.yml up postgres -d`
- `make build`
- Run Gotrue `./gotrue` or if you'd like to run on development mode use [`air`](https://github.com/cosmtrek/air)

#### Setup custom endpoint to work
This repository's purpose is to demonstrate the simple PoC to handle Custom Auth Provider from [my fork](https://github.com/novanda1/gotrue) on [this commit](https://github.com/novanda1/gotrue/commit/7c2f76bf84a45e98c4f5ff9caf87bc6f5c2cd55b).

Follow this step to run the project.

- `git clone https://github.com/novanda1/gotrue-custom-auth`
- `cd gotrue-custom-auth`
- `yarn && node app.js`
