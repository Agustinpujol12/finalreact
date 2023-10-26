import { defineComponent } from 'vue';

const ProductDetail = defineComponent({
render() {
    return (
    <div>
        <h1>Detalles del Producto</h1>
        {this.product ? (
        <div>
            <h2>{this.product.name}</h2>
            <p>Descripción: {this.product.description}</p>
            <p>Precio: ${this.product.price}</p>
        </div>
        ) : (
        <p>Producto no encontrado</p>
        )}
        <router-link to="/">Volver al Catálogo</router-link>
    </div>
    );
},
data() {
    return {
    product: null,
    };
},
created() {
    // En la vida real, cargarías los detalles del producto desde una API o una fuente de datos.
    // Simulemos que cargamos un producto específico aquí para fines de demostración.
    const productId = this.$route.params.id;
    this.product = {
    id: productId,
    name: `Producto ${productId}`,
    description: `Descripción del Producto ${productId}`,
    price: 19.99,
    };
},
});

export default ProductDetail;