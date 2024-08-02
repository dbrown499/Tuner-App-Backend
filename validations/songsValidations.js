const checkValidUpdateInfo = (req, res, next) => {
    if (req.body.name && req.body.artist) {
        if(req.body.is_favorite === "true" || "false"){
            return next();
        }
    } else {
      res.status(400).json({ error: "Missing required fields: Name, Artist or favorite " });
    }
  };

  const confirmDeletionInfo = (req, res, next) => {
    if (req.body) { 
        return res.status(400).json({ message : `Are you sure you want to delete ${req.body.name} from your database? ` });
            // return next();
        
    } else {
      res.status(400).json({ error: "Missing required fields: Name, Artist or favorite " });
    }
  };

  module.exports = {checkValidUpdateInfo, confirmDeletionInfo};