        function calcularDistancia(cidadeOrigem, cidadeDestino) {
            // Tabela fictícia de distâncias entre algumas cidades (em quilômetros)
            var distancias = {
                'São Paulo - Rio de Janeiro': 430,
                'São Paulo - Belo Horizonte': 586,
                'São Paulo - Brasília': 1016,
                'Rio de Janeiro - Belo Horizonte': 434,
                'Rio de Janeiro - Brasília': 1148,
                'Belo Horizonte - Brasília': 716,
				'Floresta - São Paulo': 2000,
				'Floresta - Rio de Janeiro': 1800,
				'Floresta - Belo Horizonte': 1300,
				'Floresta - Brasília': 1600,
				'sao paulo - rio de janeiro': 430,
				'sao paulo - belo horizonte': 586,
				'sao paulo - brasilia': 1016,
				'rio de janeiro - belo horizonte': 434,
				'rio de janeiro - brasilia': 1148,
				'belo horizonte - brasilia': 716,
				'floresta - sao paulo': 2000,
				'floresta - rio de janeiro': 1800,
				'floresta - belo horizonte': 1300,
				'floresta - brasilia': 1600,
				'rio de janeiro - sao paulo': 430,
				'belo horizonte - sao paulo': 586,
				'brasilia - sao paulo': 1016,
				'belo horizonte - rio de janeiro': 434,
				'brasilia - rio de janeiro': 1148,
				'brasilia - belo horizonte': 716,
				'sao paulo - floresta': 2000,
				'rio de janeiro - floresta': 1800,
				'belo horizonte - floresta': 1300,
				'brasilia - floresta': 1600,
				'Rio de Janeiro - São Paulo': 430,
				'Belo Horizonte - São Paulo': 586,
				'Brasília - São Paulo': 1016,
				'Belo Horizonte - Rio de Janeiro': 434,
				'Brasília - Rio de Janeiro': 1148,
				'Brasília - Belo Horizonte': 716,
				'São Paulo - Floresta': 2000,
				'Rio de Janeiro - Floresta': 1800,
				'Belo Horizonte - Floresta': 1300,
				'Brasília - Floresta': 1600,
				'rio de janeiro - sao paulo': 430,
				'belo horizonte - sao paulo': 586,
				'brasilia - sao paulo': 1016,
				'belo horizonte - rio de janeiro': 434,
				'brasilia - rio de janeiro': 1148,
				'brasilia - belo horizonte': 716,
				'sao paulo - floresta': 2000,
				'rio de janeiro - floresta': 1800,
				'belo horizonte - floresta': 1300,
				'brasilia - floresta': 1600

                // Adicione mais distâncias conforme necessário
            };

            // Verificar se a distância entre as cidades está na tabela
            var chave = cidadeOrigem + ' - ' + cidadeDestino;
            if (distancias[chave]) {
                return distancias[chave];
            } else {
                // Se a distância não estiver na tabela, retorne -1 para indicar que é desconhecida
                return -1;
            }
        }

        // Função para calcular o preço da passagem com base na distância e em um valor por quilômetro
        function calcularPassagem() {
            var cidadeOrigem = document.getElementById("saindoDe").value;
            var cidadeDestino = document.getElementById("indoPara").value;
            var distancia = calcularDistancia(cidadeOrigem, cidadeDestino);

            if (distancia >= 0) {
                // Calcular o preço da passagem com base na distância e em um valor por quilômetro (exemplo: R$0,50 por km)
                var valorPorKm = 0.50; // Exemplo: R$0,50 por km
                var valorPassagem = distancia * valorPorKm;
                alert("O valor da passagem de " + cidadeOrigem + " para " + cidadeDestino + " é de R$" + valorPassagem.toFixed(2));
            } else {
                alert("Não foi possível calcular a distância entre as cidades.");
            }
        }
