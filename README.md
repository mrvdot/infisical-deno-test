# Overview

To test:

1. Run `npm install` to get the dependencies
2. Add your Infisical Client ID and Secret to `supabase/.env` (copy from `supabase/.env.example` for ease)
3. Run `supabase start` (or `npm run supabase start` if you don't have local `node_modules/.bin` on your `$PATH`)
4. Run `supabase functions serve --no-verify-jwt` to start serving the functions locally
5. Use the curl command in the comment at the bottom of `supabase/functions/infisical-test/index.ts` to hit the endpoint
6. You should see logs in the terminal window were you served the functions

