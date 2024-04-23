import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import './Carousel.css'
import ProductCard from "../ProductCard/ProductCard";


function Carousel({content, type}) {
    const [items, setItems] = React.useState(content);
    const [selected, setSelected] = React.useState([]);

    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick =
        (id) =>
            ({ getItemById, scrollToItem }) => {
                const itemSelected = isItemSelected(id);

                setSelected((currentSelected) =>
                    itemSelected
                        ? currentSelected.filter((el) => el !== id)
                        : currentSelected.concat(id),
                );
            };

    return (
        <div>
            <ScrollMenu>
                {items.map(({ id, title, img }) => (
                    <ProductCard
                        itemId={id} // NOTE: itemId is required for track items
                        content={{title: title, img: img }}
                        key={id}
                        onClick={handleClick(id)}
                        selected={isItemSelected(id)}
                        type={type}
                    />
                ))}
            </ScrollMenu>
        </div>
    );
}


export default Carousel;