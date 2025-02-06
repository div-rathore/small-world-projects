class MyLocalStorage {
    setItem(key, value, expiry) {
      const now = new Date();
      const item = {
        value: value,
        expiry: now.getTime() + expiry
      };
      localStorage.setItem(key, JSON.stringify(item));
    }
  
    getItem(key) {
      const itemStr = localStorage.getItem(key);
      if (!itemStr) return null;
  
      const item = JSON.parse(itemStr);
      const now = new Date();
  
      if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }
  
      return item.value;
    }
  
    removeItem(key) {
      localStorage.removeItem(key);
    }
  
    clear() {
      localStorage.clear();
    }
  }
  
  const myLocalStorage = new MyLocalStorage();
  export default myLocalStorage;