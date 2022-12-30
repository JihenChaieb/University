import {gql} from "apollo-server"
export const typeDef = gql`
type Lead{
    _id:ID
    firstName:String
    lastName:String
    email:String
    phone:Int
    password:String
    civilite:String
    cin:String
    login:String
    pays:String
    birthDate:String
    birthPlace:String
    adresse:String
    type_bac:String
    annee_bac:String
    bac_files:String
    titre_dernier_diplome:String
    annee_dernier_diplome:String
    dernier_dernier_file:String
    faculte:String
    parcours:String
    specialite:String
    niveau:String
    photo:String
    copie_cin:String
    releve_note:String
    devise:String
    tranche:String
    service:String
    status:String
    sexe:String
    role:String
    
}
extend type Query {
 getLeads : [Lead]
 getLead(_id:ID): Lead
 
}
extend type Mutation {
    addLead(
        firstName:String
        lastName:String
        email:String
        phone:Int
        password:String
        civilite:String
        cin:String
        login:String
        pays:String
        birthDate:String
        birthPlace:String
        adresse:String
        type_bac:String
        annee_bac:String
        bac_files:String
        titre_dernier_diplome:String
        annee_dernier_diplome:String
        dernier_dernier_file:String
        faculte:String
        parcours:String
        specialite:String
        niveau:String
        photo:String
        copie_cin:String
        releve_note:String
        devise:String
        tranche:String
        service:String
        status:String
        sexe:String
        role:String
        
    ):Lead
    
    updateLead(
        _id:ID
        firstName:String
        lastName:String
        email:String
        phone:Int
        password:String
        civilite:String
        cin:String
        login:String
        pays:String
        birthDate:String
        birthPlace:String
        adresse:String
        type_bac:String
        type_bac:String
        annee_bac:String
        bac_files:String
        titre_dernier_diplome:String
        annee_dernier_diplome:String
        dernier_dernier_file:String
        faculte:String
        parcours:String
        specialite:String
        niveau:String
        photo:String
        copie_cin:String
        releve_note:String
        devise:String
        tranche:String
        service:String
        status:String
        sexe:String
        role:String
    ):Lead

    rejectLead(
        _id:ID
        firstName:String
        lastName:String
        email:String
        phone:Int
        password:String
        civilite:String
        cin:String
        login:String
        pays:String
        birthDate:String
        birthPlace:String
        adresse:String
        type_bac:String
        type_bac:String
        annee_bac:String
        bac_files:String
        titre_dernier_diplome:String
        annee_dernier_diplome:String
        dernier_dernier_file:String
        faculte:String
        parcours:String
        specialite:String
        niveau:String
        photo:String
        copie_cin:String
        releve_note:String
        devise:String
        tranche:String
        service:String
        status:String
        sexe:String
        role:String
    ):Lead

    deleteLead(
        _id:ID
        
    ):Lead

}

`