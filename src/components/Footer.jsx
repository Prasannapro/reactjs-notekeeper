import React from "react";

function Footer(){
    const copy=new Date().getFullYear();
    return (<footer><p>
        Copyright @ {copy}
    </p>
       <p>Made By Prasanna</p>
    </footer>
    )
}

export default Footer;