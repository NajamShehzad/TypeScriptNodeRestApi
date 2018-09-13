"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
    }
    routes(app) {
        //Simple Root Route
        app.route('/')
            .get((req, res) => {
            res.send({
                message: "WelCome To Our Server"
            });
        });
        //Contact Route for CRUD
        app.route('/contact')
            .get(this.contactController.getAllContact)
            .post(this.contactController.addNewContact);
        //Contact Route FOr specific Data
        app.route('/contact/:contactId')
            .get(this.contactController.getSingleContact)
            .put(this.contactController.updateSingleContact)
            .delete(this.contactController.deleteAContact);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map