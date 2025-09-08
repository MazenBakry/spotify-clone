import { clerkClient, clerkMiddleware } from "@clerk/express";

export const protectRoute = async (req,res,next) => {
    if(!req.auth.userId){
        return res.status(401).json({message: "Unauthorized - You must be logged in"});
    }
    next();
};

export const requireAdmin = async (req,res,next) =>{
    try{
        const currUser = await clerkClient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMIN_EMAIL === currUser.primaryEmailAddress?.emailAddress;
        if(!isAdmin){
            return res.status(403).json({message: "Unauthorized - you must be an admin"});
        }
        next();
    }
    catch(error){
        next(error);
    }
};