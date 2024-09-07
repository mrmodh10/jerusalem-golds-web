interface SupportedStorage {
    getItem: (key: string) => string | null;
    setItem: (key: string, value: string) => void;
    removeItem: (key: string) => void;
  }
  
  // Helper function to check if localStorage is supported
  function supportsLocalStorage(): boolean {
    try {
      const testKey = "__storage_test__";
      globalThis.localStorage.setItem(testKey, testKey);
      globalThis.localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }
  
  // Cache the result of the supportsLocalStorage check
  const isLocalStorageSupported = supportsLocalStorage();
  
  // Fallback in-memory storage
  const inMemoryStorage: Record<string, string> = {};
  
  // TypeScript version of the custom storage adapter
  export const customStorageAdapter: SupportedStorage = {
    getItem: (key: string): string | null => {
      // console.log(`getItem called with key: ${key}`,);
      if (!isLocalStorageSupported) {
        console.log("Storing in Local Storage")
        return inMemoryStorage[key] || null;
      }
      // console.log(globalThis.localStorage.getItem(key))
      return globalThis.localStorage.getItem(key);
    },
    setItem: (key: string, value: string): void => {
      console.log(`setItem called with key: ${key}, value: ${value}`);
      if (!isLocalStorageSupported) {
        inMemoryStorage[key] = value;
        return;
      }
      globalThis.localStorage.setItem(key, value);
    },
    removeItem: (key: string): void => {
      console.log(`removeItem called with key: ${key}`);
      if (!isLocalStorageSupported) {
        delete inMemoryStorage[key];
        return;
      }
      globalThis.localStorage.removeItem(key);
    },
  };
  
  