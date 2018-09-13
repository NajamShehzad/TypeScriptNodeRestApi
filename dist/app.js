"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./routes/crmRoutes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.rotutePrv = new crmRoutes_1.Routes();
        this.mongoUrl = 'mongodb://localhost:27017/Contact';
        this.app = express();
        this.config();
        this.rotutePrv.routes(this.app);
        this.mongoSetup();
    }
    config() {
        //To Get Req JSON form from Client
        this.app.use(bodyParser.json());
        //To Get x-form post req form user
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map