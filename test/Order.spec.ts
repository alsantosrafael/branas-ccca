import Item from "../src/Item";
import Order from "../src/Order"

describe('Order', () => {
	test('Não deve criar um pedido com CPF inválido.', () => {
		expect(() => new Order('111.111.111-11')).toThrow(new Error("Invalid CPF"));
	})

	test('Deve criar um pedido com CPF válido.', () => {
		const order = new Order('567.541.780-00');
		expect(order).toBeDefined();
	})

	test('Deve criar um pedido com três itens.', () => {
		const order = new Order('567.541.780-00');
		order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
		order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
		order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
		const total = order.getTotal();

		expect(total).toBe(6090);

	})
})