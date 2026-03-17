import {networkInterfaces} from "os"

const netAvailable = () => {
    const nets = networkInterfaces();
    return Object.keys(nets).some(s => nets[s].some(n => !n.internal));
}

export default netAvailable();