import Button from "@/components/ui/Button";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";

const Page = async ({}) => {
    const session = await getServerSession(authOptions)

    return (<pre>{JSON.stringify(session)}</pre>)
}

export default Page