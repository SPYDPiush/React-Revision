import {Client,Storage,Database, Query,ID} from "appwrite";
import conf from "../Conf/Conf";

export class DatabaseService {

  client = new Client()
  storage;
  database;

  constructor(){

    this.client
    .setEndpoint(conf.appwriteurl)
    .setProject(conf.projectid)

    this.storage = new Storage(this.client)
    this.database = new Database(this.client)
  }

    async createpost({slug,title,content,featureimage,status,userid}){

      try{

      return await this.database.createDocument(conf.databaseid,conf.collectionid,slug,{
        title,
        content,
        featureimage,
        status,
        userid
      })
    }
    catch(err){
      throw err
    }

  }

  async updatepost(slug,{title,content,featureimage,status}){
    return await this.database.updateDocument(conf.databaseid,conf.collectionid,slug,
    {
      title,
      content,
      featureimage,
      status
    })

  }

  async deletepost(slug){
    try{
   await this.database.deleteDocument(conf.databaseid,conf.collectionid,slug) 
   return true
    }
    catch(err){
      console.log(err)
      return fale
    }
  }


  async singlepost(slug){

    try{
      return await this.database.getDocument(conf.databaseid,
        conf.collectionid,
        slug)
      
    }
    catch(err){
      console.log(err)
    }
    
  }

  async postlist(queries =  [
    Query.equal('stauts',"true")
  ]){

    try{
      return await this.database.listDocument(conf.databaseid,conf.collectionid,queries
     )
    }
    catch(err){
      throw err

    }
  }









  // /////////// 
  // file uploading services

  async fileupload(file){
    try{

      return await this.storage.createFile(conf.bucketid,ID.unique(),file)
    }
    catch(err){
      throw err
      return false
    }
  }


  async deletefile(fileId){
    try {

      await this.storage.deleteFile(conf.bucketid,fileId)
      return true
      
    } catch (err) {
      console.log(err)
      return false
      
    }
  }

  filepreview(fileId){
    return this.storage.getFilePreview(conf.bucketid,fileId)
  }  // file preview not return any promise that is why we execute without async and await method.


}


const databaseservice = new Database()

export default databaseservice;