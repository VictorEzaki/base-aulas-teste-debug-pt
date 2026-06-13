import { describe, it, expect } from '@jest/globals';
import Service from '../src/services/exercicios';

// describe('Testes para função somar', () => {
//     it('CT 01 => Deve somar dois números positivos 2 e 95', () => {
//         const result = Service.Somar(2, 95);
//         expect(result).toBe(97);
//     });

//     it('CT 02 => Deve somar -5 com 10', () => {
//         const result = Service.Somar(-5, 10);
//         expect(result).toBe(5);
//     });

//     it('CT 03 => Deve somar 10 com -5', () => {
//         const result = Service.Somar(10, -5);
//         expect(result).toBe(5);
//     });

//     it('CT 04 => Deve somar -5 com -10', () => {
//         const result = Service.Somar(-5, -10);
//         expect(result).toBe(-15);
//     });

//     it('CT 05 => Deve somar 0.5 com 1.7', () => {
//         const result = Service.Somar(0.5, 1.7);
//         expect(result).toBeCloseTo(2.2);
//     });

//     it("CT 06 => Deve retornar erro ao enviar 'a' como primeiro parâmetro", () => {
//         const result = () => Service () =>.Somar('a', 1);
//         expect(result).toThrThtoThrow('Enviar somente números');
//     });

//     it("CT 07 => Deve retornar erro ao enviar 'a' como segundo parâmetro", () => {
//         const result = () => Service () =>.Somar(1, 'a');
//         expect(result).toThrThtoThrow('Enviar somente números');
//     });

//     it('CT 08 => Deve somar 0 com 1', () => {
//         const result = Service.Somar(0, 1);
//         expect(result).toBe(1);
//     });

//     it('CT 09 => Deve somar 1 com 0', () => {
//         const result = Service.Somar(1, 0);
//         expect(result).toBe(1);
//     });

//     it('CT 10 => Deve retornar erro ao chamar somar sem o primeiro parâmetro', () => {
//         const result = () => Service.Somar(undefined, 1);
//         expect(result).toThrow('Envie todos os campos!');
//     });

//     it('CT 11 => Deve retornar erro ao chamar somar sem o segundo parâmetro', () => {
//         const result = () => Service.Somar(1);
//         expect(result).toThrow('Envie todos os campos!');
//     });

//     it('CT 12 => Deve retornar erro ao chamar somar sem os dois parâmetros', () => {
//         const result = () => Service.Somar();
//         expect(result).toThrow('Envie todos os campos!');
//     });

//     it('CT 13 => Deve retornar erro ao enviar # como primeiro parâmetro', () => {
//         const result = () => Service () =>.Somar('#', 2);
//         expect(result).toThrThtoThrow('Enviar somente números');
//     });

//     it('CT 14 => Deve retornar erro ao enviar # como segundo parâmetro', () => {
//         const result = () => Service () =>.Somar(2, '#');
//         expect(result).toThrThtoThrow('Enviar somente números');
//     });
// });

// describe('Testes para função subtrair', () => {
//     it('CT 15 => Deve subtrair 95 de 2', () => {
//         const result = Service.Subtrair(2, 95);
//         expect(result).toBe(-93);
//     });

//     it('CT 16 => Deve subtrair 10 de -5', () => {
//         const result = Service.Subtrair(-5, 10);
//         expect(result).toBe(-15);
//     });

//     it('CT 17 => Deve subtrair -5 de 10', () => {
//         const result = Service.Subtrair(10, -5);
//         expect(result).toBe(15);
//     });

//     it('CT 18 => Deve subtrair -10 de -5', () => {
//         const result = Service.Subtrair(-5, -10);
//         expect(result).toBe(5);
//     });

//     it('CT 19 => Deve subtrair 1.7 de 0.5', () => {
//         const result = Service.Subtrair(0.5, 1.7);
//         expect(result).toBeCloseTo(-1.2);
//     });

//     it("CT 20 => Deve retornar erro ao enviar 'a' como primeiro parâmetro", () => {
//         const result = () => Service.Subtrair('a', 1);
//         expect(result).toThrow('Enviar somente números');
//     });

//     it("CT 21 => Deve retornar erro ao enviar 'a' como segundo parâmetro", () => {
//         const result = () => Service.Subtrair(1, 'a');
//         expect(result).toThrow('Enviar somente números');
//     });

//     it('CT 22 => Deve subtrair 1 de 0', () => {
//         const result = Service.Subtrair(0, 1);
//         expect(result).toBe(-1);
//     });

//     it('CT 23 => Deve subtrair 0 de 1', () => {
//         const result = Service.Subtrair(1, 0);
//         expect(result).toBe(1);
//     });

//     it('CT 24 => Deve retornar erro ao chamar subtrair sem o primeiro parâmetro', () => {
//         const result = () => Service.Subtrair(undefined, 1);
//         expect(result).toThrow('Envie todos os campos!');
//     });

//     it('CT 25 => Deve retornar erro ao chamar subtrair sem o segundo parâmetro', () => {
//         const result = () => Service.Subtrair(1);
//         expect(result).toThrow('Envie todos os campos!');
//     });

//     it('CT 26 => Deve retornar erro ao chamar subtrair sem os dois parâmetros', () => {
//         const result = () => Service.Subtrair();
//         expect(result).toThrow('Envie todos os campos!');
//     });

//     it('CT 27 => Deve retornar erro ao enviar # como primeiro parâmetro', () => {
//         const result = () => Service.Subtrair('#', 2);
//         expect(result).toThrow('Enviar somente números');
//     });

//     it('CT 28 => Deve retornar erro ao enviar # como segundo parâmetro', () => {
//         const result = () => Service.Subtrair(2, '#');
//         expect(result).toThrow('Enviar somente números');
//     });
// });

// describe('Testes para função multiplicar', () => {
//     it('CT 29 => Deve multiplicar 2 por 95', () => {
//         const result = Service.Multiplicar(2, 95);
//         expect(result).toBe(190);
//     });

//     it('CT 30 => Deve multiplicar -5 por 10', () => {
//         const result = Service.Multiplicar(-5, 10);
//         expect(result).toBe(-50);
//     });

//     it('CT 31 => Deve multiplicar 10 por -5', () => {
//         const result = Service.Multiplicar(10, -5);
//         expect(result).toBe(-50);
//     });

//     it('CT 32 => Deve multiplicar -5 por -10', () => {
//         const result = Service.Multiplicar(-5, -10);
//         expect(result).toBe(50);
//     });

//     it('CT 33 => Deve multiplicar 0.5 por 1.7', () => {
//         const result = Service.Multiplicar(0.5, 1.7);
//         expect(result).toBeCloseTo(0.85);
//     });

//     it("CT 34 => Deve retornar erro ao enviar 'a' como primeiro parâmetro", () => {
//         const result = () => Service.Multiplicar('a', 1);
//         expect(result).toThrow('Enviar somente números');
//     });

//     it("CT 35 => Deve retornar erro ao enviar 'a' como segundo parâmetro", () => {
//         const result = () => Service.Multiplicar(1, 'a');
//         expect(result).toThrow('Enviar somente números');
//     });

//     it('CT 36 => Deve multiplicar 0 por 1', () => {
//         const result = Service.Multiplicar(0, 1);
//         expect(result).toBe(0);
//     });

//     it('CT 37 => Deve multiplicar 1 por 0', () => {
//         const result = Service.Multiplicar(1, 0);
//         expect(result).toBe(0);
//     });

//     it('CT 38 => Deve retornar erro ao chamar multiplicar sem o primeiro parâmetro', () => {
//         const result = () => Service.Multiplicar(undefined, 1);
//         expect(result).toThrow('Envie todos os campos!');
//     });

//     it('CT 39 => Deve retornar erro ao chamar multiplicar sem o segundo parâmetro', () => {
//         const result = () => Service.Multiplicar(1);
//         expect(result).toThrow('Envie todos os campos!');
//     });

//     it('CT 40 => Deve retornar erro ao chamar multiplicar sem os dois parâmetros', () => {
//         const result = () => Service.Multiplicar();
//         expect(result).toThrow('Envie todos os campos!');
//     });

//     it('CT 41 => Deve retornar erro ao enviar # como primeiro parâmetro', () => {
//         const result = () => Service.Multiplicar('#', 2);
//         expect(result).toThrow('Enviar somente números');
//     });

//     it('CT 42 => Deve retornar erro ao enviar # como segundo parâmetro', () => {
//         const result = () => Service.Multiplicar(2, '#');
//         expect(result).toThrow('Enviar somente números');
//     });
// });

// describe('Testes para função dividir', () => {
//     it('CT 43 => Deve dividir 2 por 95', () => {
//         const result = Service.Dividir(2, 95);
//         expect(result).toBeCloseTo(0.02105263157);
//     });

//     it('CT 44 => Deve dividir -5 por 10', () => {
//         const result = Service.Dividir(-5, 10);
//         expect(result).toBe(-0.5);
//     });

//     it('CT 45 => Deve dividir 10 por -5', () => {
//         const result = Service.Dividir(10, -5);
//         expect(result).toBe(-2);
//     });

//     it('CT 46 => Deve dividir -5 por -10', () => {
//         const result = Service.Dividir(-5, -10);
//         expect(result).toBe(0.5);
//     });

//     it('CT 47 => Deve dividir 0.5 por 1.7', () => {
//         const result = Service.Dividir(0.5, 1.7);
//         expect(result).toBeCloseTo(0.2941176);
//     });

//     it("CT 48 => Deve retornar erro ao enviar 'a' como primeiro parâmetro", () => {
//         const result = () => Service.Dividir('a', 1);
//         expect(result).toThrow('Enviar somente números');
//     });

//     it("CT 49 => Deve retornar erro ao enviar 'a' como segundo parâmetro", () => {
//         const result = () => Service.Dividir(1, 'a');
//         expect(result).toThrow('Enviar somente números');
//     });

//     it('CT 50 => Deve dividir 0 por 1', () => {
//         const result = Service.Dividir(0, 1);
//         expect(result).toBe(0);
//     });

//     it('CT 51 => Deve retornar undefined ao dividir 1 por 0', () => {
//         const result = Service.Dividir(1, 0);
//         expect(result).toBeUndefined();
//     });

//     it('CT 52 => Deve retornar erro ao chamar dividir sem o primeiro parâmetro', () => {
//         const result = () => Service.Dividir(undefined, 1);
//         expect(result).toThrow('Envie todos os campos!');
//     });

//     it('CT 53 => Deve retornar erro ao chamar dividir sem o segundo parâmetro', () => {
//         const result = () => Service.Dividir(1);
//         expect(result).toThrow('Envie todos os campos!');
//     });

//     it('CT 54 => Deve retornar erro ao chamar dividir sem os dois parâmetros', () => {
//         const result = () => Service.Dividir();
//         expect(result).toThrow('Envie todos os campos!');
//     });

//     it('CT 55 => Deve retornar erro ao enviar # como primeiro parâmetro', () => {
//         const result = () => Service.Dividir('#', 2);
//         expect(result).toThrow('Enviar somente números');
//     });

//     it('CT 56 => Deve retornar erro ao enviar # como segundo parâmetro', () => {
//         const result = () => Service.Dividir(2, '#');
//         expect(result).toThrow('Enviar somente números');
//     });
// });

// describe('Testes para função raiz', () => {
//     it('CT 57 => Deve retornar a raiz quadrada de 4', () => {
//         const result = Service.Raiz(4);
//         expect(result).toBe(2);
//     });

//     it('CT 58 => Deve retornar a raiz quadrada de 0.4', () => {
//         const result = Service.Raiz(0.4);
//         expect(result).toBeCloseTo(0.6324555320336759);
//     });

//     it('CT 59 => Deve retornar undefined ao calcular raiz de -0.4', () => {
//         const result = Service.Raiz(-0.4);
//         expect(result).toBeUndefined();
//     });

//     it("CT 60 => Deve retornar erro ao enviar 'a'", () => {
//         const result = () => Service.Raiz('a');
//         expect(result).toThrow('Enviar somente números');
//     });

//     it("CT 61 => Deve retornar erro ao enviar '1a'", () => {
//         const result = () => Service.Raiz('1a');
//         expect(result).toThrow('Enviar somente números');
//     });

//     it('CT 62 => Deve retornar a raiz quadrada de 0', () => {
//         const result = Service.Raiz(0);
//         expect(result).toBe(0);
//     });

//     it('CT 63 => Deve retornar a raiz quadrada de 1000000000000', () => {
//         const result = Service.Raiz(1000000000000);
//         expect(result).toBe(1000000);
//     });

//     it('CT 64 => Deve retornar erro ao enviar #', () => {
//         const result = () => Service.Raiz('#');
//         expect(result).toThrow('Enviar somente números');
//     });

//     it("CT 65 => Deve retornar erro ao enviar '-'", () => {
//         const result = () => Service.Raiz('-');
//         expect(result).toThrow('Enviar somente números');
//     });

//     it("CT 66 => Deve retornar erro ao enviar '10.a'", () => {
//         const result = () => Service.Raiz('10.a');
//         expect(result).toThrow('Enviar somente números');
//     });

//     it("CT 67 => Deve retornar erro ao enviar '1a2'", () => {
//         const result = () => Service.Raiz('1a2');
//         expect(result).toThrow('Enviar somente números');
//     });

//     it('CT 68 => Deve retornar erro ao chamar raiz sem parâmetro', () => {
//         const result = () => Service.Raiz();
//         expect(result).toThrow('Envie todos os campos!');
//     });

//     it('CT 69 => Deve retornar erro ao chamar raiz com dois parâmetros', () => {
//         const result = () => Service.Raiz(4, 2);
//         expect(result).toThrow('Envie apenas um parâmetro!');
//     });
// });

describe('Testes para função potencia', () => {
    it('CT 70 => Deve calcular 2 elevado a 95', () => {
        const result = Service.Potencia(2, 95);
        expect(result).toBe(39614081257132170000000000000);
    });

    it('CT 71 => Deve calcular -5 elevado a 10', () => {
        const result = Service.Potencia(-5, 10);
        expect(result).toBe(9765625);
    });

    it('CT 72 => Deve calcular 10 elevado a -5', () => {
        const result = Service.Potencia(10, -5);
        expect(result).toBe(0.00001);
    });

    it('CT 73 => Deve calcular -5 elevado a -10', () => {
        const result = Service.Potencia(-5, -10);
        expect(result).toBeCloseTo(0.0000001024);
    });

    it('CT 74 => Deve calcular 0.5 elevado a 1.7', () => {
        const result = Service.Potencia(0.5, 1.7);
        expect(result).toBeCloseTo(0.3077861033362291);
    });

    it("CT 75 => Deve retornar erro ao enviar 'a' como primeiro parâmetro", () => {
        const result = () => Service.Potencia('a', 1);
        expect(result).toThrow('Enviar somente números');
    });

    it("CT 76 => Deve retornar erro ao enviar 'a' como segundo parâmetro", () => {
        const result = () => Service.Potencia(1, 'a');
        expect(result).toThrow('Enviar somente números');
    });

    it('CT 77 => Deve calcular 0 elevado a 1', () => {
        const result = Service.Potencia(0, 1);
        expect(result).toBe(0);
    });

    it('CT 78 => Deve calcular 1 elevado a 0', () => {
        const result = Service.Potencia(1, 0);
        expect(result).toBe(1);
    });

    it('CT 79 => Deve retornar erro ao chamar potencia sem o primeiro parâmetro', () => {
        const result = () => Service.Potencia(undefined, 2);
        expect(result).toThrow('Envie todos os campos!');
    });

    it('CT 80 => Deve retornar erro ao chamar potencia sem o segundo parâmetro', () => {
        const result = () => Service.Potencia(2);
        expect(result).toThrow('Envie todos os campos!');
    });

    it('CT 81 => Deve retornar erro ao chamar potencia sem os dois parâmetros', () => {
        const result = () => Service.Potencia();
        expect(result).toThrow('Envie todos os campos!');
    });

    it('CT 82 => Deve retornar erro ao enviar # como primeiro parâmetro', () => {
        const result = () => Service.Potencia('#', 2);
        expect(result).toThrow('Enviar somente números');
    });

    it('CT 83 => Deve retornar erro ao enviar # como segundo parâmetro', () => {
        const result = () => Service.Potencia(2, '#');
        expect(result).toThrow('Enviar somente números');
    });
});