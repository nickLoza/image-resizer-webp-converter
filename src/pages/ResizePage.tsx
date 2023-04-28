import { useReducer, useRef } from "react";
import resizeFile from "./utils/resizeFile";
import { RiImageAddLine } from "react-icons/ri";
import resizeReducer from "../reducers/resizeReducer";
import { initialState } from "../reducers/resizeReducer";


function ResizePage() {

	const [state, dispatch] = useReducer(resizeReducer, initialState);
	const { userImg, prevImg, imgName, imgH, imgW, imgRatio} = state;

	const inputFileRef = useRef<HTMLInputElement>(null!);

	function handleOnChangeSize(e: React.ChangeEvent<HTMLInputElement>){
		let newValue = Number(e.target.value);
		if(e.target.name === "width"){
			dispatch({
				type: "resize",
				payload: 
				{...state, 
				imgW: newValue, 
				imgH: Math.floor(newValue / imgRatio)}
			})
		} else{
			dispatch({
				type: "resize",
				payload: 
				{...state, 
				imgH: newValue, 
				imgW: Math.floor(newValue * imgRatio)}
			})
		}

	}


	function handleFiles(file: File){
		let fileName = file.name.slice(0,file.name.indexOf("."));
		let img = new Image();
		img.src = window.URL.createObjectURL(file)
		img.onload = () => {
			let result = {
				 userImg: file,
				 prevImg: img.src,
				 newImg: "",
				 imgName: fileName,
				 imgW: img.width,
				 imgH: img.height,
				 imgRatio: img.width / img.height
			}
			dispatch({type: "upload", payload: result})
			
		}
	}


    const preventDefault = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

	function handleOnChange(e: React.ChangeEvent<HTMLInputElement>){
		handleFiles(e.target.files![0])
	}

	function handleOnDrop(e: React.DragEvent<HTMLDivElement>){
		e.preventDefault()
		let file = e.dataTransfer.files[0];
		if(file) handleFiles(file) 

	}

	async function downloadImage() {
		  let imgOptimized = await resizeFile(userImg!, imgW,imgH);
		  const link = document.createElement('a');
		  link.href = String(imgOptimized);
		  link.download = imgName;
		  document.body.appendChild(link);
		  link.click();
		  document.body.removeChild(link);
}

	return (
		<div className='resizer'>
			<h2 className="resizer__h2">RESIZER</h2>
			<div className="resizer__content"  
				onDragOver={preventDefault}
                onDragEnter={preventDefault}
                onDragLeave={preventDefault}
				onDrop={handleOnDrop}>
				<div 
				className="resizer__content-dropzone">
				<input 
					ref={inputFileRef}
					type="file" 
					onChange={handleOnChange}
					accept="image/png, image/JPG, image/JPEG" 
					style={{display: "none"}}/>
					<button onClick={()=>{
						inputFileRef.current.click()
					}}>
						<RiImageAddLine/>
					</button>
				</div>
				{prevImg != ""?
				<>
				<div className="resizer__content-edit edit">
						<div className="edit__field">
							<span className="edit__span">Width:</span>
							<input 
							className="edit__input"
							type="number" 
							placeholder="0" 
							value={imgW} 
							name="width"
							onChange={handleOnChangeSize}
							autoFocus/>
						</div>
						<div className="edit__field">
							<span className="edit__span">Height:</span>
							<input 
							className="edit__input"
							type="number" 
							placeholder="0" 
							value={imgH} 
							name="height"
							onChange={handleOnChangeSize}
							autoFocus/>
						</div>
					</div>
				<img 
					className="resizer__img" 
					src={prevImg} 
					alt="your image" 
					style={{minWidth: "40px", width: "400px"}}/>	
				<button 
					className="resizer__btn"
					onClick={downloadImage}>
					DOWNLOAD
				</button>
				</>
				:
				<p>Choose a file or drop an image here</p>}
			</div>
		</div>
	)
}

export default ResizePage