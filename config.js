// =================================================================
// 🛍️ CONFIGURAÇÕES DO SISTEMA E VARIÁVEIS DE NEGÓCIO
// =================================================================

// --- 1. DADOS DE CONTATO ---
// Número de WhatsApp para onde os pedidos serão enviados
window.WHATSAPP_NUMBER = "5531991486490"; 
// Nome do seu estabelecimento (Aparece no topo)
window.BUSINESS_NAME = "Delivery Express"; 


// --- 2. TABELA DE PRODUTOS ---
// Estrutura: { "Categoria": [{ name, price, description, image }] }
window.PRODUCTS = {
    "Lanches": [
        {
            name: "Hambúrguer Artesanal",
            price: 28.90,
            description: "Delicioso hambúrguer com queijo, alface, tomate e molho especial",
            image: "https://i.imgur.com/qB0rS5s.png" // URL da imagem
        },
        {
            name: "X-Bacon Cheddar",
            price: 32.50,
            description: "Pão, blend de 180g, bacon crocante, cheddar cremoso e cebola caramelizada",
            image: "https://i.imgur.com/gK9xO7J.png" 
        }
    ],
    "Pizzas": [
        {
            name: "Pizza Margherita",
            price: 45.00,
            description: "Pizza tradicional com mussarela, tomate e manjericão fresco",
            image: "https://i.imgur.com/UAUeNXC.png"
        },
        {
        name: "Pizza Calabresa",
            price: 42.00,
            description: "Mussarela, calabresa fatiada, cebola e orégano",
            image: "https://i.imgur.com/jGqT6mZ.png" 
        }
    ],
    "Bebidas": [
        {
            name: "Suco de Laranja",
            price: 8.50,
            description: "Suco natural de laranja fresquinho, sem conservantes",
            image: "https://i.imgur.com/MNDiWlY.png"
        }
    ]
};

// --- 3. TABELA DE FRETES POR BAIRRO E CIDADE ---
// ESTRUTURA: "cidade-bairro": valor_do_frete
// IMPORTANTE: Use APENAS letras minúsculas e sem acentos e separe com HÍFEN
window.FREIGHT_TABLE_BY_NEIGHBORHOOD = {
    "belo horizonte-centro": 5.00,
    "belo horizonte-savassi": 6.50,
    "belo horizonte-lourdes": 7.00,
    "contagem-centro": 12.00,
    "contagem-eldorado": 15.00,
    "nova lima-vale do sol": 20.00,
    // ADICIONE SEUS PARES CIDADE-BAIRRO AQUI
};

// --- 4. OPÇÕES DE PAGAMENTO ---
window.PAYMENT_OPTIONS = [
    "Dinheiro (Traga troco)",
    "Pix (CNPJ / Chave)",
    "Cartão de Crédito",
    "Cartão de Débito",
    "Vale Refeição"
];

// --- 5. OPÇÕES DE ENTREGA/SERVIÇO ---
window.DELIVERY_OPTIONS = [
    "Entrega",
    "Retirada"
];
