import { test, expect } from '@playwright/test';

test('Fetch product details via API', async ({ request }) => {
    const response = await request.get('https://hoff.is/store2/api/v1/price/1');
    expect(response.ok()).toBeTruthy();

    const product = await response.json();
    
    // Log the entire product data
    console.log('Product Data:', product);

    // Verify and log specific properties
    expect(product).toHaveProperty('id', 1);
    console.log('Product ID:', product.id);

    expect(product).toHaveProperty('price');
    console.log('Product Price:', product.price);
});

test('Fetch and display all products via API', async ({ request }) => {
    const response = await request.get('https://hoff.is/store2/api/v1/product/list');
    expect(response.ok()).toBeTruthy();

    const products = await response.json();
    
    // Log the entire list of products
    console.log('Products List:', products);

});
