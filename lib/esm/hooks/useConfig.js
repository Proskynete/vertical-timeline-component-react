import { useContext } from 'react';
import { ConfigContext } from '../context/config.context';
var useConfig = function () {
    var context = useContext(ConfigContext);
    return context;
};
export { useConfig };
