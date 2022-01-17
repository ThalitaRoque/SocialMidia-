const mongoose = require("mongoose");

const mongoDb =
  "mongodb+srv://socialmidia:social@cluster0.kwf8m.mongodb.net/socialmidia?retryWrites=true&w=majority";
const redesocialSchema = require("../../api/redesociales/redesociales.model");

const redesociales = [
  {
    name: "Facebook",
    yearsonfundation: "2004-2022",
    on_air: true,
    creator: ["", ""],
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642363962/redesocial/facebooklogo_dmkaki.jpg"
  },
  {
    name: "Instagram",
    yearsonfundation: "2010-2022",
    on_air: true,
    creator: ["", ""],
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642363961/redesocial/instagram-logo_b2ehmk.jpg"
  },
  {
    name: "Twitter",
    yearsonfundation: "2006-2022",
    on_air: true,
    creator: ["", ""],
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642363962/redesocial/twitterlogo_vx0ejh.jpg"
  },
  {
    name: "TikTok",
    yearsonfundation: "2016-2022",
    on_air: true,
    creator: ["", ""],
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642363962/redesocial/tiktok_gs4f97.jpg"
  },
  {
    name: "Linkedin",
    yearsonfundation: "2002-2022",
    on_air: true,
    creator: ["", ""],
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642363962/redesocial/linkedin_isbqjr.jpg"
  },
  {
    name: "Discord",
    yearsonfundation: "2015-2022",
    on_air: true,
    creator: ["", ""],
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642363961/redesocial/discord_kjmgsr.jpg"
  },
];

const redesocialesSeed = redesociales.map((redesocial) => new redesocialSchema(redesocial));

mongoose
  .connect(mongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allredesociales= await redesocialSchema.find();
    if (allredesociales.length) {
      await redesocialSchema.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting rede social: ${err}`))
  .then(async () => {
    await serieSchema.insertMany(seriesSeed);
    console.log("rede social successfully created");
  })
  .catch((err) => console.log(`Error creating rede social: ${err}`))
  .finally(() => mongoose.disconnect());
