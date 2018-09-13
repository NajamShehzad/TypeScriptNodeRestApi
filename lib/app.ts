import * as express from 'express';
import * as  bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";



class App {
    public app: express.Application;
    public rotutePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.rotutePrv.routes(this.app)
    }
    private config(): void {
        //To Get Req JSON form from Client
        this.app.use(bodyParser.json());
        //To Get x-form post req form user
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}
export default new App().app;