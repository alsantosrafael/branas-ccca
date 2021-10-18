import Item from "../src/Item"

describe('Item', () => {
	test("Deve criar um item", () => {
		const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000);
		expect(item.idItem).toBe(1);
	});

	test("deve criar um item e calcular o volume", () => {
		const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10);
		expect(item.getVolume()).toBe(0.03);
	});

	test("deve criar um item e calcular sua densidade", () => {
		const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10, 3);
		expect(item.getDensity()).toBe(100);
	});

	test("Deve criar um item e calcular seu frete", () => {
		const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10, 3);
		expect(item.getFreight()).toBe(30);
	});

		test("Deve criar um item e calcular o frete mínimo", () => {
		const item = new Item(3, "Instrumentos Musicais", "cabo", 30, 10, 10, 10, 0.9);
		expect(item.getFreight()).toBe(10);
	});

})