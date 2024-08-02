const express = require("express");
const reviews = express.Router({ mergeParams: true });

const {getOneSong} = require('../queries/songs')
const {getAllReviews, getReview, updateReview, newReview, deleteReview }= require("../queries/reviews");

    // newReview,
    // deleteReview,
  //  = require("../queries/reviews");

reviews.get("/", async (req, res) => {
   const { songs_id } = req.params;
   const reviews = await getAllReviews(songs_id);
   const song = await getOneSong(songs_id);

   if (song.id) {
    res.status(200).json({ ...song, reviews });
  } else {
    res.status(500).json({ error: "Song not found or server error" });
  }
  });

  reviews.get("/:id", async (req, res) => {
    const { songs_id, id } = req.params;
    const review = await getReview(id);
    const song = await getOneSong(songs_id);  

    if (review) {
      res.json({ ...song, review });
    } else {
      res.status(404).json({ error: "not found" });
    }
  });

  reviews.put("/:id", async (req, res) => {
    const { songs_id, id } = req.params;
    // console.log(id, req.params.bookmark_id);
    const updatedReview = await updateReview({ songs_id, id, ...req.body });
    if (updatedReview.id) {
      res.status(200).json(updatedReview);
    } else {
      res.status(404).json("Review not found");
    }
  });
  
  reviews.post("/", async (req, res) => {
      const { songs_id } = req.params;
      const review = await newReview({ songs_id, ...req.body });
      res.status(200).json(review);
    });

    reviews.delete("/:id", async (req, res) => {
      const { id } = req.params;
      const deletedReview = await deleteReview(id);
      if (deletedReview.id) {
        res.status(200).json(deletedReview);
      } else {
        res.status(404).json({ error: "Review not found" });
      }
    });

  module.exports = reviews;