const mongoose = require("mongoose");

const mongoDb =
  "mongodb+srv://socialmidia:social@cluster0.kwf8m.mongodb.net/socialmidia?retryWrites=true&w=majority";
const fundadorSchema = require("../../api/fundadores/fundadores.model");

const fundadores = [
    {
    name: "Mark Zuckerberg",
    birth_date: "14-05-1984",
    city: "Nueva York",
    img: "https://res.cloudinary.com/dvawsqdhx/image/upload/v1642107223/seriesDBteam/q6hp6uuerhrdef3ao0q1.jpg",
  },
  {
    name: "Eduardo Saverin",
    birth_date: "19-03-1982",
    city: "Sao Paulo",
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642363962/redesocial/eduardoSaverinface_pnbhmr.jpg",
  },
  {
    name: "Kevin Systrom",
    birth_date: "30-12-1983",
    city: " Massachusetts",
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642453198/redesocial/Systrom_wsszvg.jpg",
  },
  {
    name: "Mike Krieger",
    birth_date: "04-03-1986",
    city: "Sao Paulo",
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642454184/redesocial/Mike_Krieger_dumptg.jpg",
  },
  {
    name: "Jack Dorsey",
    birth_date: "19-11-1976",
    city: "Missuri",
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642461433/redesocial/Jack_Dorsey_psjrhl.jpg",
  },
  {
    name: "Evan Williams",
    birth_date: "31-03-1972",
    city: "Nebraska",
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642461426/redesocial/Evan_Williams_n6gd79.jpg",
  },
  {
    name: "Biz Stone",
    birth_date: "10-03-1974",
    city: "Massachusetts",
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642461415/redesocial/Biz_Stone_pjntvt.jpg",
  },
  {
    name: "Zhang Yiming",
    birth_date: "01-04-1983",
    city: "Longyan-China",
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642538697/redesocial/zhang-yiming-tiktok_asuafc.jpg",
  },
  {
    name: "Reid Hoffman",
    birth_date: "05-08-1967",
    city: "California",
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642539052/redesocial/Reid_Hoffman_agns02.jpg",
  },
  {
    name: "Jason Citron",
    birth_date: "21-09-1984",
    city: "San Francisco",
    img: "https://res.cloudinary.com/dxkgcqwiy/image/upload/v1642539456/redesocial/jason_citron_d5vnnj.jpg",
  }
  
]
const fundadoresSeed = fundadores.map((fundador) => new fundadorSchema(fundador));

mongoose
  .connect(mongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allfundadores= await fundadorSchema.find();
    if (allfundadores.length) {
      await fundadorSchema.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting fundador: ${err}`))
  .then(async () => {
    await fundadorSchema.insertMany(fundadoresSeed);
    console.log("fundador successfully created");
  })
  .catch((err) => console.log(`Error creating fundador: ${err}`))
  .finally(() => mongoose.disconnect());