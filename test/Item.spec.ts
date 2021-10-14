import Item from "../src/Item"


test("Deve criar um item", () => {
	const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000);
	expect(item.idItem).toBe(1);

})