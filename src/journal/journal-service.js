const JournalService = {
    getAllJournal(knex, user_id){
        return knex
            .select('*')
            .from('journal')
            .where('user_id',user_id);
    },
    getSpecificJournal(knex, journal_id){
        return knex
            .select('*')
            .from('journal')
            .where('id', journal_id)
    },
    createJournal(knex,journal_title,user_id){
        return knex
            .insert({user_id:user_id,journal_title:journal_title})
            .into('journal')
            .returning('*');
    },
    deleteJournal(knex,id,user_id){
        return knex("journal")
            .where({ id:id, user_id:user_id })
            .del();
    }
};

module.exports = JournalService;