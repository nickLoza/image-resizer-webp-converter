export const initialState:InitialStateTypes = {
	userImg:  null,
	prevImg:  "",
	imgName:  "",
	imgH: 	  0,
	imgW: 	  0,
	imgRatio: 0,
}


interface InitialStateTypes{
	userImg: Blob|null,
	prevImg: string,
	imgName: string,
	imgH: number,
	imgW: number,
	imgRatio: number,
}

type ImgActionTypes = 
	{type: "upload" | "resize", 
	payload: InitialStateTypes};

function resizeReducer(state: InitialStateTypes,action: ImgActionTypes): InitialStateTypes{
	switch(action.type){
		case "upload":{
			return{
				...state,
				userImg: action.payload.userImg,
				prevImg: action.payload.prevImg,
				imgName: action.payload.imgName,
				imgH: 	 action.payload.imgH,
				imgW: 	 action.payload.imgW,
				imgRatio:action.payload.imgRatio
			}
		}
		case "resize":{
			return{
				...state,
				imgH: action.payload.imgH,
				imgW: action.payload.imgW
			}
		}
		default:
			return state;
	}
}

export default resizeReducer;