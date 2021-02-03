import Clarifai from 'clarifai'
const app=new Clarifai.App({apiKey:'17ec4a16c7c341c691b488fa8a5466ce'});

const imageApiCall=(req,res)=>{
    app.models.predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{res.status(400).json('unable to work with api')})
}

const handlerImage=(req,res,db)=>{
    const {id}=req.body;
      
    db('users').where('id','=',id).increment('entries',1).returning('entries').then(entries=>{
       
           res.json(entries[0]);
   
      
    }).catch(err=>{
        res.json('errror');
    })
}



export{handlerImage,imageApiCall}