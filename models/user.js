const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    name: {
        first: {
            type: String,
            require: true,
        },
        last: {
            type: String,
            require: true,
        },
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true,
    },
    zipCode: {
        type: Number,
        min: [1000, 'Zip code is too short'],
        max: 99999,
    },
    password: {
        type: String,
        require: true,
    },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    subscibedAccount: { type: Schema.Types.ObjectId, ref: 'Subscriber' },
});

userSchema
    .virtual('fullname')
    .get(() => `${this.name.first} ${this.name.last}`);

module.exports = model('User', userSchema);
