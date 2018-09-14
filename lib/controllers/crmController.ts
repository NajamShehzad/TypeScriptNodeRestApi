import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import { Request, Response, NextFunction } from 'express';

const Contact = mongoose.model('Contact', ContactSchema)

export class ContactController {

    public middleware(req: Request, res: Response, next: NextFunction) {

        console.log("Middleware");
        next();

    }
    //To Add A new Contact
    public addNewContact(req: Request, res: Response) {
        let newContact = Contact(req.body);
        console.log(req.body);
        newContact.save((err, contact) => {
            if (err) {
                return res.send(err)
            }
            return res.json(contact);
        })
    }


    //To Get All The Contact
    public getAllContact(req: Request, res: Response) {
        console.log(req.body);
        Contact.find({}, (err, contact) => {
            if (err) {
                return res.send(contact);
            }
            return res.json(contact)
        })
    }


    //To Get Single Contact
    public getSingleContact(req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                return res.send(contact);
            }
            return res.json(contact)
        })
    }

    //To Update A Single Contact
    public updateSingleContact(req: Request, res: Response) {
        Contact.findByIdAndUpdate(req.params.contactId, req.body, { new: true }, (err, contact) => {
            if (!contact) {
                return res.status(404).send(err);
            }
            return res.json(contact)
        })
    }

    //To Delete A Contact
    public deleteAContact(req: Request, res: Response) {
        Contact.findByIdAndRemove(req.params.contactId, (err, contact) => {
            if (!contact) {
                return res.status(404).send(contact)
            }
            return res.send(contact);
        })
    }

}