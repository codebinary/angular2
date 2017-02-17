"use strict";
var Video = (function () {
    function Video(id, title, description, status, image, videoPath, createAt, updatedAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.image = image;
        this.videoPath = videoPath;
        this.createAt = createAt;
        this.updatedAt = updatedAt;
    }
    return Video;
}());
exports.Video = Video;
//# sourceMappingURL=video.js.map