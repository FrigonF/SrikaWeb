export async function onRequestPost({ request, env }) {
  const auth = request.headers.get("Authorization");
  if (!auth) {
    return new Response("Unauthorized", { status: 401 });
  }

  const token = auth.replace("Bearer ", "");

  // Verify user
  const userRes = await fetch(`${env.SUPABASE_URL}/auth/v1/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
      apikey: env.SUPABASE_ANON_KEY
    }
  });

  if (!userRes.ok) {
    return new Response("Invalid token", { status: 401 });
  }

  const user = await userRes.json();

  // Fetch subscription
  const subRes = await fetch(
    `${env.SUPABASE_URL}/rest/v1/subscriptions?user_id=eq.${user.id}&select=plan,expires_at`,
    {
      headers: {
        Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
        apikey: env.SUPABASE_SERVICE_ROLE_KEY
      }
    }
  );

  const subs = await subRes.json();
  const sub = subs?.[0];

  const access =
    sub?.plan === "PRO" &&
    (!sub.expires_at || new Date(sub.expires_at) > new Date());

  return new Response(
    JSON.stringify({
      plan: sub?.plan || "FREE",
      access
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
