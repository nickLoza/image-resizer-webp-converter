import Resizer from "react-image-file-resizer";

const resizeFile = (file: Blob,w:number,h:number) =>
		new Promise((resolve) => {
			Resizer.imageFileResizer(
				file,
				w,
				h,
				"WEBP",
				100,
				0,
				(uri) => {
					resolve(uri);
				},
				"base64"
				);
});


export default resizeFile;