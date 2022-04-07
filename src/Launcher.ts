import {Server} from './Server/Server'


class Launcher {

    //instance variables //protected, public, private
   private name: string;
   private server: Server;

    constructor() {
        this.server = new Server()
    }

    public launchApp() {
        console.log('started App');
        this.server.createServer();
        (this.server as any).somePrivateLogic();
    }
}

new Launcher().launchApp();


