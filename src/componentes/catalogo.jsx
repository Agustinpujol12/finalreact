import { defineComponent } from 'vue';

const Catalog = defineComponent({
render() {
    return (
    <div>
        <h1>Catálogo de Productos</h1>
        <ul>
        {this.products.map(product => (
            <li key={product.id}>
            <router-link to={`/producto/${product.id}`}>{product.name}</router-link>
            </li>
        ))}
        </ul>
    </div>
    );
},
data() {
    return {
    products: [
        { id: 1, name: 'Producto 1' },
        { id: 2, name: 'Producto 2' },
        { id: 3, name: 'Producto 3' },
    ],
    };
},
});

export default Catalog;