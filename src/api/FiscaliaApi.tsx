import { Directory } from '../interface/Directory';
import { URL_HOST } from '../utils/Const';

export function getFiscalias(): Promise<Directory[]> {
	const url = `${URL_HOST}directory/`;

	const params = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	return fetch(url, params).then(response => response.json());
}

export function getFiscaliaId(id: string): Promise<Directory[]> {
	const url = `${URL_HOST}directory/${id}`;

	const params = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	return fetch(url, params).then(response => response.json());
}
