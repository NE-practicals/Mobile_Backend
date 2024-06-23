const express=require('express');
const app=express();
const bodyParser= require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const sequelize = require("./middlewares/sequelize"); 
const {userRoutes} = require("./routes/userRoutes");
const SwaggerUi  =  require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");
const router  =  require("./routes/index");



app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));


app.use(cors({}));
var option={
    explore:true
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.use(router)



app.use("/", (req, res) => {
    if (req.method === "GET") {
      res.send(`
        <html>
          <head>
            <link rel="stylesheet" type="text/css" href="./public/css/styles.css">
          </head>
          <body>
            <h1 class="greeting">Welcome to Restful Backend!</h1>
          </body>
        </html>
      `);
    }
  });

  sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });