type Props = {
	children: string;
};

export const Title = ({ children }: Props) => {
	return <h1 className="title">{children}</h1>;
};
