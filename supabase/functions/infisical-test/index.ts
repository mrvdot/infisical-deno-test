// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { InfisicalClient } from "npm:@infisical/sdk";

// Also tried:
// import { InfisicalClient } from 'https://esm.sh/@infisical/sdk';

Deno.serve(async (req) => {
  const client = new InfisicalClient({
    clientId: Deno.env.get("INFISICAL_CLIENT_ID"),
    clientSecret: Deno.env.get("INFISICAL_CLIENT_SECRET"),
    // logLevel: LogLevel.Debug,
  });
  const data = await client.listSecrets({
    path: "/",
    environment: "dev",
    projectId: "{PROJECT_ID_HERE}",
  });

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/infisical-test' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
