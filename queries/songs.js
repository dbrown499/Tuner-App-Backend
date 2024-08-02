const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM music");
        return allSongs;
    } catch (error) {
        return error;
    }
};

const getOneSong = async (id) => {
    try {
        const song = await db.one("SELECT * FROM music WHERE id=$1", id);
        return song;
    } catch (error) {
        return error;
    }
};

const addOneSong = async (song) => {
    try {
        const newSong = await db.one(
            "INSERT INTO music (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [
                song.name,
                song.artist,
                song.album,
                song.time,
                song.is_favorite
            ]
        );
        return newSong;
    } catch (error) {
        return error;
    }  
};

const updateSongInformation = async (id, newInfo) => {
    try {
        const updatedInfo = await db.one(
            "UPDATE music SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
            [
                newInfo.name,
                newInfo.artist,
                newInfo.album,
                newInfo.time,
                newInfo.is_favorite,
                id
            ]
        );
        return updatedInfo;
    } catch (error) {
        return error;
    }
};

const deleteSong = async (id) => {
    try {
        const deleteSong = await db.one("DELETE FROM music WHERE id=$1 RETURNING *", id);
        return deleteSong;
    } catch (error) {
        return error;
    }
}

// const getAscOrder = async () => {
//     try {
//         const allSongsInAscOrder = await db.any("SELECT * FROM music ORDER BY name ASC ");
//         // console.log(allSongsInAscOrder)
//         return allSongsInAscOrder;
//     }catch(err){
//         return err;
//     }
// }


module.exports = {
    getAllSongs,
    getOneSong,
    addOneSong,
    updateSongInformation,
    deleteSong,
    // getAscOrder
};