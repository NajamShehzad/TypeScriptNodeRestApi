import { Request, Response } from 'express';
import { ContactController } from '../controllers/crmController';


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
            .get(this.contactController.getAllContact)
            .post(this.contactController.addNewContact)



        //Contact Route FOr specific Data
        app.route('/contact/:contactId')
            .post(this.contactController.getSingleContact)
            .put(this.contactController.updateSingleContact)
            .delete(this.contactController.deleteAContact)


    }
}

