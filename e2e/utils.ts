import detect from 'detect-port';
import { execSync } from 'child_process';

export async function setupE2eTest() {
	await startSupabase();
	reseedDb();
}

async function startSupabase() {
	const port = await detect(54321);
	if (port !== 54321) {
		return;
	}
	console.warn('Supabase not detected - Starting it now');
	execSync('npx supabase start');
}

function reseedDb() {
	execSync(
		'PGPASSWORD=postgres psql -U postgres -h 127.0.0.1 -p 54322 -f supabase/clear-db-data.sql',
		// for Windows:
		// "SET PGPASSWORD=postgres&&psql -U postgres -h 127.0.0.1 -p 54322 -f supabase/clear-db-data.sql"
		{ stdio: 'ignore' }
	);
}
