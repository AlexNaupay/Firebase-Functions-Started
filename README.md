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
# Deploy
firebase deploy --only functions  # All functions
firebase deploy --only functions:helloworld
firebase deploy --only functions:function1,functions:function2
firebase deploy --only functions:group-name

# Delete
firebase functions:delete helloworld
firebase functions:delete funtion1 funtion2

# Log and list
firebase functions:list
firebase functions:log
firebase functions:log --only function-name

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
firebase emulators:start # Look for firebase.json and functions/lib
firebase emulators:start --project project-app  # Or: firebase use <project-id>
```

## Config Env
```bash
# https://firebase.google.com/docs/functions/config-env?gen=2nd
# The environment variables from .env and project-specific .env files (if they exist) will be included in all deployed functions.
firebase use dev  # use .env .env.dev
firebase use prod  # use .env .env.prod

# When using a local Cloud Functions emulator,
# .env.local take precedence over .env and the project-specific .env file.

# Secrets
firebase functions:secrets:set MY_API_KEY
firebase functions:secrets:get MY_API_KEY
firebase functions:secrets:access MY_API_KEY
firebase functions:secrets:destroy SECRET_NAME
# Automatically clean up all secrets that aren't referenced by any of your functions
firebase functions:secrets:prune
```

## Be careful with
- Secrets values: [Secrets with emulators](https://firebase.google.com/docs/functions/config-env?gen=2nd#secrets_and_credentials_in_the_emulator)
- Tip: Create .secret.local in development
- Push notifications: With credentials of a current project (.firebaserc or --project in cli)


## Projects
```bash
firebase projects:list
firebase use <project-id | alias> # use project for commands
firebase use --add # to define a new project alias
firebase open 
firebase open functions # Abre la sección de Cloud Functions
```

## References
- [Firebase cloud functions](https://firebase.google.com/docs/functions/get-started)
- [Typescript functions](https://firebase.google.com/docs/functions/typescript)
- [Config env](https://firebase.google.com/docs/functions/config-env?gen=2nd)
- [Organize functions](https://firebase.google.com/docs/functions/organize-functions?gen=2nd)
- [Firebase Emulators](https://firebase.google.com/docs/emulator-suite)