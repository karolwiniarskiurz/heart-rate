import {AsyncStorage} from 'react-native';

class HistoryService {
  async saveEntry(rate) {
    try {
      await AsyncStorage.setItem(
        String(new Date().valueOf()),
        JSON.stringify({rate: String(rate)}),
      );
    } catch (e) {
      console.error(e);
    }
  }

  async getAll() {
    const keys = await AsyncStorage.getAllKeys();
    return await AsyncStorage.multiGet(keys);
  }
}

export default HistoryService;
