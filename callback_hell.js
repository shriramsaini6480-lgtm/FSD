function getUser(id,callback){
    setTimeout(()=>{
        console.log("User Fetched");
        const User={
            id:1,
            name:"shriram"
        }
        callback(null,User)
    },100)
}
function getProfile(userid,callback){
    setTimeout(()=>{
        console.log("Profile Fetched");
        const Profile={
            id:1,
            email:"shriramsaini009"
        }
        callback(null,Profile)
    },1000)
}
function getPosts(userid,callback){
    setTimeout(()=>{
        console.log("Posts Fetched");
        const Posts=["post1","post2","post3"]
        callback(null,Posts)
    },1000)
}
getUser(1,function(err,User){
    if(err){
        console.log(err);
        return;
    }
    getProfile(User.id,function(err,Profile){
        if(err){
            console.log(err);
            return;
        }
        getPosts(User.id,function(err,Posts){
            if(err){
                console.log(err);
                return;
            }
            console.log(User,Profile,Posts);
        });
    });
});