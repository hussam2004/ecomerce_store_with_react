function checkIsBrowser(): boolean {
  return typeof window !== "undefined";
}

type StorageGetter = () => Storage | null;

const defaultGetStorage: StorageGetter = () =>
  checkIsBrowser() ? localStorage : null;

export const dataStorage = (
  key: string,
  getStorage: StorageGetter = defaultGetStorage
) => {
  const storage = getStorage();

  return {
    set: (data: unknown): void => {
      if (checkIsBrowser() && storage) {
        storage.setItem(key, JSON.stringify(data));
      }
    },

    get: (): unknown | undefined => {
      if (!checkIsBrowser() || !storage) return undefined;

      const json = storage.getItem(key);
      if (!json) return undefined;

      try {
        return JSON.parse(json);
      } catch {
        return json;
      }
    },

    remove: (): void => {
      if (checkIsBrowser() && storage) {
        storage.removeItem(key);
      }
    },
  };
};

export const dataSessionStorage = (key: string) =>
  dataStorage(key, () => (checkIsBrowser() ? sessionStorage : null));
