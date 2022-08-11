import { Component } from 'react';
import { useParams } from 'react-router-dom';
import { getFiscaliaId } from '../api/FiscaliaApi';
import FiscaliaItem from '../components/FiscaliaItem';
import { Title } from '../components/Title';
import { Directory } from '../interface/Directory';

class Fiscalia extends Component {
	state = { fiscalia: {} as Directory };
	readonly params = useParams();

	_fetchFiscalia({ id }: any) {
		getFiscaliaId(id).then(setFiscalia =>
			this.setState({ fiscalia: setFiscalia })
		);
	}

	componentDidMount() {
		console.log(this.params);
		// this._fetchFiscalia({ params.id });
	}

	render() {
		return (
			<div>
				<Title>Directorio para fiscalia</Title>
				<Title>{this.state.fiscalia.directoryName}</Title>
				<hr />
				<FiscaliaItem {...this.state.fiscalia} />
			</div>
		);
	}
}

export default Fiscalia;
