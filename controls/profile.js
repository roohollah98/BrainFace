export const handlerProfile=(req,res,db)=>
{
    const {ID}=req.params;
    console.log(ID);
    db.select('*').from('users').where({id:ID}).then(user=>{
        if(user.length){
            res.json(user[0]);
        }
        else{
            res.status(400).json('not found');
        }
  
    })
    .catch(err=>{
        res.json('errooor');
    })

}