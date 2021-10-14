import Cpf from "../src/Cpf"


describe('Cpf', () => {
	test('Deve dar erro se CPF não for passado', () => {
		expect(() => new Cpf('')).toThrow(new Error('Cpf is missing.'))
	})

	test('Deve dar erro se todos os números do CPF forem iguais', () => {
		expect(() => new Cpf('111.111.111-11')).toThrow(new Error('Invalid CPF'))
	})

	test('Deve criar CPF se tudo estiver correto', () => {
		const cpf = new Cpf('567.541.780-00')
		expect(cpf).toBeDefined()
	})
})