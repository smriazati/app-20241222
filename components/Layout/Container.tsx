import { ReactNode } from "react"

export const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col lg:max-w-[80%] mr-auto gap-4 p-4">
            {children}
        </div>
    )
}       
