import { URL } from "../Models/Url.js";
import shortid from "shortid";

export const shortUrl = async (req, res) => {
    const longUrl = req.body.longUrl
    const shortCode = shortid.generate()

    const shortUrl = `${process.env.BASE_URL}/${shortCode}`

    const newUrl = new URL({ shortCode, longUrl })
    await newUrl.save()

    console.log("short saved = ", newUrl)
    res.render("index.ejs", { shortUrl })
}

export const getOriginalUrl = async (req, res) => {
    const shortCode = req.params.shortCode

    // find on database
    const originalUrl = await URL.findOne({ shortCode })

    if (originalUrl) {
        res.redirect(originalUrl.longUrl);
    } else {

        res.json({ message: "Invalid shortcode" });
    }
}