import * as FileSystem from 'expo-file-system';
const contactDirectory = `${FileSystem.documentDirectory}contacts`;

const setUpDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(contactDirectory);
    if (!dir.exists){
        console.log('directory does not exist!')
        await FileSystem.makeDirectoryAsync(contactDirectory);
    }else{
        console.log('directory exists!')
    }
}

export const checkForDirectory = async () => {
    setUpDirectory();
}