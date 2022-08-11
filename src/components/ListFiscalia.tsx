import { Component } from 'react';
import { Directory } from '../interface/Directory';
import FiscaliaItem from './FiscaliaItem';

export default class ListFiscalia extends Component<{
	fiscalias: Directory[];
}> {
	render() {
		const { fiscalias } = this.props;
		return (
			<div className='ListFiscalias'>
				{fiscalias.map((fiscalia: Directory) => (
					<div className='MoviesList-item' key={fiscalia.directoryId}>
						<FiscaliaItem {...fiscalia} />
					</div>
				))}
			</div>
		);
	}
}
