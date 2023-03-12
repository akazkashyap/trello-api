# trello-api
Created with mongoose and express.

#Get All Data
Endpoint : "/"
Request Type : Get
Params : None

#Add New Group
EndPoint = "/add-group"
Request Type : Post
Params : None
Body:{title:String}

#Add New Item To A Group
Endpoint : "/add-item"
Request Type : Post
Params : None
Body:{
      _id:<Id of the group>,
      title:String,
      description:String
}

