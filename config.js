// =================================================================
// 🛍️ CONFIGURAÇÕES DO SISTEMA E VARIÁVEIS DE NEGÓCIO
// =================================================================

// --- 1. DADOS DE CONTATO ---
// Número de WhatsApp para onde os pedidos serão enviados
window.WHATSAPP_NUMBER = "5531991486490"; 

// NOVO: DADOS DO ESTABELECIMENTO
window.BUSINESS_NAME = "Coreu Burger"; // Nome no header e título
window.BUSINESS_LOGO_URL = "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2020%2F04%2F17%2F18%2FLogo-267146_779111_185157912_1510408880.jpg"; // **ATUALIZE COM A SUA LOGO REAL**
window.DELIVERY_TIME = "20–55min"; // Tempo médio de entrega (string)

// NOVO: HORÁRIOS DE FUNCIONAMENTO (Formato HH:MM)
// Dias da semana (0=Domingo, 1=Segunda, ..., 6=Sábado)
window.OPERATING_HOURS = {
    1: { open: "18:00", close: "23:00" }, // Segunda
    2: { open: "18:00", close: "23:00" }, // Terça
    3: { open: "18:00", close: "23:00" }, // Quarta
    4: { open: "18:00", close: "23:00" }, // Quinta
    5: { open: "09:00", close: "23:59" }, // Sexta
    6: { open: "10:00", close: "23:59" }, // Sábado
    0: { open: "18:00", close: "23:00" }, // Domingo
    // Se quiser fechar em um dia, use: 1: { open: null, close: null }, 
}; 


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
        },
        {
            name: "X-EGG",
            price: 32.50, // <--- PRODUTO COM PREÇO NORMAL
            description: "Pão, blend de 180g, bacon crocante, cheddar cremoso e cebola caramelizada",
            image: "https://sachefmio.blob.core.windows.net/fotos/x-egg-73519.jpg" 
        },
        {
            name: "X-Tudo",
            price: 32.50, // <--- PRODUTO COM PREÇO NORMAL
            description: "Pão, blend de 180g, bacon crocante, cheddar cremoso e cebola caramelizada",
            image: "https://lanchessupermania.com.br/img/67ab4ba77fe9a.jpg" 
        },
        {
            name: "X-Salada",
            price: 32.50, // <--- PRODUTO COM PREÇO NORMAL
            description: "Pão, blend de 180g, bacon crocante, cheddar cremoso e cebola caramelizada",
            image: "https://t3.ftcdn.net/jpg/12/98/93/56/360_F_1298935654_5jgCT0UpdsWo2VV6f9aBXGKsFftGBDch.jpg" 
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
        },
        {
            name: "Suco Prats Laranja 300ml",
            price: 8.50,
            description: "Suco Prats de laranja",
            image: "https://files.menudino.com/merchants/c66216f7-2faf-11ee-9964-0022483864db/items/images/small/dd68c431-f3a1-450a-aca7-b69c4d0b4847_20250701225557.webp"
        }
    ],
    "Refrigerantes": [
        {
            name: "Coca Lata 220ml",
            price: 6.90,
            description: "Coca Lata 220ml Original",
            image: "https://files.menudino.com/merchants/c66216f7-2faf-11ee-9964-0022483864db/items/images/small/627209c0-8ebe-42c2-9f8d-5eeda2c48305_20250701225550.webp"
        },
        {
            name: "Guarana Antarctica 350ml",
            price: 8.90,
            description: "Guarana Antarctica 350ml",
            image: "https://files.menudino.com/merchants/c66216f7-2faf-11ee-9964-0022483864db/items/images/small/22c7d0ce-4795-4341-8ac5-0327d6737b06_20250701225553.webp"
        },
        {
            name: "Coca Lata 220ml Zero",
            price: 6.90,
            description: "Coca Cola Zero 220ml",
            image: "https://files.menudino.com/merchants/c66216f7-2faf-11ee-9964-0022483864db/items/images/small/dbf6893f-4845-4f5d-9f66-e474b16e7fac_20250701225551.webp"
        },
        {
            name: "Sprite Original 350ml",
            price: 8.90,
            description: "Sprite Original 350ml",
            image: "https://files.menudino.com/merchants/c66216f7-2faf-11ee-9964-0022483864db/items/images/small/75b02c96-a5f4-410a-94fb-ec415264e0cb_20250701225554.webp"
        },
        {
            name: "Coca Cola KS 250ml",
            price: 8.90,
            description: "Coca Cola KS 250ml",
            image: "https://files.menudino.com/merchants/c66216f7-2faf-11ee-9964-0022483864db/items/images/small/ae1b4323-5b59-4b56-993e-095ca882482f_20250701225550.webp"
        },
        {
            name: "Coca-Cola KS 250ml Zero",
            price: 8.90,
            description: "Coca-Cola KS 250ml Zero",
            image: "https://files.menudino.com/merchants/c66216f7-2faf-11ee-9964-0022483864db/items/images/small/8a126704-b074-450a-9bdf-6ea44fa48066_20250701225550.webp"
        }
    ]
};

// --- 3. TABELA DE FRETES POR BAIRRO E CIDADE ---
// ESTRUTURA: "cidade-bairro": valor_do_frete
window.FREIGHT_TABLE_BY_NEIGHBORHOOD = {
    "belo horizonte-centro": 5.00,
    "belo horizonte-savassi": 6.50,
    "belo horizonte-lourdes": 7.00,
    "contagem-centro": 12.00,
    "contagem-eldorado": 15.00,
    "nova lima-vale do sol": 20.00,
    "belo horizonte-jardim sao jose": 5.00
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




