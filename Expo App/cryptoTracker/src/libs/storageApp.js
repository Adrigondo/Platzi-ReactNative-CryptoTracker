import AsyncStorage from "@react-native-async-storage/async-storage";

class StorageApp{
  static instance = new StorageApp();

  store = async(key, value) => {
    try {
      await AsyncStorage.setItem(key, value);

      return true;

    }catch(error){
      console.log("Storage Store Error:", error);

      return false;

    }
  }

  get = async (key) => {
    try{

      return await AsyncStorage.getItem(key);

    }catch(error){
      console.log("Storage Get Error:", error);

      throw Error(error);
    }
  }

  multiGet = async (keys) => {
    try{

      return await AsyncStorage.multiGet(keys);

    }catch(error){
      console.log("Storage MultiGet Error:", error);

      throw Error(error);
    }
  }

  getAllKeys = async () => {
    try{

      return await AsyncStorage.getAllKeys();

    }catch(error){
      console.log("Storage GetAllKeys Error:", error);

      throw Error(error);
    }
  }

  remove = async (key) => {
    try{
      await AsyncStorage.removeItem(key);

      return true;

    }catch(error){
      console.log("Storage Remove Error:", error);

      return false;

    }
  }
}

export default StorageApp;