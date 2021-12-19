import {openDatabase} from 'react-native-sqlite-storage';
export const getDBConnection = async () => {
    SQLite.enablePromise(true);

return openDatabase(

{name: 'ppu.db', location: 'default'}

);

};