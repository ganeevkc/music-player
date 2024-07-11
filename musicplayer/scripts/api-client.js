export function apiCall(URL) {
	try {
		const promise = fetch(URL);
		return promise;
	} catch (e) {
		throw e;
	}
}
