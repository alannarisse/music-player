export default function albumsReducer(state = '', { type, payload }) {
	switch (type){
		case 'updateAlbums':
			return payload;
		default: 
			return state;
	}
}