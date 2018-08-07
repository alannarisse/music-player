export const UPDATE_ALBUM = 'albums:updateAlbum';

export function updateAlbum(newAlbum){
	return {
		type: UPDATE_ALBUM,
		paylod: {
			album: newAlbum
		}
	}
} 