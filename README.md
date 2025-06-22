# Firebase Cloud Functions
```bash
npm install -g firebase-tools  # firebase command

firebase init functions # On your project init functions
npm install  # pnpm errors

# On functions directory
npm run build
firebase emulators:start  # (build previously) . OR
firebase functions:shell

npm run serve  # build and start emulator

# Recommended: build:watch, serve in another terminal 
npm run build:watch
npm run dev # npm run serve 
# chrome://inspect/#devices  # use debugger con code
```

## Functions commands
```bash
firebase deploy --only functions  # All functions
firebase deploy --only functions:helloworld
firebase functions:delete helloworld
firebase functions:log

# Functions config (Legacy)
# Functions provides methods for managing environment configuration variables
firebase functions:config:get
firebase functions:config:get > .runtimeconfig.json
firebase functions:config:set conf_key.var_key='A value'  # must have a 2-part key
firebase functions:config:unset <path>
```

## Emulators settings
```bash
firebase init emulators
```

## Config Env
```bash
# https://firebase.google.com/docs/functions/config-env?gen=2nd
# The environment variables from .env and project-specific .env files (if they exist) will be included in all deployed functions.
firebase use dev  # use .env .env.dev
firebase use prod  # use .env .env.prod

# When using a local Cloud Functions emulator,
# .env.local take precedence over .env and the project-specific .env file.
```

## References
- [Firebase cloud functions](https://firebase.google.com/docs/functions/get-started)
- [Typescript functions](https://firebase.google.com/docs/functions/typescript)
- [Config env](https://firebase.google.com/docs/functions/config-env?gen=2nd)