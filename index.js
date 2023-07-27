import express from 'express';
import { sequelize } from './database.js';
import { Receta } from './receta.js';
import { Usuario } from './usuario.js';
const app = express();

app.get('/', (req, res) => {
    res.send('Choo Choo! Welcome to your Express app 🚅');
})

app.get("/json", (req, res) => {
    res.json({"Choo Choo": "Welcome to your Express app 🚅"});
})

app.get("/jsonBin", (req, res) => {
    res.json({"Choo Choo": "Welcome to your Express app"});
})

app.get("/info", (req, res) => {
    res.json({
        status: true,
        message: 'Welcome to the ExpressJS server',
        version: '1.0.0'
    })
});

app.get("/receta", (req, res) => {   
    /*try {
        const data = sequelize.query("SELECT * FROM persona.users", { type: sequelize.QueryTypes.SELECT});
        res.json({
            status: true,
            message: 'Usuarios obtenidos correctamente',
            bodu: data
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }*/

    sequelize.query("SELECT * FROM alimentos.receta", { type: sequelize.QueryTypes.SELECT})
    .then((resultados) => {
        res.json(resultados);
    });
});

app.get("/usuario", (req, res) => {   
    /*try {
        const data = sequelize.query("SELECT * FROM persona.users", { type: sequelize.QueryTypes.SELECT});
        res.json({
            status: true,
            message: 'Usuarios obtenidos correctamente',
            bodu: data
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }*/

    sequelize.query("SELECT * FROM alimentos.usuario", { type: sequelize.QueryTypes.SELECT})
    .then((resultados) => {
        res.json(resultados);
    });
});




const getUsers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = Receta.findAll();
            resolve(data);
        }, 2000);

    });
}
app.get("/recetas", (req, res) => {
    getUsers()
    .then((data) =>{
        console.log(data);
        return res.json({
            status: true,
            message: 'Usuarios obtenidos correctamente',
            bodu: data
        })
    })
    .catch((error) => {
        return res.status(500).json({ message: error.message });
    });

    /*try {
        const user = User.findAll();
        console.log(user);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }*/
    //getUsers();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



