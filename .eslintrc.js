    module.exports = {
        "env": {
            "browser": true,
            "node": true
        },
        "extends": [
            "eslint:recommended"
        ],
        "parserOptions": {
            "ecmaVersion": 2020,
            "sourceType": "module"
        },
        "rules": {
            // Defina as regras de estilo aqui
            "no-console": "off", // Desabilita a regra que não permite console.log
            "indent": ["error", 2], // Define a identação com 2 espaços
            "quotes": ["error", "single"], // Define o uso de aspas simples
            "semi": ["error", "never"] // Define que não deve haver ponto e vírgula no final das linhas
        }
    }