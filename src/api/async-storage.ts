import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageService {
  private static instance: AsyncStorageService;

  private constructor() {}

  static getInstance(): AsyncStorageService {
    if (!AsyncStorageService.instance) {
      AsyncStorageService.instance = new AsyncStorageService();
    }

    return AsyncStorageService.instance;
  }

  getItem(key: string) {
    return AsyncStorage.getItem(key);
  }

  setItem(key: string, value: string) {
    return AsyncStorage.setItem(key, value);
  }

  removeItem(key: string) {
    return AsyncStorage.removeItem(key);
  }

  clear() {
    return AsyncStorage.clear();
  }

  async getJson<T>(key: string): Promise<T | null> {
    const value = await this.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  }

  setJson(key: string, value: unknown) {
    return this.setItem(key, JSON.stringify(value));
  }
}

export const asyncStorage = AsyncStorageService.getInstance();
export default asyncStorage;
