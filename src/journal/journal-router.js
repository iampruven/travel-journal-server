const express = require("express");
const jsonParser = express.json();
const JournalService = require('./journal-service')
const JournalRouter = express.Router();

JournalRouter
    .route('/')
    .get((req,res,next)=>{
        const knex = req.app.get("db"); 
        console.log(knex);
        // const user_id = req.user.id;
        const user_id = 1;
        

        JournalService.getAllJournal(knex, user_id)
            .then((journals) => {
                console.log(journals)
              res.status(200).json(journals);
            })
            .catch(next);
    })
    .post(jsonParser, (req,res,next)=>{
        const { journal_title } = req.body;
        const user_id = 1;
        const knex = req.app.get("db");

        JournalService.createJournal(knex,journal_title,user_id)
            .then((results)=>{
                if(!results){
                    console.log(results);
                    return res.status(400).json({ error: `Title incomplete or does not exist.` })
                }
                res.status(201).json(results)
            
            })
            .catch(next)

    })
JournalRouter
    .route('/:id')
    .get((req,res,next)=>{
        const { id } = req.params;
       // const user_id = 1;//req.user.id
        const knex = req.app.get("db");
        JournalService.getSpecificJournal(knex,id)
            .then((specificJournal)=>res.status(200).json(specificJournal))
            .catch(next)
    })
    .delete((req,res,next)=>{
        const { id } = req.params;
    const user_id = 1;//req.user.id
    const knex = req.app.get("db");
    JournalService.deleteJournal(knex, id, user_id)
      .then(() => res.status(204).end())
      .catch(next);
    })

module.exports = JournalRouter;