import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema({

    videoFile: {
        type: String,
        required: [true, 'Video file url is required'],
        trim: true
    },
    thumbnail: {
        type: String,
        required: [true, 'Thumbnail is required'],
        trim: true
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minlength: 3,
        maxlength: 100
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
        minlength: 10,
        maxlength: 500
    },
    duration: {
        type: Number,
        required: [true, 'Video duration is required'],
        trim: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'Owner is required']
    }
}, { timestamps: true });

videoSchema.plugin(mongooseAggregatePaginate);

const Video = mongoose.model("Video", videoSchema);

export default Video;
