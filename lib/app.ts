import * as express from 'express';
import * as  bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from 'mongoose';



class App {
    public app: express.Application;
    public rotutePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost:27017/Contact'

    constructor() {
        this.app = express();
        this.config();
        this.rotutePrv.routes(this.app);
        this.mongoSetup();
    }
    private config(): void {
        //To Get Req JSON form from Client
        this.app.use(bodyParser.json());
        //To Get x-form post req form user
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

}
export default new App().app;