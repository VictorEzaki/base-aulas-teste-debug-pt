class Service {
    Somar(num1, num2) {
        if (num1 === undefined || num2 === undefined) { 
            throw new Error('Envie todos os campos!');
        }
        
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Enviar somente números');
        }
        
        return num1 + num2;
    }
    
    Subtrair(num1, num2) {
        if (num1 === undefined || num2 === undefined) { 
            throw new Error('Envie todos os campos!');
        }
        
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Enviar somente números');
        }
        
        return num1 - num2;
    }
    
    Multiplicar(num1, num2) {
        if (num1 === undefined || num2 === undefined) { 
            throw new Error('Envie todos os campos!');
        }
        
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Enviar somente números');
        }
        
        return num1 * num2;
    }
    
    Dividir(num1, num2) {
        if (num1 === undefined || num2 === undefined) { 
            throw new Error('Envie todos os campos!');
        }
        
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Enviar somente números');
        }
        
        if (num2 === 0) {
            return undefined;
        }
        
        return num1 / num2;
    }
    
    Raiz(num) {
        if (arguments.length > 1) {
            throw new Error('Envie apenas um parâmetro!');
        }
        
        if (num === undefined) {
            throw new Error('Envie todos os campos!');
        }
        
        if (num < 0) {
            return undefined;
        }
        
        if (isNaN(num)) {
            throw new Error('Enviar somente números');
        }
        
        return Math.sqrt(num)
    }
    
    Potencia(num1, num2) {
        if (num1 === undefined || num2 === undefined) { 
            throw new Error('Envie todos os campos!');
        }

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Enviar somente números');
        }
        
        return Math.pow(num1, num2);
    }
}

export default new Service();