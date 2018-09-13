import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema)

export class ContactController {

    //To Add A new Contact
    public addNewContact(req: Request, res: Response) {
        let newContact = Contact(req.body);
        newContact.save((err, contact) => {
            if (err) {
                res.send(err)
            }
            res.json(contact);
        })
    }


    //To Get All The Contact
    public getAllContact(req: Request, res: Response) {
        Contact.find({}, (err, contact) => {
            if (err) {
                res.send(contact);
            }
            res.json(contact)
        })
    }


    //To Get Single Contact
    public getSingleContact(req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(contact);
            }
            res.json(contact)
        })
    }

    //To Update A Single Contact
    public updateSingleContact(req: Request, res: Response) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact)
        })
    }

    //To Delete A Contact
    public deleteAContact(req: Request, res: Response) {
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            if (err) {
                res.send(contact)
            }
            res.json(contact)
        })
    }

}