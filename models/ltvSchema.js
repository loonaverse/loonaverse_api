const ltvSchema = {
    id: {
        type: Number,
        required: true,
    },
    contentId: {
        type: String,
        required: true,
    },
    videoId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    era: {
        type: String,
        required: true,
    },
    members: {
        type: String,
        required: true,
    },
    blurred: {
        type: String,
        required: true,
    },
    songs: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    comments: {
        type: Number,
        required: true,
    },
}

module.exports = ltvSchema;