import express from "express";
import { verifyToken } from "../utills/VerifyUser.js";
import { create ,getAds ,deleteAd ,updateAd} from "../controllers/Ad.controller.js";

const router = express.Router();

router.post('/create' ,verifyToken,create);
router.get('/getAds',verifyToken, getAds);
router.delete('/deleteAd/:addId',verifyToken,deleteAd);
router.put('/updateAd/:addId',verifyToken,updateAd);

export default router;