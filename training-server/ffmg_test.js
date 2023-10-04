var ffmpeg = require('ffmpeg');

try {
	var process = new ffmpeg('/Volumes/Viv_4TB/Apps/Training_pjt/videos/Sample_video.mp4');
	process.then(function (video) {
		console.log('The video is ready to be processed');

        video
		// .setVideoBitRate(720)
        // .setVideoSize('640x?', true, true, '#fff')
		
		.save('/Volumes/Viv_4TB/Apps/Training_pjt/videos/Sample_video_720.mp4', function (error, file) {
			if (!error)
				console.log('Video file: ' + file);
		});

	}, function (err) {
		console.log('Error: ' + err);
	});
} catch (e) {
	console.log(e.code);
	console.log(e.msg);
}

console.log('Video processing done');
