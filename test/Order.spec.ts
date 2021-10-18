import Coupon from "../src/Coupon";
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

	test('Deve criar um pedido com três itens com cupom de desconto.', () => {
		const order = new Order('567.541.780-00');
		order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
		order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
		order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
		order.addCoupon(new Coupon("VALE20", 20));
		const total = order.getTotal();

		expect(total).toBe(6090 * 0.8);

	})

	test('Deve criar um pedido com três itens com cupom de desconto expirado.', () => {
		const order = new Order('567.541.780-00', new Date("2021-10-10"));
		order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
		order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
		order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
		order.addCoupon(new Coupon("VALE20", 20, new Date("2021-03-01")));
		const total = order.getTotal();

		expect(total).toBe(6090);

	})

		test('Deve criar um pedido com três itens e calcular o frete total', () => {
		const order = new Order('567.541.780-00');
		order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10, 3), 1);
		order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000, 100, 50, 50, 20), 1);
		order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30, 10, 10, 10, 0.9), 3);

		expect(order.getFreight()).toBe(257);

	})
})