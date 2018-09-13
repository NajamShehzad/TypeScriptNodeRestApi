"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const crmModel_1 = require("../models/crmModel");
const Contact = mongoose.model('Contact', crmModel_1.ContactSchema);
class ContactController {
    //To Add A new Contact
    addNewContact(req, res) {
        let newContact = Contact(req.body);
        console.log(req.body);
        newContact.save((err, contact) => {
            if (err) {
                return res.send(err);
            }
            return res.json(contact);
        });
    }
    //To Get All The Contact
    getAllContact(req, res) {
        Contact.find({}, (err, contact) => {
            if (err) {
                return res.send(contact);
            }
            return res.json(contact);
        });
    }
    //To Get Single Contact
    getSingleContact(req, res) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                return res.send(contact);
            }
            return res.json(contact);
        });
    }
    //To Update A Single Contact
    updateSingleContact(req, res) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                return res.send(err);
            }
            return res.json(contact);
        });
    }
    //To Delete A Contact
    deleteAContact(req, res) {
        Contact.findByIdAndRemove(req.params.contactId, (err, contact) => {
            if (!contact) {
                return res.status(403).send(contact);
            }
            return res.send(contact);
        });
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=crmController.js.map