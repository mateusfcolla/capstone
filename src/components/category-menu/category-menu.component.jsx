import './category-menu.styles.scss';
import CategoryItem from "../category/category.component.jsx";

const CategoryMenu = () => {

    const categories = [
        { id: 1, name: 'Hats', imageUrl: 'https://fcdrycleaners.com/wp-content/uploads/2023/09/Do-Dry-Cleaners-Clean-Hats-A-Complete-Guide-To-Hat-Cleaning-998x570.jpg' },
        { id: 2, name: 'Sneakers', imageUrl: 'https://media.voguebusiness.com/photos/60140c4680e198421a9ec8d1/master/pass/sneakers-sustainability-voguebus-janine-abrenilla-jan-21-promo.jpg' },
        { id: 3, name: 'Womens', imageUrl: 'https://img.freepik.com/free-photo/attractive-stylish-smiling-woman-choosing-apparel-clothing-store_285396-4642.jpg' },
        { id: 4, name: 'Mens', imageUrl: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c49ccc7e3f5d2601734413c87cdf619c.jpg' },
    ];

    return (
        <div className="c-category-menu">
            {categories.map(category => (
                CategoryItem({ category })
            ))}
        </div>
    )
}

export default CategoryMenu