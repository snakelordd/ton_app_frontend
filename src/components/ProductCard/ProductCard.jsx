import React from "react";
import './ProductCard.css'

import { VisibilityContext } from "react-horizontal-scrolling-menu";

function getCard (type, content, callback, selected, visibility) {
    return <div
        onClick={() => callback(visibility)}
        style={{backgroundImage: `url("/${content.img}")`}}
        className='w-80 border-1 p-10 flex items-center justify-center m-[8px] rounded-2xl card-wrapper'
    >
        <div className="card flex flex-col justify-end h-full w-full items-center p-6">
            <div >{content.title}</div>
        </div>
    </div>

}
function ProductCard({ onClick, content, selected, itemId,  type = 'product'}) {
    const visibility = React.useContext(VisibilityContext);
    const visible = visibility.useIsVisible(itemId, true);

    return getCard(type, {visible, ...content}, onClick, selected, visibility);
}

export default ProductCard