import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFiscalias } from '../api/FiscaliaApi';
import ListFiscalia from '../components/ListFiscalia';
import { Title } from '../components/Title';
import { Directory } from '../interface/Directory';

export default function Home() {
	const [fiscalias, setFiscalias] = useState<Directory[]>([]);
	const params = useParams();

	useEffect(() => {
		console.log(params);
		getFiscalias().then(setFiscalias);
	}, [params]);

	return (
		<div>
			<Title>Listado de Directorios</Title>
			<hr />
			<ListFiscalia fiscalias={fiscalias} />
		</div>
	);
}
