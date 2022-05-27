import React from "react";
import Default from "./layouts/default";

function FourOhFour({arrayIndex}){

    let msg = (
        <h3>Page not found. Go <a href="/breads">home</a>
        </h3>
    )
    if (arrayIndex) {
        msg = (
        <h2>
            The ID#{arrayIndex} does not exist. Please redirect back to the <a href="/breads">home</a> and try again!
        </h2>
        );
    }
    return <Default>
        {msg}
    </Default>;
}
export default FourOhFour;