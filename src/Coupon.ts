export default class Coupon {

	constructor(readonly code: string, readonly percentage: number, readonly expireDate?: Date) {}

	isExpired (today: Date) {
		if (this.expireDate) {
			return this.expireDate.getTime() < today.getTime()
		}
		return false
	}
}