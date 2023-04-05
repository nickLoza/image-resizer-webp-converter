import Resizer from "react-image-file-resizer";
// @ts-expect-error https://github.com/onurzorluer/react-image-file-resizer/issues/68
const resizer: typeof Resizer = (Resizer.default || Resizer);

const resizeFile = (file: Blob,w:number,h:number) =>
		new Promise((resolve) => {
			resizer.imageFileResizer(
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