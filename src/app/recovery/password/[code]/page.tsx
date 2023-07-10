import React from "react";
import NewPassword from "@/views/recovery/NewPassword";

export default async function Page({ params: { code }, }: { params: { code: string }}) {
        
    return (
        <NewPassword code={code} />
    )
}