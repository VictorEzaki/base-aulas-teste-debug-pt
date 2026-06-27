import app from '../../src/index.js';
import request from 'supertest';
import { describe, it, expect } from '@jest/globals';

describe('Teste da API - Endpoint Somar', () => {
    it('CT 01 => Deve somar dois números positivos 2 e 95', async () => {
        const body = { num1: 2, num2: 95 };
        const response = await request(app).post('/api/somar').send(body);


        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(97);
    });

    it('CT 02 => Deve somar -5 com 10', async () => {
        const body = { num1: -5, num2: 10 };
        const response = await request(app).post('/api/somar').send(body);


        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(5);
    });

    it('CT 03 => Deve somar 10 com -5', async () => {
        const body = { num1: 10, num2: -5 };
        const response = await request(app).post('/api/somar').send(body);


        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(5);
    });

    it('CT 04 => Deve somar -5 com -10', async () => {
        const body = { num1: -5, num2: -10 };
        const response = await request(app).post('/api/somar').send(body);


        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-15);
    });

    it('CT 05 => Deve somar 0.5 com 1.7', async () => {
        const body = { num1: 0.5, num2: 1.7 };
        const response = await request(app).post('/api/somar').send(body);


        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(2.2);
    });

    it("CT 06 => Deve retornar erro ao enviar 'a' como primeiro parâmetro", async () => {
        const body = { num1: 'a', num2: 1 };
        const response = await request(app).post('/api/somar').send(body);


        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Enviar somente números');
    });

    it("CT 07 => Deve retornar erro ao enviar 'a' como segundo parâmetro", async () => {
        const body = { num1: 1, num2: 'a' };
        const response = await request(app).post('/api/somar').send(body);


        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Enviar somente números');
    });

    it('CT 08 => Deve somar 0 com 1', async () => {
        const body = { num1: 0, num2: 1 };
        const response = await request(app).post('/api/somar').send(body);


        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(1);
    });

    it('CT 09 => Deve somar 1 com 0', async () => {
        const body = { num1: 1, num2: 0 };
        const response = await request(app).post('/api/somar').send(body);


        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(1);
    });

    it('CT 10 => Deve retornar erro ao chamar somar sem o primeiro parâmetro', async () => {
        const body = { num1: undefined, num2: 1 };
        const response = await request(app).post('/api/somar').send(body);


        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Envie todos os campos!');
    });

    it('CT 11 => Deve retornar erro ao chamar somar sem o segundo parâmetro', async () => {
        const body = { num1: 1 };
        const response = await request(app).post('/api/somar').send(body);


        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Envie todos os campos!');
    });

    it('CT 12 => Deve retornar erro ao chamar somar sem os dois parâmetros', async () => {
        const body = {};
        const response = await request(app).post('/api/somar').send(body);


        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Envie todos os campos!');
    });

    it('CT 13 => Deve retornar erro ao enviar # como primeiro parâmetro', async () => {
        const body = { num1: '#', num2: 2 };
        const response = await request(app).post('/api/somar').send(body);


        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Enviar somente números');
    });

    it('CT 14 => Deve retornar erro ao enviar # como segundo parâmetro', async () => {
        const body = { num1: 2, num2: '#' };
        const response = await request(app).post('/api/somar').send(body);


        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Enviar somente números');
    });
});

describe('Testes para função subtrair', () => {
    it('CT 15 => Deve subtrair 95 de 2', async () => {
        const body = { num1: 2, num2: 95 };
        const response = await request(app).post('/api/subtrair').send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-93);
    });

    it('CT 16 => Deve subtrair 10 de -5', async () => {
        const body = { num1: -5, num2: 10 };
        const response = await request(app).post('/api/subtrair').send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-15);
    });

    it('CT 17 => Deve subtrair -5 de 10', async () => {
        const body = { num1: 10, num2: -5 };
        const response = await request(app).post('/api/subtrair').send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(15);
    });

    it('CT 18 => Deve subtrair -10 de -5', async () => {
        const body = { num1: -5, num2: -10 };
        const response = await request(app).post('/api/subtrair').send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(5);
    });

    it('CT 19 => Deve subtrair 1.7 de 0.5', async () => {
        const body = { num1: 0.5, num2: 1.7 };
        const response = await request(app).post('/api/subtrair').send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-1.2);
    });

    it("CT 20 => Deve retornar erro ao enviar 'a' como primeiro parâmetro", async () => {
        const body = { num1: 'a', num2: 1 };
        const response = await request(app).post('/api/subtrair').send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Enviar somente números');
    });

    it("CT 21 => Deve retornar erro ao enviar 'a' como segundo parâmetro", async () => {
        const body = { num1: 1, num2: 'a' };
        const response = await request(app).post('/api/subtrair').send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Enviar somente números');
    });

    it('CT 22 => Deve subtrair 1 de 0', async () => {
        const body = { num1: 0, num2: 1 };
        const response = await request(app).post('/api/subtrair').send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(-1);
    });

    it('CT 23 => Deve subtrair 0 de 1', async () => {
        const body = { num1: 1, num2: 0 };
        const response = await request(app).post('/api/subtrair').send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(1);
    });

    it('CT 24 => Deve retornar erro ao chamar subtrair sem o primeiro parâmetro', async () => {
        const body = { num1: undefined, num2: 1 };
        const response = await request(app).post('/api/subtrair').send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Envie todos os campos!');
    });

    it('CT 25 => Deve retornar erro ao chamar subtrair sem o segundo parâmetro', async () => {
        const body = { num1: 1 };
        const response = await request(app).post('/api/subtrair').send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Envie todos os campos!');
    });

    it('CT 26 => Deve retornar erro ao chamar subtrair sem os dois parâmetros', async () => {
        const body = {};
        const response = await request(app).post('/api/subtrair').send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Envie todos os campos!');
    });

    it('CT 27 => Deve retornar erro ao enviar # como primeiro parâmetro', async () => {
        const body = { num1: '#', num2: 2 };
        const response = await request(app).post('/api/subtrair').send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Enviar somente números');
    });

    it('CT 28 => Deve retornar erro ao enviar # como segundo parâmetro', async () => {
        const body = { num1: 2, num2: '#' };
        const response = await request(app).post('/api/subtrair').send(body);

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Enviar somente números');
    });
});

describe('Testes para função multiplicar', () => {
    it('CT 29 => Deve multiplicar 2 por 95', async () => {
        const body = { num1: 2, num2: 95 };
        const response = await request(app).post('/api/multiplicar').send(body);

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(0.021052631578947368);
    });

    it('CT 30 => Deve multiplicar -5 por 10', () => {
        const result = Service.Multiplicar(-5, 10);
        const response = await request(app).post('/api/multiplicar').send(body);

        expect(result).toBe(-50);
    });

    it('CT 31 => Deve multiplicar 10 por -5', () => {
        const result = Service.Multiplicar(10, -5);
        const response = await request(app).post('/api/multiplicar').send(body);

        expect(result).toBe(-50);
    });

    it('CT 32 => Deve multiplicar -5 por -10', () => {
        const result = Service.Multiplicar(-5, -10);
        const response = await request(app).post('/api/multiplicar').send(body);

        expect(result).toBe(50);
    });

    it('CT 33 => Deve multiplicar 0.5 por 1.7', () => {
        const result = Service.Multiplicar(0.5, 1.7);
        const response = await request(app).post('/api/multiplicar').send(body);

        expect(result).toBeCloseTo(0.85);
    });

    it("CT 34 => Deve retornar erro ao enviar 'a' como primeiro parâmetro", () => {
        const result = () => Service.Multiplicar('a', 1);
        expect(result).toThrow('Enviar somente números');
    });

    it("CT 35 => Deve retornar erro ao enviar 'a' como segundo parâmetro", () => {
        const result = () => Service.Multiplicar(1, 'a');
        expect(result).toThrow('Enviar somente números');
    });

    it('CT 36 => Deve multiplicar 0 por 1', () => {
        const result = Service.Multiplicar(0, 1);
        const response = await request(app).post('/api/multiplicar').send(body);

        expect(result).toBe(0);
    });

    it('CT 37 => Deve multiplicar 1 por 0', () => {
        const result = Service.Multiplicar(1, 0);
        const response = await request(app).post('/api/multiplicar').send(body);

        expect(result).toBe(0);
    });

    it('CT 38 => Deve retornar erro ao chamar multiplicar sem o primeiro parâmetro', () => {
        const result = () => Service.Multiplicar(undefined, 1);
        expect(result).toThrow('Envie todos os campos!');
    });

    it('CT 39 => Deve retornar erro ao chamar multiplicar sem o segundo parâmetro', () => {
        const result = () => Service.Multiplicar(1);
        expect(result).toThrow('Envie todos os campos!');
    });

    it('CT 40 => Deve retornar erro ao chamar multiplicar sem os dois parâmetros', () => {
        const result = () => Service.Multiplicar();
        expect(result).toThrow('Envie todos os campos!');
    });

    it('CT 41 => Deve retornar erro ao enviar # como primeiro parâmetro', () => {
        const result = () => Service.Multiplicar('#', 2);
        expect(result).toThrow('Enviar somente números');
    });

    it('CT 42 => Deve retornar erro ao enviar # como segundo parâmetro', () => {
        const result = () => Service.Multiplicar(2, '#');
        expect(result).toThrow('Enviar somente números');
    });
});