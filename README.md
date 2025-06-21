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

# Config
firebase functions:config:get
firebase functions:config:get > .runtimeconfig.json
firebase functions:config:set configuration.MY_VAR='MY_VALUE'
```

## References
- [Firebase cloud functions](https://firebase.google.com/docs/functions/get-started)
- [Typescript functions](https://firebase.google.com/docs/functions/typescript)