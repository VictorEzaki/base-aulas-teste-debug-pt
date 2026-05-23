import { describe, it, expect } from '@jest/globals';
import Service from '../src/services/exercicios';

describe('Testes para função somar', () => {
    
    it('Deve somar dois números positivos 1 e 99, ', () => {
        const result = Service.Somar(1, 99);
        expect(result).toBe(100);
    })

    it('Deve somar dois números negativos -1 e 99, ', () => {
        const result = Service.Somar(-1, 99);
        expect(result).toBe(98);
    })

    it('Deve somar dois números negativos 1.5 e 2.3, ', () => {
        const result = Service.Somar(1.5, 2.3);
        expect(result).toBe(3.8);
    })
})

describe('Testes para função Sub', () => {
    it('Deve subtrair dois números positivos, 2 e 1, retornar 1', () => {
        const result = Service.Subtrair(2, 1);
        expect(result).toBe(1);
    })
})

describe('Testes para função Multiplicação', () => {
    it('Deve multiplicar dois números positivos, 2 e 1, retornar 2', () => {
        const result = Service.Multiplicar(2, 1);
        expect(result).toBe(2);
    })
})

describe('Testes para função Divisão', () => {
    it('Deve dividir dois números positivos, 1 e 2, retornar 2', () => {
        const result = Service.Dividir(1, 2);
        expect(result).toBe(2);
    })
})