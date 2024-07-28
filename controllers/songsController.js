const express = require("express");
const songs = express.Router();

const {
    getAllSongs, 
    getOneSong,
    addOneSong,
    updateSongInformation,
    deleteSong
} = require("../queries/songs");

songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(500).json({ error: "No songs in database" });
    }
  });

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const oneSong = await getOneSong(id);
    if (oneSong) {
      res.status(200).json(oneSong);
    } else {
      res.status(500).json({ error: "Invalid ID number, song not found" });
    }
  });


songs.post("/", async (req, res) => {
    const addSong = await addOneSong(req.body);
    res.status(201).json(addSong);
  });

songs.put("/:id", async (req,res)=>{
    const newInfo = req.body;
    const { id } = req.params;
    const updateSongInfo = await updateSongInformation(id, newInfo);
    if(updateSongInfo.id){
        res.status(200).json(updateSongInfo);
    }else{
        res.status(404).json({ error: "Song Can Not Be Found" });
    }
});


songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    
    if(deletedSong.id) {
        res.status(200).json({ message: `The song called "${deletedSong.name}" has been deleted.` });
    } else {
        res.status(404).json( {error: "Song could not be deleted" });
    }
});


  module.exports = songs;