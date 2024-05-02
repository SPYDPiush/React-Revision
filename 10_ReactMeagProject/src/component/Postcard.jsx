import React from "react";
// import appwriteService from "../appwrite/config"
import databaseservice from "../appwrite/config";
import {Link} from "react-router-dom";


function Postcard({$id , title, featuredImage}){

  return(
    <Link to={`\post\${$id}`}>
    <div className="w-full rounded-lg bg-gray-400 py-4">
      <div className="w-full justify-center mb-4">
        <img src={`${databaseservice.filepreview(featuredImage)}`} alt={`${title}`}  className="rounded-xl"/>
      </div>
     <h1 className="text-xl text-gray-400 font-bold">
      {title}
     </h1>
    </div>
    </Link>
  )

}

export default Postcard;
