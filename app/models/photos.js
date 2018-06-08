import API from '../api';

export default {
  state: {
    loading: false,
    photos: []
  },
  reducers: {
    toggleLoading(state, loading) {
      return { ...state, loading };
    },
    fetchPhotosSuccess(state, photos) {
      return { ...state, photos };
    }
  },
  effects: {
    async fetchPhotos() {
      this.toggleLoading(true);

      try {
        const data = await API.fetchPhotos();

        this.fetchPhotosSuccess(data);
      } catch (e) {
        console.error(e);
      } finally {
        this.toggleLoading(false);
      }
    }
  }
};
