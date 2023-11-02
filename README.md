# Finalmente Parte Chata Terminada

## Recomendado baixar o arquivo em zip para melhor funcionamento

## Tabela do Banco de Dados:

```sql
create database userdb;
use userdb;

create table users (
  id bigint primary key auto_increment,
  username varchar(150),
  password int not null
);

select * from users;
