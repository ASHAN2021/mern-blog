import Ad from "../models/Ad.model";
import { errorHandler } from "../utills/error";

export const create = async (req, res, next)=>{

    if (!req.user.isAdmin) {
        return next(errorHandler(403, 'You are not allowed to create a post'));
      }
    
      if (!req.body.title) {
        return next(errorHandler(400, 'Please provide all required fields'));
      }  

      const newAdd = new Add({
        ...req.body,
        
        userId: req.user.id,
      });

    try {
       
          await newAdd.save();

          res.status(200).json(newAdd);
    } catch (error) {
        next(error);
        
    }
};

export const getAds =async (req,res,next) =>{
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.order === 'asc' ? 1 : -1;
      const Ads = await Ad.find({
        ...(req.query.AdId && { _Id: req.query.AdId }),
        
      })
        .sort({ createdAt: sortDirection })
        .skip(startIndex)

      res.status(200).json({
        Ads
      });
    } catch (error) {
      next(error);
    }
  };

  export const deleteAd = async (req,res,next)=>{
    if (!req.user.isAdmin) {
      return next(errorHandler(403, 'You are not allowed to delete this post'));
    }
    try {
      await Add.findByIdAndDelete(req.params.addId);
      res.status(200).json('The Add has been deleted');
    } catch (error) {
      next(error);
    }
  };

  export const updateAd = async(req,res,next) =>{
    if (!req.user.isAdmin) {
      return next(errorHandler(403, 'You are not allowed to update this post'));
    }
  
    try {
  
      const updatedAd = await Add.findByIdAndUpdate(
        req.params.addId,
        {
          $set: {
            title: req.body.title,
            image: req.body.image,
          },
        },
        { new: true }
      );
      res.status(200).json(updatedAd);
      
    } catch (error) {
      next(error);
    }
  }
  