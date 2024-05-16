const mongoose = require('mongoose');
const Not = require('./notificationModel');
const User = require('./userModel');
const courseSchema = new mongoose.Schema(
  {
    teacher: {
      required: [true, 'must enter teacher'],
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    name: {
      required: [true, 'must enter name'],
      type: String,
    },
    classification: {
      required: [true, 'must enter classification'],
      type: String,
    },
    ratingavg: {
      type: Number,
      default: 5,
    },
    ratingcount: {
      type: Number,
      default: 0,
    },
    reference: [
      {
        type: {
          description: {
            required: [true, 'must enter classification'],
            type: String,
          },
          link: {
            required: [true, 'must enter classification'],
            type: String,
          },
        },
      },
    ],
    videos: [
      {
        type: {
          name: {
            required: [true, 'must enter classification'],
            type: String,
          },
          video: {
            required: [true, 'must enter classification'],
            type: String,
          },
          level: {
            required: [true, 'must enter classification'],
            type: String,
          },
          questions: [
            {
              type: {
                question: {
                  required: [true, 'must enter classification'],
                  type: String,
                },
                answer: {
                  required: [true, 'must enter classification'],
                  type: String,
                },
                D: {
                  required: [true, 'must enter classification'],
                  type: String,
                },
                A: {
                  required: [true, 'must enter classification'],
                  type: String,
                },
                B: {
                  required: [true, 'must enter classification'],
                  type: String,
                },
                C: {
                  required: [true, 'must enter classification'],
                  type: String,
                },
              },
            },
          ],
        },
      },
    ],

    test: {
      type: {
        name: {
          required: [true, 'must enter classification'],
          type: String,
        },
        rate: {
          required: [true, 'must enter classification'],
          type: Number,
        },
        questions: [
          {
            type: {
              question: {
                required: [true, 'must enter classification'],
                type: String,
              },
              answer: {
                required: [true, 'must enter classification'],
                type: String,
              },
              D: {
                required: [true, 'must enter classification'],
                type: String,
              },
              A: {
                required: [true, 'must enter classification'],
                type: String,
              },
              B: {
                required: [true, 'must enter classification'],
                type: String,
              },
              C: {
                required: [true, 'must enter classification'],
                type: String,
              },
            },
          },
        ],
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
courseSchema.post('save', async function (doc) {
  const docuser = await User.find({ role: 'user' }, { _id: 1 });
  docuser.forEach(async (item) => {
    await Not.create({ user: item._id, message: `new course  ${doc.name}` });
  });
});
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
