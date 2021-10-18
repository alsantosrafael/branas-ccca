import Item from "../src/Item"

describe('Item', () => {
	test("Deve criar um item", () => {
		const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000);
		expect(item.idItem).toBe(1);
	});

	test("deve criar um item e calcular o volume", () => {
		const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10 );
		expect(item.getVolume()).toBe(0.03);

	})

})