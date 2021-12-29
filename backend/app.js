//Import express
const express = require('express');
//Import model Product
const Product = require('./models/product');
//Import Body-Parser
const bodyParser = require('body-parser');
//Import Multer
const multer = require('multer');
//Import path
const path = require('path');


//Instance express in App
const app = express();

//import model Contrat
const Contrat =require('./models/contrat');


// import model User
const User = require('./models/user');
//Import model Mesure
const Mesure = require('./models/mesure');
//Import model demnade
const Demande = require('./models/demande');
//Import Model Contact
const Contact = require('./models/contact')
// import mongoose
const mongoose = require('mongoose');

//import bcrypt
const bcrypt = require('bcrypt');

// Connect to Data Base
mongoose.connect('mongodb://localhost:27017/WaterDB', { useNewUrlParser: true, useUnifiedTopology: true });

//Body-Parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*********************** Multer ********************/
//:::::::::::::Accès aux fichiers:::::::::::::::::://

//Accès aux fichiers images
app.use('/images', express.static(path.join('backend/images')))

//Configuration multer :

//Etape 1 : Définition des extensions selon le type de media
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpeg': 'jpg'
}

//Etape 2 : Défintion des destinations et les noms des fichiers
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {   // cb : variable de succès
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        //Affecter la destination
        cb(null, 'backend/images')
    },
    //file name
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' +
            '.' + extension;
        //Affecter file name
        cb(null, imgName);
    }
});


/***************************************************/

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
//********************************************************************************************************* */


var emailRouter = require('./routes/emailRoute');
const contact = require('./models/contact');
app.use('/email',emailRouter);

// Traitement  de get user by id
app.get('/api/users/:id', (req, res) => {
    console.log("here in function get user by id");

    // etape 1
    let id = req.params.id;
    console.log("id user to search", id);


    // etape 2
    User.findOne({ _id: id }).then(
        (doc) => {
            console.log("finded User", doc);
            res.status(200).json({
                user: doc
            })
        }
    )
})

// traitement edit user

app.put('/api/users/:id', (req,res) =>{
    console.log("here in function edit user");
    
    let user = {
        _id :req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        tel: req.body.tel,
        role: req.body.role
    
    };
    User.updateOne({_id : req.body._id},user).then(
    (result)=>{
    
        console.log("result update", result);
        res.status(200).json({
            message : "edited with success"
        });
    }
    
    
    )
    } )
// traitement de delete User
app.delete('/api/users/:id', (req, res) => {
    let id = req.params.id;
    console.log("here in fucntion delete user");

    User.deleteOne({_id:id}).then(
        (result) => {
            console.log("delete result", result);

            if (result) {
                // success
                res.status(200).json({
                    message: "User deleted with success"
                })
            }

        })
})

//:::::::::::::::::::::::::::::::::::::::::::::::::://
//:::::::::::::::::CRUD Products::::::::::::::::::::::://
//:::::::::::::::::::::::::::::::::::::::::::::::::://

//Traitement add Product
app.post('/api/addProduct', multer({ storage: storage }).single('img'), (req, res) => {
    //Etape1
    console.log('Here Function addProduct');

    let url = req.protocol + '://' + req.get('host');
    console.log("body", req.body);
    Product.findOne({ type: req.body.type}).then(
        (doc) => {
            if (doc) {
                res.status(200).json({
                    message: "Product already exist"
                })

            } else {

                let product = new Product({
                    type: req.body.type,
                    price: req.body.price,
                    volume: req.body.volume,
                    pression:req.body.pression,
                    economie: req.body.economie,
                    conception :req.body.conception,
                    list: req.body.list,
                    description: req.body.description,
                    role : req.body.role,
                    img: url + '/images/' + req.file.filename

                });

                //Etape2
                product.save();

                //Etape3
                res.status(200).json({
                    message: 'Product added with  success'
                })

           


            }
        }
    )



});



//Traitement get Products
app.get('/api/allProducts', (req, res) => {
    console.log("Here in function get All Products");

    //Etape 1
    Product.find((err, docs) => {
        if (err) {
            console.log("Error in DB");
        } else {
            //Success
            res.status(200).json({
                products: docs
            })
        }
    })

})


//Traitement get Product by ID
app.get('/api/allProducts/:id', (req, res) =>{
    console.log('Here in Function get by ID');

    let id = req.params.id;
    console.log('id Product by id', id);

    Product.findOne({_id : id}).then(
        (doc) => {
            console.log('finded Product', doc);
            res.status(200).json({
                product:doc
            })
        }
    )
})

//:::::::::::::::::::::::::::::::::::::::::::::::::://
//:::::::::::::::::CRUD Users::::::::::::::::::::::://
//:::::::::::::::::::::::::::::::::::::::::::::::::://

// traitement create user
app.post('/api/users', (req, res) => {

    console.log(req.body);
    User.findOne({email : req.body.email}).then(
    (doc) =>{
        if (doc) {
            res.status(200).json({message : "user exist"});
        }else{
            bcrypt.hash(req.body.password, 10).then(cryptedPassword => {
    
                let user = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: cryptedPassword,
                    tel: req.body.tel,
                    role: req.body.role
            
                });
            
                // etape 2 
                user.save();
            
                // etape 3
            
                res.status(200).json({
                    message: 'User added with sucess'
                })
                })
        }
    }
    
    
    
    )
      
    });


//traitement de login
app.post("/api/login", (req, res) => {
    console.log("Here in login", req.body);
    User.findOne({ email: req.body.email }).then(
        (resultEmail) => {
            console.log("resultEmail", resultEmail);
            if (!resultEmail) {
                res.status(200).json({
                    findedUser: "incorrect"
                });
            }
            return bcrypt.compare(req.body.password, resultEmail.password);
        })
        .then(
            (resultPwd) => {
                console.log("resultPwd", resultPwd);
                if (!resultPwd) {
                    res.status(200).json({
                        findedUser: "incorrect"
                    });
                }
                else {
                    User.findOne({ email: req.body.email }).then(
                        (result) => {
                            console.log("result", result);
                            res.status(200).json({
                                findedUser: result
                            })
                        }
                    )
                }
            })
});

//Tritement de get All Users

app.get('/api/users', (req, res) => {
    console.log('hello in be to get all Users');

    // Etape 1
    User.find((err, docs) => {
        if (err) {
            console.log('error in DB');
        }
        else {
            // succes
            res.status(200).json({
                users: docs
            });
        }

    });
});
// Traitement  de get user by id
app.get('/api/users/:id', (req, res) => {
    console.log("here in function get user by id");

    // etape 1
    let id = req.params.id;
    console.log("id user to search", id);


    // etape 2
    User.findOne({ _id: id }).then(
        (doc) => {
            console.log("finded User", doc);
            res.status(200).json({
                user: doc
            })
        }
    )
})

// traitement edit user

app.put('/api/users/:id', (req,res) =>{
    console.log("here in function edit user");
    
    let user = {
        _id :req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        tel: req.body.tel,
        role: req.body.role
    
    };
    User.updateOne({_id : req.body._id},user).then(
    (result)=>{
    
        console.log("result update", result);
        res.status(200).json({
            message : "edited with success"
        });
    }
    
    
    )
    } )
// traitement de delete User
app.delete('/api/users/:id', (req, res) => {
    let id = req.params.id;
    console.log("here in fucntion delete user");

    User.deleteOne({_id:id}).then(
        (result) => {
            console.log("delete result", result);

            if (result) {
                // success
                res.status(200).json({
                    message: "User deleted with success"
                })
            }

        })
})

//:::::::::::::::::::::::::::::::::::::::::::::::::://
//:::::::::::::::::CRUD Contrats:::::::::::::::::::://
//:::::::::::::::::::::::::::::::::::::::::::::::::://

//traitement de add contrat
app.post("/api/contrat" , (req,res) =>{

    console.log("here in contract", req.body);
    
    
    
    let contrat = new Contrat({
      type : req.body.type,
      nombreVisites : req.body.nombreVisites,
      analyseEau : req.body.analyseEau ,
      depannagePrioritaire : req.body.depannagePrioritaire,
      services : req.body.services,
    
    });
    
      contrat.save();
                
        // etape 3
    
        res.status(200).json({
            message: 'Contrat added with sucess'
        })
    
    
    
    });
    
    //Traitement get contrats
    app.get('/api/contrat', (req, res) => {
        console.log("Here in function get All Contrats");
    
        //Etape 1
        Contrat.find((err, docs) => {
            if (err) {
                console.log("Error in DB");
            } else {
                //Success
                res.status(200).json({
                    contrats: docs
                })
            }
        })
    
    })
    
    //Traitement get contrat by ID
    app.get('/api/contrat/:id', (req, res) =>{
        console.log('Here in contrat get by ID');
    
        let id = req.params.id;
        console.log('id contrat by id', id);
    
        Contrat.findOne({_id : id}).then(
            (doc) => {
                console.log('finded contrat', doc);
                res.status(200).json({
                    contrat:doc
                })
            }
        )
    })




  
//:::::::::::::::::::::::::::::::::::::::::::::::::://
//:::::::::::::::::CRUD Mesures:::::::::::::::::::://
//:::::::::::::::::::::::::::::::::::::::::::::::::://

//traitement addMesure
app.post('/api/addMesure', (req,res)=>{
    console.log('Here in function addMesure');

                let mesure  = new Mesure({
                    region : req.body.region,
                    chlore : req.body.chlore,
                    calcaire : req.body.calcaire,
                    residu : req.body.residu

                });
                console.log(mesure);

                //Etape2
                mesure.save();

                //Etape3
                res.status(200).json({
                    message: 'Mesures added with  success'
                })

});

//Traitement All Mesures
app.get('/api/AllMesures', (req, res) => {
    console.log("Here in function get All Mesures");

    //Etape 1
    Mesure.find((err, docs) => {
        if (err) {
            console.log("Error in DB");
        } else {
            //Success
            res.status(200).json({
                mesures : docs
            })
        }
    })

})

//Traitement de search Mesure
app.post('/api/search', (req, res) => {
 
    console.log('Hello in search ');

    //Etape 1 : Récupération du searchValue
    let searchValue = req.body.searchValue;
    console.log('searchValue',searchValue);

    //Etape 2 : Recherche 
    Mesure.find({
        $or : [ {region : { $regex : `.*${searchValue}`}},
                {region : { $regex : `.*${searchValue}`}}
        ]
    }).then(
        (docs) =>{
            if (docs) {
                console.log('resuly',docs);
                res.status(200).json({
                    mesure : docs
                })
            }
        }
    )


})

//:::::::::::::::::::::::::::::::::::::::::::::::::://
//:::::::::::::::::CRUD Demande:::::::::::::::::::://
//:::::::::::::::::::::::::::::::::::::::::::::::::://

//Traitement add Demande
app.post('/api/demande', (req,res)=>{
    console.log('Here in demande');

    let demande = new Demande({
        idClient : req.body.idClient,
        client : req.body.client,
        email : req.body.email,
        idProduct : req.body.idProduct,
        product : req.body.product,
        validation : req.body.validation,
        etat : req.body.etat
    });
    console.log(demande);

    demande.save();
    

    res.status(200).json({
        message: 'demande added with  success'
    })
})

//Traitement All demandes
app.get('/api/AllDemandes', (req, res) => {
    console.log("Here in function get All Demandes");

    //Etape 1
    Demande.find((err, docs) => {
        if (err) {
            console.log("Error in DB");
        } else {
            //Success
            res.status(200).json({
                demandes: docs
            })
        }
    })

    //Etape 2

})

//Traitemment myDemande
app.get('/api/myDemandes/:id', (req, res) => {
    console.log('Here in getmyDemandes');

    let id = req.params.id
    Demande.find({ idClient: id }, (err, docs) => {
        if (err) {
            console.log("Error in DB");
        } else {
            res.status(200).json({
                myDemandes: docs
            })
        }
    })
})

//Traitement de delete demande 
app.delete('/api/myDemandes/:id', (req, res) => {
    console.log("Here in function delete demande");

    //Etape 1
    let id = req.params.id;
    console.log("demande id to delete:", id);

    //Etape 2
    Demande.deleteOne({ _id: id }).then(
        (result) => {
            console.log("delete result", result);

            if (result) {
                //Success
                res.status(200).json({
                    message: "Demande deleted with success"
                })
            }

        })


})

  //Traitement get demande by ID
app.get('/api/AllDemandes/:id', (req,res)=>{
    console.log('Here in Deamande get by ID');

    let id = req.params.id;
    console.log('id contrat by id', id);

    Demande.findOne({_id : id}).then(
        (doc)=>{
            console.log('finded contrat', doc);
            res.status(200).json({
                demande:doc
            })
        }
    )

})


    //Traitement get demande by ID
    app.get('/api/AllDemandes/:id', (req, res) =>{
        console.log('Here in demande get by ID');
    
        let id = req.params.id;
        console.log('id demande by id', id);
    
        Demande.findOne({_id : id}).then(
            (doc) => {
                console.log('finded demande', doc);
                res.status(200).json({
                    contrat:doc
                })
            }
        )
    })



// traitement edit demande

app.put('/api/AllDemandes/:id', (req,res) =>{
    console.log("here in function edit demande");
    
    let demande = {
        _id :req.body._id,
        idClient : req.body.idClient,
        client : req.body.client,
        email : req.body.email,
        idProduct : req.body.idProduct,
        product : req.body.product,
        validation : req.body.validation,
        etat : req.body.etat
    
    
    };
    Demande.updateOne({_id : req.body._id},{etat:"Traitée"},demande).then(
    (result)=>{
    
        console.log("result update", result);
        res.status(200).json({
            message : "edited with success"
        });
    }
    
    
    )
    } )
//:::::::::::::::::::::::::::::::::::::::::::::::::://
//:::::::::::::::::CRUD Contact:::::::::::::::::::://
//:::::::::::::::::::::::::::::::::::::::::::::::::://
app.post('/api/contactCons', (req,res)=>{
    console.log('Here in send contact');

    let contact = new Contact({
        idClient: req.body.idClient,
        client: req.body.client,
        type: req.body.type,
        date: req.body.date,
        etat:req.body.etat
    })
    console.log(contact);

    contact.save();

    res.status(200).json({
        message: 'Contact send with  success'
    })
})

//get all contacts
app.get('/api/contactCons', (req,res)=>{
    console.log('Here in get contacts');

    Contact.find((err, docs) => {
        if (err) {
            console.log("Error in DB");
        } else {
            //Success
            res.status(200).json({
                contacts : docs
            })
        }
    })
   
   
})

//Traitemment delete myContact
app.get('/api/mycontact/:id', (req, res) => {
    console.log('Here in getmyContacts');

    let id = req.params.id
    Contact.find({ idClient: id }, (err, docs) => {
        if (err) {
            console.log("Error in DB");
        } else {
            res.status(200).json({
                myContacts: docs
            })
        }
    })
})

//Traitement de delete contact 
app.delete('/api/mycontact/:id', (req, res) => {
    console.log("Here in function delete contact");

    //Etape 1
    let id = req.params.id;
    console.log("contact id to delete:", id);

    //Etape 2
    Contact.deleteOne({ _id: id }).then(
        (result) => {
            console.log("delete result", result);

            if (result) {
                //Success
                res.status(200).json({
                    message: "contact deleted with success"
                })
            }

        })


})

//Traitement de get Contact by Id
app.get('/api/Contact/:id', (req, res) => {
    console.log("Here in function get Contact by id");

    //Etape 1
    let id = req.params.id;
    console.log("id Contact to search:", id);

    //Etape 2
    Contact.findOne({ _id: id }).then(
        (doc) => {
            console.log("finded Contact", doc);
            res.status(200).json({
                contact: doc
            })
        }
    )

})

//Traitement Edit contact
app.put('/api/mycontact/:id', (req, res) => {
    console.log('Here in function Edit Contact');
    //Etape 1
    let contact = {
        _id: req.body._id,  // Kn ma n7otouhec ya5l9 'id' jdid
        type: req.body.type,
        date: req.body.date,
        etat: req.body.etat,
        idClient: req.body.idClient
    };

    //Etape 2 
    Contact.updateOne({ _id: req.body._id }, contact).then(
        (result) => {
            console.log('Result Update', result);

            res.status(200).json({
                message: 'contact edited with success'
            });
        }
    )




})



//traitement search 


app.post('/api/search', (req, res) => {
    console.log('here in search value',);

    //etape 1 : recuperation de la valeur 
    let searchValue = req.body.searchValue;

    console.log("searchValue", searchValue);

    //etape 2 : la recherche

    Mesure.find({  region: {$regex: `.*${searchValue}` },

    }).then(
        (docs) => {
            if (docs) {
                console.log("result", docs);
                res.status(200).json({
                    mesures: docs
                })

            }
        }

    )


})


//Export App
module.exports = app;
