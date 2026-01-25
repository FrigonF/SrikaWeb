import { createClient } from '@supabase/supabase-js';

export const onRequestPost = async (context) => {
    const { request, env } = context;

    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return new Response(JSON.stringify({ error: 'Missing or invalid Authorization header' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const token = authHeader.split(' ')[1];

    const supabaseUrl = env.VITE_SUPABASE_URL || env.SUPABASE_URL;
    const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
        return new Response(JSON.stringify({ error: 'Server configuration error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 1. Verify the JWT and get the user
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
        return new Response(JSON.stringify({ error: 'Invalid token' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // 2. Check the subscriptions table
    const { data: subscription, error: dbError } = await supabase
        .from('subscriptions')
        .select('plan, expires_at')
        .eq('user_id', user.id)
        .single();

    if (dbError || !subscription) {
        // Default to FREE if no entry found (though trigger should handle it)
        return new Response(JSON.stringify({
            status: 'OK',
            plan: 'FREE',
            demo_seconds: 60,
            expires_at: null
        }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const isExpired = subscription.expires_at && new Date(subscription.expires_at) < new Date();

    if (subscription.plan === 'PAID' && isExpired) {
        return new Response(JSON.stringify({
            status: 'EXPIRED'
        }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify({
        status: 'OK',
        plan: subscription.plan,
        demo_seconds: subscription.plan === 'PAID' ? 0 : 60,
        expires_at: subscription.expires_at
    }), {
        headers: { 'Content-Type': 'application/json' },
    });
};
