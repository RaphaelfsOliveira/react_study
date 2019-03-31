## Hurb Node Conversion API
É só executar os comandos abaixo



#### git clone $seu-fork:
> git clone https://github.com/RaphaelfsOliveira/challenge-bravo.git && cd {{folder}}



#### cd $seu-fork:
> cd %folder%



#### cd $seu-fork:
> sudo npm i



#### comando para instalar dependências:
> sudo docker build --tag=Hurb_proj .



#### comando para executar a aplicação:
> sudo docker-compose up

Depois de subir o projeto use as urls definidas abaixo.




##### Listagem de moedas

Exemplo abaixo:

- http://localhost:8000/conversion/


##### Conversão de Moedas

Parâmentros obrigatórios: `from=`, `to=`, `amount=`.

Formatação do parâmentros: `from={ moeda }&to={ moeda }&amount={ valor }`.

Exemplo abaixo:

- http://localhost:8000/conversion/from=BRL&to=ARS&amount=3000
