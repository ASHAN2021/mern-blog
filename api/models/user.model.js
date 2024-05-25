import mongoose from "mongoose";
 
const usersSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        
    },
    profilePicture:{
        type:String,
        default:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACUCAMAAABcK8BVAAAAMFBMVEXk5ueutLfp6+ymrbCrsbTc3+DT1tjf4uPIzM6zubzAxce4vcDO0tS7wMPX2tyxtrpMsqpRAAADOUlEQVR4nO2b25arIAxASbioqPj/fzvYOqudTqeSIIF1Dvutb3sFSCKkSnU6nU6n0+l0Op1Op9PpdN6DSg3WLWPE2aG2zRM4LH42WpsdbWD2bpdtgDADGHgm/vKhtpZSbtLwBqNXVzdyYTLvxG5yZq256/zbiD3kllpidv4zZN9yax0zdyZ2OxC2UbMdK30acPm4zZ4DJ51GUmO2I3tQA8EMQFRto5gZL2jmSUEDM0odBVxoZgBabLtRzcRSL45kNTBORM2SzsDBJLHbOEGLu00ibMgxA5gFzMjH80CgXq08MzMWN2Mdgp2t+EGg1PUflE+7xBr1oHg3jhPTDGAtvaKpHeRvpsJmlq+2Ff5M4Ga1nbKZjVelDsrWKvR8s8JHFJm1oHW1sqXqX1UrvKANH4N2k0fDKbflQtVweUe2WfmmqN1WsuUGnP3ZUv77nVsPBD72Wv5EZl4sFD+fqunrmIYvsVq++mPsNrG3KiSnXblr5nYv5yO0oIk+PTb8EESq8tJPoskZRPzRMb2Wij/VqpYfuJUamh0LUKfDFLraMEXccJ9GUKDqCIpC5bZGB3d23ow7GfB1tv8LeAyJmfuQmIZ5dEP9iD04RusW10S4nsAf1LY52E1siAHzfo1472PkwlBXENUQ3Oi3YxTxcQb2DadhHZdgawwmogrjPMGT0q/0EZmkxyZxsOOs/5Z6SXDgg8zRQIxeQOokY/S8K7/3hmVjfb0bUzYJo/V/18xzubXcx2is5RmXzLdqVqQVwbDmid3tpuvl7BVid7lLlxXjR8o1Yjt6ve5zAS0tWZxh4LIbys9tNktuuiSTnM8sc9xgyV5U9tXtGTp3tjPrJe8zJvNhqMRiPuRyTupa0gxyLh14lZyACUy3oqt5wHJDCTMwjC98ZL8u0pjobqXy2Stmpi5pxhs71Y16Pc4f7qNDu1EV2mh3NoqZlTSjLankcu6kLyn76Z+J8clhkw4a6MTOEoNY4vgmNWwZU8F80sJmK5gljlqUa2w/kPZPibmCWex4E8yGGkFLW1HppHaQ0IBI9WmvmPOgZczO5ZGw2WqpnV8gyTYdT5y3H0FXIqFWYS3O91qn0+l0/j++AGJsKtzjfxzBAAAAAElFTkSuQmCC',
    },
    isAdmin:{
        type:Boolean,
        default: false,
        }
},{timestamps:true}
);

const User =mongoose.model('User', usersSchema)

export default User;