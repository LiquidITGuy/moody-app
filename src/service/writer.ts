export class WriterService {
	constructor() {
	}
	save(obj: object, filename: string) {
		const string = JSON.stringify(obj);
		const bytes = new TextEncoder().encode(string);
		const blob = new Blob([bytes], {
			type: "application/json;charset=utf-8"
		});
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href=url;
		link.download=filename;
		link.click()
		window.URL.revokeObjectURL(url);
	}

	async read<T>(file: File): Promise<T> {
		const json = JSON.parse(await file.text());
		return json
	}
}
