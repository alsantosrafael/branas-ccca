import Coupon from "../src/Coupon"

describe('Coupon', () => {
	test("Deve criar um cupom válido", () => {
		const cupom = new Coupon("VALE20", 20, new Date("2021-10-14"))
		const isExpired = cupom.isExpired(new Date("2021-10-10"))
		expect(isExpired).toBeFalsy()
	})
})