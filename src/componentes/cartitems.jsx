const Cartitems = ({ items }) => {
    return (
        <div className="position-absolute bg-primary">
            {items.map((item) => (
                <div key={item.id}>
                    <span style={{ fontSize: "20px", color: "white" }}>{item.product.title} - ${item.product.price}</span>
                </div>
            ))}
        </div>
    );
};

export default Cartitems;
