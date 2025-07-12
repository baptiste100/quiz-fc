import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {getUser} from "@/lib/auth/auth-server";
import Image from "next/image";

export default async function Account() {
    const user = await getUser();

    return (
        <div className="flex flex-col items-center p-5 gap-5 text-white bg-gradient-to-br from-stone-800 to-stone-950 border-transparent w-100 rounded-xl">
            <p className="text-2xl"> Mon compte </p>
            <div>
                <div className="flex flex-col items-center text-2xl gap-5">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        {  user?.image &&
                            <Image className="w-full h-full object-cover" src={user.image} alt="user image" width={40} height={40}/>
                        }
                    </div>
                    <p>{user?.name}</p>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3 items-start">
                    <p>email : {user?.email}</p>
                </div>
            </div>
        </div>
    )
}