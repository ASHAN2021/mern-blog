import express from "express";
import { verifyToken } from "../utills/VerifyUser.js";
import { create ,getAds ,deleteAd ,updateAd} from "../controllers/Ad.controller.js";

const router = express.Router();

router.post('/create' ,verifyToken,create);
router.get('/getAds',verifyToken, getAds);
router.delete('/deleteAd/:AdId',verifyToken,deleteAd);
router.put('/updateAd/:AdId',verifyToken,updateAd);

export default router;