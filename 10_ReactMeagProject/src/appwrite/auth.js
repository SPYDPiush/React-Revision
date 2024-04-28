import { Client, Account, ID } from "appwrite";
import conf from "../Conf/Conf";

export class Authservice {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteurl).setProject(conf.projectid);

    this.account = new Account(this.client);
  }

  async createAccount() {
    try {
      const createacc = await this.account.create(ID.unique(), email, password);

      if (createacc){
        // if account create then direct login to that user.
        // we have second option also available where you send a successful mgs for creating user.then after that login.

      }
      else{

      }
    } catch (error) {
      throw error;
    }
  }

  async login(){

    try{

      return this.account.createEmailSession({email,password})

    }
    catch(err){

      throw err

    }
  }

  async currentSession() {


    try{
      return await this.account.get()
    }
    catch(err){
      throw err
    }
  }

  async logout(){
    try{
      await this.account.deleteSessions();

    }
    catch(err){

      throw err

    }
  }
}

export const authservice = new Authservice();


export default Authservice;
