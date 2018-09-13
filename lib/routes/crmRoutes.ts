import { Request, Response, NextFunction } from 'express';
import { ContactController } from '../controllers/crmController';
import { ContactSchema } from '../models/crmModel';
import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';

const Contact = mongoose.model('Contact', ContactSchema)


export class Routes {

    public contactController: ContactController = new ContactController();

    public routes(app): void {
        //Simple Root Route
        app.route('/')
            .get((req: Request, res: Response) => {
                res.send({
                    message: "WelCome To Our Server"
                })
            })


        //Contact Route for CRUD
        app.route('/contact')
            .get((req: Request, res: Response, next: NextFunction) => {
                // middleware
                let jsonToken = jwt.sign({ id: "125466" }, "tokensalt");
                // console.log(jsonToken + "\n");
                try {
                    let decoded = jwt.verify(jsonToken, 'tokensalt');
                    console.log(decoded);
                } catch{
                    return res.status(401).send("Noting is here & invalid Token");
                }

                next();

            }, this.contactController.getAllContact)
            .post(this.contactController.addNewContact)



        //Contact Route FOr specific Data
        app.route('/contact/:contactId')
            .get(this.contactController.getSingleContact)
            .put(this.contactController.updateSingleContact)
            .delete(this.contactController.deleteAContact)


    }
}

