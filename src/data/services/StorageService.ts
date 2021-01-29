const isBrowser = typeof window !== 'undefined';

export const LocalStorageService = {
    get(key: string, defaultValue?: any): any {
        if (isBrowser) {
            const value = window.localStorage.getItem(key) || defaultValue;
            try {
                return JSON.parse(value);
            } catch (error) {
                return value;
            }
        }
        return '';
    },
    set(key: string, value: any): void {
        if (isBrowser) {
            if (typeof value !== 'string') {
                value = JSON.stringify(value);
            }
            window.localStorage.setItem(key, value);
        }
    },
    remove(key: string): void {
        if (isBrowser) {
            window.localStorage.removeItem(key);
        }
    },
    removeItens(keys: string[]): void {
        keys.forEach(LocalStorageService.remove);
    },
    clear(): void {
        if (isBrowser) {
            window.localStorage.clear();
        }
    },
};
