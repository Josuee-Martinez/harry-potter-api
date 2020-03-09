const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  try {
    // const config = {
    //   headers: {
    //     key: "$2a$10$Ruz.6l8ZvKxkXdnOMRJo2.62tTjbIepXiKJ2b1N/Jq4ZJrETNedpa"
    //   }
    // };

    const response = await axios.get(
      "https://www.potterapi.com/v1/characters?house=Ravenclaw&key=$2a$10$Ruz.6l8ZvKxkXdnOMRJo2.62tTjbIepXiKJ2b1N/Jq4ZJrETNedpa"
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
