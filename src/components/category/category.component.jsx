import "./category.styles.scss";

const CategoryItem = ({ category }) => {
    return (
        <div className="c-category" key={category.id} style={{
            backgroundImage: `url(${category.imageUrl})`
          }} >
            <h2>{category.name}</h2>
            <button className="c-button" href="">Shop Now</button>
        </div>
    )
}

export default CategoryItem