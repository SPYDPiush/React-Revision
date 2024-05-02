import { Client, Account, ID } from "appwrite";
import conf from "../Conf/Conf";

export class Authservice {
  client = new Client();
  account;

  constructor() {
    this.client
    .setEndpoint(conf.appwriteurl)
    .setProject(conf.projectid);

    this.account = new Account(this.client);
  }

  async createAccount({email,password,name}) {
    try {
      const createacc = await this.account.create(ID.unique(), email, password,name);

      if (createacc){
        // if account create then direct login to that user.
        // we have second option also available where you send a successful mgs for creating user.then after that login.
        return this.login({email,password})

      }
      else{
        return createacc

      }
    } catch (error) {
      throw error;
    }
  }

  async login({email,password}){

    try{

      return await this.account.createEmailSession(email,password)

    }
    catch(err){

      throw err

    }
  }

  async getCurrentUser() {


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

const authservice = new Authservice();


export default authservice;
