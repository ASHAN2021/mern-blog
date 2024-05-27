import mongoose from "mongoose";

const Adschema =new  mongoose.Schema(
    {
        userId: {
          type: String,
          required: true,
        },
        
        title: {
          type: String,
          required: true,
          unique: true,
        },
        image: {
          type: String,
          default:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.htmlpanda.com%2Fblog%2Felearning-website-development-guide%2F&psig=AOvVaw2jmk98hdnHLcUd4QmeWy7G&ust=1716803921235000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDd35SHq4YDFQAAAAAdAAAAABAE',
        },
      },
      { timestamps: true }
);

const Ad = mongoose.model('Ad',Adschema);

export default Ad;

