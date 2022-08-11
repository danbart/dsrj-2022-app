import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Directory } from '../interface/Directory';

export default class FiscaliaItem extends Component<Directory> {
	render() {
		const {
			directoryId,
			directoryName,
			addressLine,
			city,
			country,
			zone,
			state,
			phone,
			phone2,
		} = this.props;
		return (
			<Link to={`/fiscalia/${directoryId}`} className='card'>
				<div className='card-body'>
					<h5 className='card-title'>{directoryName}</h5>
					<p className='card-text'>
						{addressLine} zona {zone}
					</p>
					<p className='card-text'>
						Municipio: {city}, <br /> Departamento {state}, <br /> Paiz{' '}
						{country},
					</p>
					<a className='card-link'>{phone}</a>
					<a className='card-link'>{phone2}</a>
				</div>
			</Link>
		);
	}
}
