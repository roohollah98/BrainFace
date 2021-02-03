export const handleSignup=(bcrypt,db)=>(req,res)=>{
   const {email,password}=req.body;
   if(!email||!password){
       return res.status(400).json('incorrect from submition');
   } 

    db.select('*').from('login').where({email:email})
    .then(data=>{
      var match=bcrypt.compareSync(password,data[0].hash);
      if(match){
         return db.select('*').from('users').where('email','=',req.body.email).then(user=>{
              res.json(user[0]);
          }).catch(err=>{
              res.status(400).json('unable to get user');
          })
      }
      res.status(400).json('wrong credential');
    }).catch(err=>{
        res.status(400).json('wron credential');
    })
}