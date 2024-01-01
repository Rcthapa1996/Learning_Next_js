import { ReactNode } from "react";

export const metadata = {
    title: 'Dashboard',
    description: 'This is Dashboard',
}

const DsahboardLayout = ({children}:{children: ReactNode}) => {
    return (<div>{children}</div>)
}

export default DsahboardLayout;