import { User } from '@/app/mongodb/model/userModel'
import {MongoConnection} from '../../mongodb/DbConnection'
export const GET = async() => {

    await MongoConnection()

    const res = await User.find(null, ['-password'])
    


    return Response.json({message: 'Route is working', user: {userData: res}})
}