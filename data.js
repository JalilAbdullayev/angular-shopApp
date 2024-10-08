module.exports = function() {
  return {
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 1000,
        imageUrl: "https://picsum.photos/200/300",
        description: "Product 1 description",
        category: "Category 1"
      },
      {
        id: 2,
        name: "Product 2",
        price: 2000,
        imageUrl: "https://picsum.photos/200/300",
        description: "Product 2 description",
        category: "Category 2"
      },
      {
        id: 3,
        name: "Product 3",
        price: 3000,
        imageUrl: "https://picsum.photos/200/300",
        description: "Product 3 description",
        category: "Category 3"
      },
      {
        id: 4,
        name: "Product 4",
        price: 4000,
        imageUrl: "https://picsum.photos/200/300",
        description: "Product 4 description",
        category: "Category 1"
      },
      {
        id: 5,
        name: "Product 5",
        price: 5000,
        imageUrl: "https://picsum.photos/200/300",
        description: "Product 5 description",
        category: "Category 2"
      },
      {
        id: 6,
        name: "Product 6",
        price: 6000,
        imageUrl: "https://picsum.photos/200/300",
        description: "Product 6 description",
        category: "Category 3"
      },
      {
        id: 7,
        name: "Product 7",
        price: 7000,
        imageUrl: "https://picsum.photos/200/300",
        description: "Product 7 description",
        category: "Category 1"
      },
      {
        id: 8,
        name: "Product 8",
        price: 8000,
        imageUrl: "https://picsum.photos/200/300",
        description: "Product 8 description",
        category: "Category 2"
      },
      {
        id: 9,
        name: "Product 9",
        price: 9000,
        imageUrl: "https://picsum.photos/200/300",
        description: "Product 9 description",
        category: "Category 3"
      },
      {
        id: 10,
        name: "Product 10",
        price: 10000,
        imageUrl: "https://picsum.photos/200/300",
        description: "Product 10 description",
        category: "Category 1"
      },
      {
        id: 11,
        name: "Product 11",
        price: 11000,
        imageUrl: "https://picsum.photos/200/300",
        description: "Product 11 description",
        category: "Category 2"
      },
      {
        id: 12,
        name: "Product 12",
        price: 12000,
        imageUrl: "https://picsum.photos/200/300",
        description: "Product 12 description",
        category: "Category 3"
      }
    ],
    categories: [
      {
        id: 1,
        name: "Category 1"
      },
      {
        id: 2,
        name: "Category 2"
      },
      {
        id: 3,
        name: "Category 3"
      }
    ],
    orders: [
      {
        id: "e59a",
        cart: {
          items: [
            {
              product: {
                id: "1",
                name: "Product 1",
                price: 1000,
                imageUrl: "https://picsum.photos/200/300",
                description: "Product 1 description",
                category: "Category 1"
              },
              quantity: 1
            },
            {
              product: {
                id: "3",
                name: "Product 3",
                price: 3000,
                imageUrl: "https://picsum.photos/200/300",
                description: "Product 3 description",
                category: "Category 3"
              },
              quantity: 1
            },
            {
              product: {
                id: "2",
                name: "Product 2",
                price: 2000,
                imageUrl: "https://picsum.photos/200/300",
                description: "Product 2 description",
                category: "Category 2"
              },
              quantity: 2
            }
          ],
          itemCount: 4,
          total: 8000
        },
        name: "Jalil",
        address: "Balakhani",
        city: "Baku",
        phone: "+994 10 415 43 15",
        email: "abdullacelil00@gmail.com",
        isSent: false
      }
    ]
  }
}
