import { useContext } from 'react';
import { ConfigContext } from '../context/config.context';

const useConfig = () => {
	const context = useContext(ConfigContext);
	return context;
};

export { useConfig };
