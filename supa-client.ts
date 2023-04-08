import type { Database } from '~/database.types';
const database = useSupabaseClient<Database>();

export const user_profiles = await useAsyncData('user_profiles', async () => {
	const response = await database.from('user_profiles').select('*');
	return response.data;
});
