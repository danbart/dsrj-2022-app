import { ButtonBackToHome } from '../components/ButtonBackToHome';

export const NotFound = () => {
	return (
		<div>
			<h1 className="title">404!</h1>
			<h2 className="subtitle">No Existe la pagina</h2>
			<hr></hr>
			<ButtonBackToHome />
		</div>
	);
};
