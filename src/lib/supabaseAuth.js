import { supabase } from '$lib/supabaseClient';

export const handleLogin = async () => {
	const redurectUrl = window.location.origin;
	const { user, session, error } = await supabase.auth.signIn(
		{
			provider: 'linkedin'
		},
		{ redirectTo: redurectUrl }
	);
	if (error) throw error;
};

export const handleLogout = async () => {
	const { error } = await supabase.auth.signOut();
	if (error) throw error;
};
