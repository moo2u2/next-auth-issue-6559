import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export type MyComponentProps = {
    sessionName?: string;
}

const MyComponent = ({ sessionName }: MyComponentProps) => {
    return (
        <div>This is my component using auth: {sessionName}</div>
    )
}

// @ts-ignore only using context but the other 2 are injected
export const getServerSideProps: GetServerSideComponentProps = async (rendering, layoutData, context) => {  
    const session = await getServerSession(context.req, context.res, authOptions); 
    return {
        props: {
          sessionName: session?.user?.name ?? null
        }
    }
}

export default MyComponent;