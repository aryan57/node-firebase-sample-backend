'use strict';

const firebaseAdmin = require('../firebaseAdmin');
const Student = require('../models/student');
const firestore = firebaseAdmin.firestore();


const addStudent = async (req,res,next) => {
    try {
        const data = req.body;
        await firestore.collection('students').doc().set(data);
        res.send('record saved successfully');
    } catch (error) {
        res.status(400).send(error.message);        
    }
}

module.exports = {
    addStudent
}