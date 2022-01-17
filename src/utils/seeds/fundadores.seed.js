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
]