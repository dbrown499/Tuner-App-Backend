const db = require("../db/dbConfig.js");


const getAllReviews = async (songs_id) => {
    try {
        const allReviews = await db.any("SELECT * FROM reviews WHERE music_id=$1", songs_id);
        return allReviews;
    } catch (err) {
        return err;
    }
};

const getReview = async (id) => {
    try {
        const getOneReview = await db.any("SELECT * FROM reviews WHERE id=$1", id);
        return getOneReview;
    } catch (error) {
        return error;
    }
};

const updateReview = async (review) => {
    try {
      const updatedReview = await db.one(
        "UPDATE reviews SET music_id=$1, reviewer_name=$2, reviewer_age=$3, bio=$4, rating=$5 WHERE id=$6 RETURNING *",
        [
          review.music_id,
          review.reviewer_name,
          review.reviewer_age,
          review.bio,
          review.rating,
          review.id,
        ]
      );
      return updatedReview;
    } catch (error) {
      return error;
    }
  };

  const newReview = async (review) => {
    try{
        const newReview = await db.one(
            "INSERT INTO reviews (music_id, reviewer_name, reviewer_age, bio, rating) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [
                review.music_id,
                review.reviewer_name,
                review.reviewer_age,
                review.bio,
                review.rating
            ]
        );
        return newReview;
    }catch(err){
        return err;
    }
  };

const deleteReview = async (id) => {
    try {
        const deletedReview = await db.one(
          "DELETE FROM reviews WHERE id=$1 RETURNING *", id);
        return deletedReview;
      } catch (error) {
        return error;
      }
}


module.exports = {getAllReviews, getReview, updateReview, newReview, deleteReview};