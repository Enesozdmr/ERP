import mongoose from 'mongoose';

const marksSchema = new mongoose.Schema({
    name: String
});

const Marks = mongoose.model('Marks', marksSchema);

module.exports = Marks;
