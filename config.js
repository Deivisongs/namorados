// =================================================================
// 🛍️ CONFIGURAÇÕES DO SISTEMA E VARIÁVEIS DE NEGÓCIO
// =================================================================

// --- 1. DADOS DE CONTATO ---
// Número de WhatsApp para onde os pedidos serão enviados
window.WHATSAPP_NUMBER = "5531991486490"; 
// Nome do seu estabelecimento (Aparece no topo)
window.BUSINESS_NAME = "Delivery Express"; 


// --- 2. TABELA DE PRODUTOS (COM OLDPRICE PARA PROMOÇÃO) ---
// Adicione 'oldPrice' se o produto estiver em promoção.
window.PRODUCTS = {
    "Lanches": [
        {
            name: "Hambúrguer Artesanal",
            price: 28.90,
            oldPrice: 35.00, // <--- PRODUTO EM PROMOÇÃO
            description: "Delicioso hambúrguer com queijo, alface, tomate e molho especial",
            image: "https://png.pngtree.com/png-vector/20240402/ourlarge/pngtree-cheese-burger-png-image_12259411.png"
        },
        {
            name: "X-Bacon Cheddar",
            price: 32.50, // <--- PRODUTO COM PREÇO NORMAL
            description: "Pão, blend de 180g, bacon crocante, cheddar cremoso e cebola caramelizada",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRRWcrxrm1dKGMSluf_2Nnz9zglGuDJiNqA&s" 
        }
    ],
    "Pizzas": [
        {
            name: "Pizza Margherita",
            price: 45.00,
            oldPrice: 59.90, // <--- PRODUTO EM PROMOÇÃO
            description: "Pizza tradicional com mussarela, tomate e manjericão fresco",
            image: "https://www.galbani.com.br/wp-content/uploads/2024/11/Pizza-marguerita.webp"
        },
        {
        name: "Pizza Calabresa",
            price: 42.00,
            description: "Mussarela, calabresa fatiada, cebola e orégano",
            image: "https://painacozinha.com/wp-content/uploads/85.Pizza-de-Calabresa-com-Catupiry.webp" 
        }
    ],
    "Bebidas": [
        {
            name: "Suco de Laranja",
            price: 8.50,
            description: "Suco natural de laranja fresquinho, sem conservantes",
            image: "https://www.citrosuco.com.br/wp-content/uploads/2022/02/THUMB-05.png"
        },
        {
            name: "Suco de Uva",
            price: 8.50,
            description: "Suco natural de Uva fresquinho, sem conservantes",
            image: "https://wx.mlcdn.com.br/ponzi/production/portaldalu/58836.jpg"
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
