type StorageKey = 'MIDJOURNEY_DATA' | 'APP_SETTINGS';

class StorageService {
  private storageKey: StorageKey = 'MIDJOURNEY_DATA';

  async saveToLocalStorage(state: object) {
    const data = await this.getFromLocalStorage();

    localStorage.setItem(this.storageKey, JSON.stringify({ ...data, ...state }));
  }

  async getFromLocalStorage(key: StorageKey = this.storageKey): Promise<object> {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
}

export const storageService = new StorageService();
