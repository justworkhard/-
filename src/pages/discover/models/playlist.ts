import { playlist, album,toplist_1,toplist_2,toplist_3 ,artist_list} from '@/services/discover';

const UserModel: any = {
  namespace: 'playlist',

  state: {
    currentUser: {},
  },

  effects: {
    *fetchPlayList({_,callback}, { call, put }) {
      console.log('playlist');
      
      const response = yield call(playlist);
      if (callback && typeof callback === 'function') {
          callback(response)
    }
      yield put({
        type: 'savePlaylist',
        payload: response,
      });
    },
    *fetchAlbum({_,callback}, { call, put }) {
      const response = yield call(album);
      console.log('fetchAlbum');
      if (callback && typeof callback === 'function') {
          callback(response)
    }
      yield put({
        type: 'savePlaylist',
        payload: response,
      });
    },
    *fetchToplist_1({_,callback}, { call, put }) {
      const response = yield call(toplist_1);
      console.log('toplist');
      if (callback && typeof callback === 'function') {
          callback(response)
    }
      yield put({
        type: 'savePlaylist',
        payload: response,
      });
    },
    *fetchToplist_2({_,callback}, { call, put }) {
      const response = yield call(toplist_2);
      console.log('toplist');
      if (callback && typeof callback === 'function') {
          callback(response)
    }
      yield put({
        type: 'savePlaylist',
        payload: response,
      });
    },
    *fetchToplist_3({_,callback}, { call, put }) {
      const response = yield call(toplist_3);
      console.log('toplist');
      if (callback && typeof callback === 'function') {
          callback(response)
    }
      yield put({
        type: 'savePlaylist',
        payload: response,
      });
    },
    *artist_list({_,callback}, { call, put }) {
      const response = yield call(artist_list);
      console.log('toplist');
      if (callback && typeof callback === 'function') {
          callback(response)
    }
      yield put({
        type: 'savePlaylist',
        payload: response,
      });
    },
  },

  reducers: {
    savePlaylist(state, action) {
      return {
        ...state,
        currentUser: action.payload || {test:'test'},
      };
    }
  },
};

export default UserModel;
