const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    department: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [150, 'Your name cannot exceed 30 characters']
    },
    course: {
        type: String,
       
        maxLength: [150, 'Your name cannot exceed 30 characters']
    },
    firstName: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Your password must be longer than 6 characters'],
        select: false
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    avatar: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    coverAvatar: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    role: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    downloadedModules: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Modules'
    }],
    watchHistory: [{
        video: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Videos'
        },
        watchedAt: {
            type: Date,
            default: Date.now
        }
    }],
    examTaken: [
        {
          moduleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Modules', // assuming you have a Module model
          },
          attempts: [
            {
              score: {
                type: Number,
                required: true,
              },
              takenAt: {
                type: Date,
                default: Date.now,
              },
            },
          ],
        },
      ],
    isVerified: {
        type: Boolean,
        default: false
    
    },
    confirmEmailToken: String,
    confirmTokenExpire: Date,
    resetPasswordToken: String,
    resetPasswordExpire: Date
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
});

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });
}

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.methods.getConfirmEmailToken = function () {
    const confirmationToken = crypto.randomBytes(20).toString('hex');

    this.confirmEmailToken = crypto.createHash('sha256').update(confirmationToken).digest('hex')

    this.confirmTokenExpire = Date.now() + 30 * 60 * 1000

    return confirmationToken

}
userSchema.methods.getResetPasswordToken = function () {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Hash and set to resetPasswordToken
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    // Set token expire time
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000

    return resetToken

}

module.exports = mongoose.model('User', userSchema);